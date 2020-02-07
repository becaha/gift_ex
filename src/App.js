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
          <div className="sidebar">
              <Nav defaultActiveKey="/home" className="flex-column">
                  <Nav.Link className="nav-link" href="/home">Jones Family</Nav.Link>
                  <Nav.Link className="nav-link">Wishlists
                      <Nav.Link href='#' className="nav-link">Sarah Jones</Nav.Link>
                      <Nav.Link href='#' className="nav-link">Mike Jones</Nav.Link>
                      <Nav.Link href='#' className="nav-link">Mo Jones</Nav.Link>
                  </Nav.Link>
              </Nav>
          </div>
      </div>
  );
}

export default App;
