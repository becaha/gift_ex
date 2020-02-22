import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import MainLogo from "./assets/gift_icon_W.png";

export class LogoHeader extends React.Component {
    render() {
        const imagestyle = {height:"30px",margin:"10px"};
        return <Navbar className="navbar" expand="lg">
            <img src={MainLogo} style={imagestyle} alt="logo"/>
            <Navbar.Brand onClick={this.props.setGroupPage}><p className="brand" >GiftEx</p></Navbar.Brand>
        </Navbar>;
    }
}
