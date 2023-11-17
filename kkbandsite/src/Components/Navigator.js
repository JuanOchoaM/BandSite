import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "./navbar.css"

export default function Navigator() {
  return (
   <Router>
       <Routes>
         <Route path="/music" element={<Music />}/>
         <Route path="/live-performances" element={<LivePerformances />}/>
         <Route path="/" element={<Home />}/>
       </Routes>
   </Router>
  
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Music() {
  return <h2>Music</h2>;
}

function LivePerformances() {
  return <h2>Live Performances</h2>;
}

