import React from 'react';
import {GroupExchange} from "./GroupExchange";
import {Wishlist} from "./Wishlist";

export class Router extends React.Component {

    constructor(props) {
        super(props);
        this.members = props.members;
    }

    render() {
        console.log('router render', this.members);
        const page = this.props.page || 'GroupExchange';
        if (page === 'GroupExchange') {
            return <GroupExchange members={this.members} groupName={this.props.groupName} setMembers={(m) => this.props.setMembers(m)}/>;
        }
        else {
            return <Wishlist members={this.members} person={this.props.person} setMembers={(m) => this.props.setMembers(m)}/>;
        }
    }
}
