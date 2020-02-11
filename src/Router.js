import React from 'react';
import {GroupExchange} from "./GroupExchange";
import {Wishlist} from "./Wishlist";

export class Router extends React.Component {
    // constructor(props){
    //     super(props);
    //
    // }

    render() {
        const page = this.props.page || 'GroupExchange';
        if (page === 'GroupExchange') {
            return <GroupExchange/>;
        }
        else {
            return <Wishlist person={this.props.person}/>;
        }
    }
}
