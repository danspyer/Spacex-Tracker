import * as React from 'react'
import { BrowserRouter as  Router, Route, Link, Switch } from 'react-router-dom'
import logo from '../../Images/SpaceX-Logo.png';
import './Navbar.css';

export const Navbar = (props: any) => {
    return (
        <div className="NavBar-Container">
            <Link className="Logo-Container" to="/" ><img className="Logo" src={logo} alt="SpaceX Logo"></img></Link>
            <Link className="NavLink" to="/vehicles/falcon1" >
                <div className="">
                    <a href="#Placeholder"> Falcon 1 </a>
                </div>
            </Link>
            <Link className="NavLink" to="/vehicles/falcon9" >
                <div className="">
                    <a href="#Placeholder"> Falcon 9 </a>
                </div>
            </Link>
            <Link className="NavLink" to="/vehicles/falconHeavy" >
                <div className="">
                    <a href="#Placeholder"> Falcon Heavy </a>
                </div>
            </Link>
            <Link className="NavLink" to="/vehicles/dragon" >
                <div className="">
                    <a href="#Placeholder"> Dragon </a>
                </div>
            </Link>
            <Link className="NavLink" to="/vehicles/starship" >
                <div className="">
                    <a href="#Placeholder"> Starship </a>
                </div>
            </Link>
        </div>
    );
};