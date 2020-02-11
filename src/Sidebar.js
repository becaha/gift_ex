import React from 'react';
import Nav from "react-bootstrap/Nav";
import {Router} from "./Router";
import {GroupExchange} from "./GroupExchange";
import {Wishlist} from "./Wishlist";
import './App.css';

export class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {page: 'GroupExchange'};
        this.setWishlistPage = this.setWishlistPage.bind(this);
        this.setGroupPage = this.setGroupPage.bind(this);
    }

    setGroupPage() {
        this.setState({
            page: 'GroupExchange'
        });
        console.log('Group');
    }

    setWishlistPage() {
        this.setState({
            page: 'Wishlist'
        });
        console.log('Wish');
    }



    // onWishlistClick(name) {
    //     // this.setWishlistPage();
    // }
    //
    // onGroupClick() {
    //     // this.setGroupPage();
    // }

    render() {
        console.log('Sidebar render');
        const members = ['Jo Jones', 'Carrie Jones', 'Piper Jones', 'Marie Jones', 'Arty Jones', 'Sally Jones', 'Callie Jones', 'Chris Jones'];
        const navLinks = members.map(member => {
            return (
                <Nav.Link className="nav-link-child" href={'/' + member}>
                    {member}
                </Nav.Link>
            )
        });

        return  <div className="screen">
        <div className="sidebar">
            <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home" onClick={this.setGroupPage}>Jones Family</Nav.Link>
            <Nav.Link href="#">Wishlists</Nav.Link>
            <Nav.Link className="nav-link-parent" style={{paddingTop: 0, paddingBottom: 0, paddingRight: 0}}>
                <Nav.Link className="nav-link-child" href='#' onClick={this.setWishlistPage}>Sarah Jones</Nav.Link>
                <Nav.Link className="nav-link-child" href='#' onClick={this.setWishlistPage}>Mike Jones</Nav.Link>
                <Nav.Link className="nav-link-child" href='#' onClick={this.setWishlistPage}>Mo Jones</Nav.Link>
            </Nav.Link>
        </Nav>
        </div>
            {/*<Router page={this.state.page} person={this.props.person}/>*/}
            <Router page={this.state.page}/>
        </div>;

    }
}
