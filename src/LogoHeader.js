import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import MainLogo from "./gift_icon_W.png";

export class LogoHeader extends React.Component {
    render() {
        const imagestyle = {height:"30px",margin:"10px"}
        // return <nav>{navLinks}</nav>;
        return <Navbar className="navbar" expand="lg">
            {/*<img*/}
            {/*    src=""*/}
            {/*    width="30"*/}
            {/*    height="30"*/}
            {/*    className="d-inline-block align-top"*/}
            {/*    alt="logo"*/}
            {/*/>*/}
            <img src={MainLogo} style={imagestyle}/>
            <Navbar.Brand href="#home"><p className="brand" >GiftEx</p></Navbar.Brand>
        </Navbar>;
    }
}