import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css"
import logo from "../assets/Karma_Kat2 copy.png"
// Will
export default function NavBar(props) {

    function logOut(e) {
        if (props.isAuthenticated) {
            e.preventDefault();
            props.setIsAuthenticated(false);
        }
    }

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
                    <NavLink to={props.isAuthenticated ? "/login" : "/signup"} className="Navlink" id="login" onClick={(e) => logOut(e)}>
                         {props.isAuthenticated ? "Log Out" : "Sign Up / Login"}
                    </NavLink>
                </div>
            </div>
        );
    };
     
