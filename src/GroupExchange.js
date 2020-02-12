import React from 'react';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

// window.$members = [];

export class GroupExchange extends React.Component {
    constructor(props){
        super(props);
        this.state = {year: 2020};
        this.nextYear = this.nextYear.bind(this);
        this.prevYear = this.prevYear.bind(this);
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

    // addMember(name) {
    //     this.members.push(name);
    // }

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
        const memberAssignments = this.createAssignments();

        console.log('Group render');
        return <div className="page">
            <div className="main">
                <Table bordered>
                    <thead className="thead">
                    <tr className="table-title">
                        <th colSpan="2">FAMILY EXCHANGE {this.state.year}</th>
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
        </div>;
    }
}
