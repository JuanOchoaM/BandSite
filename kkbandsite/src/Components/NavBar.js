import React from "react";
import { NavLink,
 } from "react-router-dom";
import "./navbar.css"
// Will
export default function NavBar() {
        return (
                    <div className="navbar">
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
        );
    };
     
