import * as React from 'react'
import { BrowserRouter as  Router, Route, Link, Switch } from 'react-router-dom'
import logo from '../../Images/SpaceX-Logo.png';
import './Navbar.css';

export const Navbar = (props: any) => {
    return (
        <div className="NavBar-Container">
            <Link className="Logo-Container" to="/" ><img className="Logo" src={logo} alt="SpaceX Logo"></img></Link>
            <Link className="NavLink" to="/vehicles/falcon9" >
                <a href="#Placeholder"> Falcon 9 </a>
            </Link>
            <Link className="NavLink" to="/vehicles/falconHeavy" >
                <a href="#Placeholder"> Falcon Heavy </a>
            </Link>
            <Link className="NavLink" to="/vehicles/dragon" >
                <a href="#Placeholder"> Dragon </a>
            </Link>
            <Link className="NavLink" to="/vehicles/starship" >
                <a href="#Placeholder"> Starship </a>
            </Link>
            <Link className="NavLink" to="/orbit" >
                <a href="#Placeholder"> Orbit Page </a>
            </Link>
        </div>
    );
};