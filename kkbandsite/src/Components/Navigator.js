import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "./navbar.css"
import Login from "./Registration/Login";
import SignUp from "./Registration/SignUp";
import Merch from "./pages/Merch";
import NavBar from "./NavBar";

export default function Navigator() {
  return (
   <Router>
    <NavBar />
       <Routes>
         <Route exact path="/" element={<Merch />}/>
         <Route path="/merch" element={<Merch />}/>
         <Route path="/music" element={<Music />}/>
         <Route path="/live-performance" element={<LivePerformances />}/>
         <Route path="/login" element={<SignUp />}/>
         <Route path="/signup" element={<Login />}/>
       </Routes>
   </Router>
  
  );
}

function Music() {
  return <h2>Music</h2>;
}

function LivePerformances() {
  return <h2>Live Performances</h2>;
}

