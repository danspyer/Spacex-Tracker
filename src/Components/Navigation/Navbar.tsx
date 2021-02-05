import React from "react";
import logo from '../../Images/SpaceX-Logo.png';
import './Navbar.css';

export const Navbar = (props: any) => {
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