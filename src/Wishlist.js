import React from 'react';

export class Wishlist extends React.Component {
    render() {
        console.log('Wish render');
        return <div>{this.props.person}</div>;
    }
}
