import React from "react";
import { NavLink,
 } from "react-router-dom";
// Will
export default function NavBar() {
        return (
                    <div>
                        <NavLink to="/music" className="Navlink">
                            Music
                        </NavLink>
                        <NavLink to="/live-performance" className="Navlink">
                            Live Performances
                        </NavLink>
                        <NavLink to="/merch" className="Navlink">
                            Merch
                        </NavLink>
                        <NavLink to="/signup" className="Navlink">
                            Sign Up / Login
                        </NavLink>
                    </div>
        );
    };
     
