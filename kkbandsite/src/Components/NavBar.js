import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css"
import logo from "../assets/Karma_Kat2 copy.png"
// Will
export default function NavBar() {
        return (
            <div className="navbar">
                <div className="logo-title">
                    <a href="/merch">
                        <img href="/merch" src={logo} alt="Karma Kat Logo" className="logo"/>
                    </a>
                    <h1 className="title">Karma Kat</h1>
                </div>
                <div className="nav-links">
                    <NavLink to="/music" className="Navlink">
                        Music
                    </NavLink>
                    <NavLink to="/live-performance" className="Navlink">
                        Live Performances
                    </NavLink>
                    <NavLink to="/merch" className="Navlink">
                        Merch
                    </NavLink>
                    <NavLink to="/signup" className="Navlink" id="login">
                        Sign Up / Login
                    </NavLink>
                </div>
            </div>
        );
    };
     
