import React from 'react';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export class GroupExchange extends React.Component {
    render() {
        return <div className="page">
            <div className="main">
                <Table bordered>
                    <thead className="thead">
                    <tr className="table-title">
                        <th colSpan="2">FAMILY EXCHANGE 2020</th>
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
                <Button>Next Year</Button>
                <Button>Add Member</Button>
                <Button>Delete Member</Button>
            </div>
        </div>;
    }
}
