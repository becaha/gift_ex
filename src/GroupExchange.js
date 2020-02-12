import React from 'react';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export class GroupExchange extends React.Component {
    constructor(props){
        super(props);
        this.state = {year: 2020, memberForm: null};
        this.nextYear = this.nextYear.bind(this);
        this.prevYear = this.prevYear.bind(this);
        this.openMemberForm = this.openMemberForm.bind(this);
        this.handleNewMember = this.handleNewMember.bind(this);
        this.exchangeIndex = 1;
    }

    nextYear() {
        this.exchangeIndex = (this.exchangeIndex + 1) % this.props.members.length;
        if(this.exchangeIndex === 0) {
            this.exchangeIndex = 1;
        }
        this.setState({year: this.state.year + 1});
    }

    prevYear() {
        this.exchangeIndex = (this.exchangeIndex - 1) % this.props.members.length;
        if(this.exchangeIndex === 0) {
            this.exchangeIndex = this.props.members.length - 1;
        }
        console.log(this.exchangeIndex);
        this.setState({year: this.state.year - 1});
    }

    openMemberForm() {
        if (this.state.memberForm === null) {
            this.setState({memberForm: (<FormControl
                placeholder="Member Name"
                aria-label="Member Name"
                aria-describedby="basic-addon1"
                onSubmit={this.handleNewMember}
            />)});
        }
        // else {
        //     this.setState({memberForm: null});
        // }
    }

    handleNewMember(event) {
        console.log('new member name', event.target.value);
        this.members.push(event.target.value);
    }

    createAssignments() {
        const memberAssignments = this.props.members.map((member, index) => {
            let exIndex = (index + this.exchangeIndex) % this.props.members.length;
            console.log(index, exIndex, this.props.members.length);
            return (
                <tr>
                    <td>{member}</td>
                    <td>{this.props.members[exIndex]}</td>
                </tr>
            )
        });
        return memberAssignments;
    }

    render() {
        console.log('Group render');

        const memberAssignments = this.createAssignments();

        const rowMembers = this.props.members.map(member => {
            return (
                <tr>
                    <td>{member}</td>
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
                    <Button>Delete Member</Button>
                </div>
            </div>
            </div>;
    }
}
