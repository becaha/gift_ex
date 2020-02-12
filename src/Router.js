import React from 'react';
import {GroupExchange} from "./GroupExchange";
import {Wishlist} from "./Wishlist";

export class Router extends React.Component {

    render() {
        console.log('Router render');
        const page = this.props.page || 'GroupExchange';
        if (page === 'GroupExchange') {
            return <GroupExchange members={this.props.members} groupName={this.props.groupName}/>;
        }
        else {
            return <Wishlist members={this.props.members} person={this.props.person}/>;
        }
    }
}
