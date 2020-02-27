import React from 'react';
import Nav from "react-bootstrap/Nav";
import {Router} from "./Router";
import {GroupExchange} from "./GroupExchange";
import {Wishlist} from "./Wishlist";
import {LogoHeader} from "./LogoHeader";
import dropdown from "./assets/dropdown.png";

export class Screen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {page: 'GroupExchange', members: props.members,list:this.props.giftLists, showWishlists: true};
        this.setWishlistPage = this.setWishlistPage.bind(this);
        this.setGroupPage = this.setGroupPage.bind(this);
        this.setMembers = this.setMembers.bind(this);
        this.setWishLists = this.setWishLists.bind(this);
        this.person = null;
        this.toggleWishlists = this.toggleWishlists.bind(this);
    }

    setMembers(newMembers) {
        console.log('screen set members', newMembers);
        this.setState({members: newMembers});
    }

    setWishLists(newList){
        var nlist = this.state.list;
        nlist[this.person] = newList;
        this.setState({list:nlist})
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

    toggleWishlists() {
        console.log("toggle wishlists", this.state.showWishlists);
        this.setState({showWishlists: !this.state.showWishlists});
    }

    render() {
        console.log('Screen render', this.state.members);
        const imagestyle = {height:"30px",margin:"10px"}
        let navLinks = this.state.members.map(member => {
            return (
                <Nav.Link className="nav-link-child" onClick={(e) => this.setWishlistPage(e, member)}>
                    {member}
                </Nav.Link>
            )
        });
        if (this.state.showWishlists == false) {
            navLinks = null;
        }
        return <div>
            <div className="screen">
                    <div className="sidebar">
                        <LogoHeader setGroupPage={this.setGroupPage}/>
                        <Nav className="flex-column sidebar-content">
                            <Nav.Link onClick={this.setGroupPage}>{this.props.groupName}</Nav.Link>
                            <Nav.Link onClick={this.toggleWishlists}>Wishlists <img className="btn-dropdown" src={dropdown}/></Nav.Link>
                            <Nav.Link className="nav-link-parent" style={{paddingTop: 0, paddingBottom: 0, paddingRight: 0}}>
                                {navLinks}
                            </Nav.Link>
                        </Nav>
                    </div>
                    <Router page={this.state.page} groupName={this.props.groupName} person={this.person} members={this.state.members} lists={this.props.giftLists} setMembers={(m) => this.setMembers(m)} setWishLists = {(l)=>this.setWishLists(l)}/>
            </div>
        </div>;

    }
}
