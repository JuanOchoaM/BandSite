import React, { useState } from "react";
import './signup.css'

export default function Login() {
    const [email, setEmail] = useState("Email");
    const [password, setPassword] = useState("");

    return (
        <div>
            <form>
                <h2>Login</h2>
                <input  type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input  type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Login</button>
                <a href="/signup">Don't have an account? Sign up here!</a>
            </form>
        </div>
    )

}