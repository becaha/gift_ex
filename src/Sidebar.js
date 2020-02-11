import React from 'react';
import Nav from "react-bootstrap/Nav";
import {Router} from "./Router";
import {GroupExchange} from "./GroupExchange";
import {Wishlist} from "./Wishlist";

export class Sidebar extends React.Component {
    onClick(name) {
        this.props.page = 'Wishlist';
        this.props.person = name;
    }

    render() {
        const page = this.props.page || 'GroupExchange';
        if (page === 'GroupExchange') {
            return <GroupExchange/>;
        }
        else {
            return <Wishlist person={this.props.person}/>;
        }

        const members = ['Jo Jones', 'Carrie Jones', 'Piper Jones', 'Marie Jones', 'Arty Jones', 'Sally Jones', 'Callie Jones', 'Chris Jones'];
        const navLinks = members.map(member => {
            return (
                <Nav.Link className="nav-link-child" href={'/' + member}>
                    {member}
                </Nav.Link>
            )
        });

        return <div>
            <div className="sidebar">
            <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">Jones Family</Nav.Link>
            <Nav.Link href="#">Wishlists</Nav.Link>
            <Nav.Link className="nav-link-parent" style={{paddingTop: 0, paddingBottom: 0, paddingRight: 0}}>
                <Nav.Link className="nav-link-child" href='#' onClick={this.onClick('Sarah Jones')}>Sarah Jones</Nav.Link>
                <Nav.Link className="nav-link-child" href='#' onClick={this.onClick('Mike Jones')}>Mike Jones</Nav.Link>
                <Nav.Link className="nav-link-child" href='#' onClick={this.onClick('Mo Jones')}>Mo Jones</Nav.Link>
            </Nav.Link>
        </Nav>
        </div>
            <Router/>
        </div>;
    }
}
