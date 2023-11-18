import React, { useState } from "react";
import background from './../../assets/sign_up_bg.png'
import './signup.css'

export default function SignUp() {
    const [firstName, setFirstName] = useState("First Name");
    const [lastName, setLastName] = useState("Last Name");
    const [email, setEmail] = useState("Email");
    const [password, setPassword] = useState("");

    function setBackground() {
        document.body.style.backgroundImage = `url(${background})`;
    }

    setBackground();
    return (
        <div>
            <form>
                <h2>Sign Up</h2>
                <input  type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                <input  type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                <input  type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input  type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Sign Up</button>
                <a href="/login">Already have an account? Login here!</a>
            </form>
        </div>
   
    )

}