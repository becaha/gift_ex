import React from 'react';
import Nav from "react-bootstrap/Nav";

export class Sidebar extends React.Component {
    render() {
        const members = ['Jo Jones', 'Carrie Jones', 'Piper Jones', 'Marie Jones', 'Arty Jones', 'Sally Jones', 'Callie Jones', 'Chris Jones'];
        const navLinks = members.map(member => {
            return (
                <Nav.Link className="nav-link-child" href={'/' + member}>
                    {member}
                </Nav.Link>
            )
        });

        return <div className="sidebar">
            <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">Jones Family</Nav.Link>
            <Nav.Link href="#">Wishlists</Nav.Link>
            <Nav.Link className="nav-link-parent" style={{paddingTop: 0, paddingBottom: 0, paddingRight: 0}}>
                <Nav.Link className="nav-link-child" href='#'>Sarah Jones</Nav.Link>
                <Nav.Link className="nav-link-child" href='#'>Mike Jones</Nav.Link>
                <Nav.Link className="nav-link-child" href='#'>Mo Jones</Nav.Link>
            </Nav.Link>
        </Nav>
        </div>;
    }
}
