import React from 'react';
import Nav from "react-bootstrap/Nav";
import {Router} from "./Router";
import {GroupExchange} from "./GroupExchange";
import {Wishlist} from "./Wishlist";
import './App.css';

export class Screen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {page: 'GroupExchange'};
        this.setWishlistPage = this.setWishlistPage.bind(this);
        this.setGroupPage = this.setGroupPage.bind(this);
        this.person = null;
    }

    setGroupPage() {
        this.setState({
            page: 'GroupExchange'
        });
        console.log('Group');
    }

    setWishlistPage(e, name) {
        this.setState({
            page: 'Wishlist'
        });
        console.log('Wish', name);
        this.person = name
    }

    render() {
        console.log('Screen render', this.props.members);
        const navLinks = this.props.members.map(member => {
            return (
                <Nav.Link className="nav-link-child" onClick={(e) => this.setWishlistPage(e, member)}>
                    {member}
                </Nav.Link>
            )
        });

        return  <div className="screen">
        <div className="sidebar">
            <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home" onClick={this.setGroupPage}>{this.props.groupName}</Nav.Link>
            <Nav.Link href="#">Wishlists</Nav.Link>
            <Nav.Link className="nav-link-parent" style={{paddingTop: 0, paddingBottom: 0, paddingRight: 0}}>
                {navLinks}
            </Nav.Link>
        </Nav>
        </div>
            <Router page={this.state.page} groupName={this.props.groupName} members={this.props.members} person={this.person}/>
        </div>;

    }
}
