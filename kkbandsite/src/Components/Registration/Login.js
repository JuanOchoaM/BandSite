import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './signup.css'
import axios from "axios";

export default function Login(props) {
    const [email, setEmail] = useState("Email");
    const [password, setPassword] = useState("Password");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [loginError, setLoginError] = useState("");

    const emailValidation = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const navigate = useNavigate(); 

    
    async function login() {

        const user = { email: email, password: password};

        try {
            let response = await axios.post("http://localhost:3001/api/users/login", user);
            localStorage.setItem("auth-token", response.data.token);
            props.setIsAuthenticated(true);
            navigate("/");
        } catch (error) {
            setLoginError(error.response.data.msg);
        }
}
    

    function onFocus(defaultValue, currentValue, setValue) {
        if (defaultValue === currentValue) {
            setValue("");
        }
    }

    function onFocusPassword(defaultValue, currentValue, setValue) {
        onFocus(defaultValue, currentValue, setValue);
        document.getElementById("login-password").type = 'password';
    }

    function validate() {
        console.log("validating");

        let isValid = true;
        

        if (email.trim() === "") {
            isValid = false;
            setEmailError("Field cannot be blank");
        } else {
            setEmailError("");
        }

        if (password.trim() === "") {
            isValid = false;
            setPasswordError("Field cannot be blank");
        } else {
            setPasswordError("");
        }

        if (email.trim !== "" && !email.match(emailValidation)) {
            isValid = false;
            setEmailError("Not an email");
        } else {
            setEmailError("");
        }
    

        return isValid;
    }

    function submit(e) {
        e.preventDefault();
        if (validate()) {
            login();
        }
    }


    return (
        <div>
            <form class="login-form"> 
                <h2 class="form-header">Login</h2>
                <div class="input-div">
                    <label>Email</label>
                    <input  type="text" value={email} onChange={(e) => setEmail(e.target.value)}  onFocus={(e) => onFocus("Email", e.target.value, setEmail)}/>
                    <p display={emailError.trim === "" ? 'none' : 'block'} id="signup-email-error" >{emailError}</p>
                </div>
                <div class="input-div">
                    <label>Password</label>
                    <input id="login-password" type="text" value={password} onChange={(e) => setPassword(e.target.value)}  onFocus={(e) => onFocusPassword("Password", e.target.value, setPassword)}/>
                    <p display={passwordError.trim === "" ? 'none' : 'block'} id="signup-password-error">{passwordError}</p>
                </div>
                <p display={loginError.trim === "" ? 'none' : 'block'} id="login-error">{loginError}</p>
                <button class="login-submit submit-button" type="submit" onClick={(e) => submit(e)}>Login</button>
                <a class="form-help" href="/signup">Don't have an account? Sign up here!</a>
            </form>
        </div>
    )

}