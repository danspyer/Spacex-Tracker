import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';
import logo from '../Images/SpaceX-Logo.png';
import './Nav.css';

export const Navigation = (props: any) => {
    return (
        <Navbar className="p-3" bg="transparent" expand="lg">
            <Navbar.Brand href="#home">
                <img className="Logo" src={logo} alt="SpaceX Logo"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Falcon 1</Nav.Link>
                <Nav.Link href="#link">Falcon 9</Nav.Link>
                <Nav.Link href="#link">Dragon</Nav.Link>
                <Nav.Link href="#link">Starship</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export const NavigationV2 = (props: any) => {
    return (
        <div className="NavBar-Container">
            <div className="Logo-Container">
                <img className="Logo" src={logo} alt="SpaceX Logo"></img>
            </div>
            <div className="NavLink">
                <a href="#Placeholder"> Falcon 1 </a>
            </div>
            <div className="NavLink">
                <a href="#Placeholder"> Falcon 9 </a>
            </div>
            <div className="NavLink">
                <a href="#Placeholder"> Falcon Heavy </a>
            </div>
            <div className="NavLink">
                <a href="#Placeholder"> Dragon </a>
            </div>
            <div className="NavLink">
                <a href="#Placeholder"> Starship </a>
            </div>
        </div>
    );
};