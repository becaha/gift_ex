import React from 'react';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

// window.$members = [];

export class GroupExchange extends React.Component {
    constructor(props){
        super(props);
        this.state = {year: 2020};
        this.nextYear = this.nextYear.bind(this);
        this.prevYear = this.prevYear.bind(this);
    }

    nextYear() {
        this.setState({year: this.state.year + 1});
    }

    prevYear() {
        this.setState({year: this.state.year - 1});
    }

    // addMember(name) {
    //     this.members.push(name);
    // }

    render() {
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
                    <tr>
                        <td>Mark Anthony</td>
                        <td>Otto Park</td>
                    </tr>
                    <tr>
                        <td>Jacob Smith</td>
                        <td>Thornton Jones</td>
                    </tr>
                    <tr>
                        <td>Larry Kris</td>
                        <td>Birdi Han</td>
                    </tr>
                    <tr>
                        <td>Mark Anthony</td>
                        <td>Otto Park</td>
                    </tr>
                    <tr>
                        <td>Jacob Smith</td>
                        <td>Thornton Jones</td>
                    </tr>
                    <tr>
                        <td>Larry Kris</td>
                        <td>Birdi Han</td>
                    </tr>
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
