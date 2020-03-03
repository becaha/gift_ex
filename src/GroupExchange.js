import React from 'react';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormControl from "react-bootstrap/FormControl";
import trash_icon from "./assets/trash_icon.png";
// import trash_icon_light from "./assets/trash_icon_grey.png";

export class GroupExchange extends React.Component {
    constructor(props){
        super(props);
        console.log(props.members);
        this.members = props.members;
        this.state = {year: 2020, memberForm: null, members: props.members, show: false};
        this.nextYear = this.nextYear.bind(this);
        this.prevYear = this.prevYear.bind(this);
        this.handleNewMember = this.handleNewMember.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteMember = this.deleteMember.bind(this);
        this.createAssignments = this.createAssignments.bind(this);
        this.exchangeIndex = 1;
        this.newMember = null;
        this.setMembers = this.setMembers.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    setMembers(newMembers) {
        this.props.setMembers(newMembers);
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

    handleChange(event) {
        this.newMember = event.target.value;
    }

    handleNewMember() {
        this.handleClose();
        this.state.members.push(this.newMember);
        this.newMember = null;
        this.setMembers(this.state.members);
    }

    deleteMember(e, removeMember) {
        let updatedMembers = this.state.members.filter(member =>
           removeMember !== member
        );
        this.setState({members: updatedMembers});
        this.setMembers(updatedMembers);
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

    handleClose() {
        this.setState({show: false});
    }

    handleShow() {
        console.log('show');
        this.setState({show: true});
    }


    render() {
        const style = {minHeight : window.innerHeight};

        console.log('Group render', this.state.members);

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

        return <div className="background" style={style}>
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
                    <Button onClick={this.handleShow}>Add Member</Button>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>New Member</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <FormControl
                                placeholder="Member Name"
                                aria-label="Member Name"
                                aria-describedby="basic-addon1"
                                onChange={e => this.handleChange(e)}
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="btn-modal" onClick={this.handleNewMember}>
                                Add
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
            </div>;
    }
}
