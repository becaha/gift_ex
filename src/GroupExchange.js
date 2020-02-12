import React from 'react';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import trash_icon from "./assets/trash_icon.png";

export class GroupExchange extends React.Component {
    constructor(props){
        super(props);
        this.state = {year: 2020, memberForm: null, members: props.members};
        this.nextYear = this.nextYear.bind(this);
        this.prevYear = this.prevYear.bind(this);
        this.closeMemberForm = this.closeMemberForm.bind(this);
        this.openMemberForm = this.openMemberForm.bind(this);
        this.handleNewMember = this.handleNewMember.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteMember = this.deleteMember.bind(this);
        this.createAssignments = this.createAssignments.bind(this);
        this.exchangeIndex = 1;
        this.newMember = null;
    }

    nextYear() {
        this.exchangeIndex = (this.exchangeIndex + 1) % this.state.members.length;
        if(this.exchangeIndex === 0) {
            this.exchangeIndex = 1;
        }
        this.setState({year: this.state.year + 1});
    }

    prevYear() {
        this.exchangeIndex = (this.exchangeIndex - 1) % this.state.members.length;
        if(this.exchangeIndex === 0) {
            this.exchangeIndex = this.state.members.length - 1;
        }
        this.setState({year: this.state.year - 1});
    }

    closeMemberForm() {
        this.setState({memberForm: null});
    }

    openMemberForm() {
        if (this.state.memberForm === null) {
            this.setState({memberForm: (<div>
                    <FormControl
                placeholder="Member Name"
                aria-label="Member Name"
                aria-describedby="basic-addon1"
                onChange={e => this.handleChange(e)}
            />
            <Button onClick={this.handleNewMember}>></Button>
            </div>)});
        }
    }

    handleChange(event) {
        this.newMember = event.target.value;
    }

    handleNewMember() {
        this.state.members.push(this.newMember);
        this.newMember = null;
        this.closeMemberForm();
    }

    deleteMember(e, removeMember) {
        let updatedMembers = this.state.members.filter(member =>
           removeMember !== member
        );
        this.setState({members: updatedMembers});
    }

    createAssignments() {
        const memberAssignments = this.state.members.map((member, index) => {
            let exIndex = (index + this.exchangeIndex) % this.state.members.length;
            return (
                <tr>
                    <td>{member}</td>
                    <td>{this.state.members[exIndex]}</td>
                </tr>
            )
        });
        return memberAssignments;
    }

    render() {
        console.log('Group render');

        const memberAssignments = this.createAssignments();

        const rowMembers = this.state.members.map(member => {
            return (
                <tr>
                    <td>{member}
                        <Button className="btn-table btn-delete" onClick={(e) => this.deleteMember(e, member)}>
                            <img className="icon" src={trash_icon} alt="X"/>
                        </Button>
                    </td>
                </tr>
            )
        });

        return <div>
            <div className="page page-main">
            <div className="main">
                <Table bordered>
                    <thead className="thead">
                    <tr>
                        <th colSpan="2" className="table-title">
                            {this.props.groupName.toUpperCase()} EXCHANGE {this.state.year}
                        </th>
                    </tr>
                    <tr>
                        <th>GIVER</th>
                        <th>GIVEE</th>
                    </tr>
                    </thead>
                    <tbody className="tbody">
                        {memberAssignments}
                    </tbody>
                </Table>
            </div>
            <div className="sidebar-right">
                <Button onClick={this.prevYear}>Previous Year</Button>
                <Button onClick={this.nextYear}>Next Year</Button>
                {/*<Button>Add Member</Button>*/}
                {/*<Button>Delete Member</Button>*/}
            </div>

        </div>
            <div className="page">
                <div className="main">
                <Table bordered>
                    <thead className="thead">
                    <tr>
                        <th colSpan="2" className="table-title">
                            {this.props.groupName} Members
                        </th>
                    </tr>
                    </thead>
                    <tbody className="tbody">
                    {rowMembers}
                    </tbody>
                </Table>
                </div>
                <div className="sidebar-right">
                    <Button onClick={this.openMemberForm}>Add Member {this.state.memberForm}</Button>
                </div>
            </div>
            </div>;
    }
}
