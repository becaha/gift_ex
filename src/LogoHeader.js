import React from 'react';
import Navbar from "react-bootstrap/Navbar";

export class LogoHeader extends React.Component {
    render() {
        // return <nav>{navLinks}</nav>;
        return <Navbar className="navbar" expand="lg">
            {/*<img*/}
            {/*    src=""*/}
            {/*    width="30"*/}
            {/*    height="30"*/}
            {/*    className="d-inline-block align-top"*/}
            {/*    alt="logo"*/}
            {/*/>*/}
            <Navbar.Brand href="#home"><p className="brand" >GiftEx</p></Navbar.Brand>
        </Navbar>;
    }
}
