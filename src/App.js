import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card';

function App() {
  return (
      <div>
          <Navbar className="navbar" expand="lg">
              {/*<img*/}
              {/*    src=""*/}
              {/*    width="30"*/}
              {/*    height="30"*/}
              {/*    className="d-inline-block align-top"*/}
              {/*    alt="logo"*/}
              {/*/>*/}
              <Navbar.Brand href="#home"><p className="brand" >GiftEx</p></Navbar.Brand>
          </Navbar>
          <div className="screen">
              <div className="sidebar">
                  <Nav defaultActiveKey="/home" className="flex-column">
                      <Nav.Link href="/home">Jones Family</Nav.Link>
                      <Nav.Link href="#">Wishlists</Nav.Link>
                      <Nav.Link className="nav-link-parent" style={{paddingTop: 0, paddingBottom: 0, paddingRight: 0}}>
                          <Nav.Link className="nav-link-child" href='#'>Sarah Jones</Nav.Link>
                          <Nav.Link className="nav-link-child" href='#'>Mike Jones</Nav.Link>
                          <Nav.Link className="nav-link-child" href='#'>Mo Jones</Nav.Link>
                      </Nav.Link>
                  </Nav>
              </div>
              <div className="page">

              </div>
          </div>
      </div>
  );
}

export default App;
