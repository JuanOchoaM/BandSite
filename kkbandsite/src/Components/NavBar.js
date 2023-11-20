import React from "react";
import { NavLink,
 } from "react-router-dom";
import "./navbar.css"
// Will
export default function NavBar() {
        return (
            <div className="navbar">
               <div className="logo-title">
               <img src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg" alt="Karma Kat Logo" className="logo"/>
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
     
