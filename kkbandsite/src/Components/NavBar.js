import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css"
import logo from "../assets/Karma_Kat2 copy.png"
import { useNavigate } from "react-router-dom";
import { SocialIcon } from 'react-social-icons'
// Will
export default function NavBar(props) {
    const navigate = useNavigate(); 
    function logOut(e) {
        if (props.isAuthenticated) {
            e.preventDefault();
            props.setIsAuthenticated(false);
            navigate("/")
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
                    <NavLink to="/live-performances" className="Navlink">
                        Live Performances
                    </NavLink>
                    <NavLink to="/merch" className="Navlink">
                        Merch
                    </NavLink>
                    <NavLink to={props.isAuthenticated ? "/login" : "/signup"} className="Navlink" id="login" onClick={(e) => logOut(e)}>
                         {props.isAuthenticated ? "Log Out" : "Sign Up / Login"}
                    </NavLink>
                    <div className="socialsbox">
                        <SocialIcon fgColor="rgba(64, 13, 31, .8)" bgColor="white" url="https://twitter.com" target="_blank" style={{ height: 5, width: 5, marginLeft: 10 }} className="socials"/>
                        <SocialIcon fgColor="rgba(64, 13, 31, .8)" bgColor="white" url="https://www.instagram.com/karmakatmusic/" target="_blank" style={{ height: 5, width: 5, marginLeft: 10 }} className="socials"/>
                        <SocialIcon fgColor="rgba(64, 13, 31, .8)" bgColor="white" url="https://www.youtube.com/channel/UCpMu9oPD7frkSq-tJSxf4yQ" target="_blank" style={{ height: 5, width: 5, marginLeft: 10 }} className="socials"/>
                        <SocialIcon fgColor="rgba(64, 13, 31, .8)" bgColor="white" url="https://www.tiktok.com/en/" target="_blank" style={{ height: 5, width: 5, marginLeft: 10 }} className="socials"/>
                    </div>
                </div>
            </div>
        );
    };
     

