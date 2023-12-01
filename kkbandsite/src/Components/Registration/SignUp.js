import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './signup.css'
import axios from 'axios';
//import UserContext from "../context/UserContext";

export default function SignUp() {
    const [firstName, setFirstName] = useState("First Name");
    const [lastName, setLastName] = useState("Last Name");
    const [email, setEmail] = useState("Email");
    const [password, setPassword] = useState("Password");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate(); 

    const emailValidation = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const passwordValidation = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

    /*
    async function handleSubmit(e) {
        e.preventDefault();
        //setLoading(true);
        try {
            const newUser = { email, password, confirmPassword};

            await axios.post("http://localhost:3001/api/users/signup", newUser);
            const loginRes = await axios.post("http://localhost:3001/api/users/login", {
                email,
                password,
            });
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
            localStorage.setItem("auth-token", loginRes.data.token);
            //setLoading(false);
            navigate('/');
        } catch (err) {
            //setLoading(false);
            err.response.data.msg && setEmail(err.response.data.msg);
            
        }
    }
    */

    function onFocus(defaultValue, currentValue, setValue) {
        if (defaultValue === currentValue) {
            setValue("");
        }
    }

    function onFocusPassword(defaultValue, currentValue, setValue) {
        onFocus(defaultValue, currentValue, setValue);
        document.getElementById("signup-password").type = 'password';
    }

    function validate() {
        console.log("validating");

        let isValid = true;
        
        if (firstName.trim() === "") {
            isValid = false;
            setFirstNameError("Field cannot be blank");
        } else {
            setFirstNameError("");
        }
        console.log(firstNameError);

        if (lastName.trim() === "") {
            isValid = false;
            setLastNameError("Field cannot be blank");
        } else {
            setLastNameError("");
        }

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

        if (password.trim !== "" && !password.match(passwordValidation)) {
            isValid = false;
            setPasswordError("Password must be 8 - 16 characters long and contain at least one number and one special character !@#$%^&");
        } else {
            setPasswordError("");
        }

        return isValid;
    }

    function submit(e) {
        e.preventDefault();
        if (validate()) {
            console.log("navigating");
            navigate("/")
        }
    }

    return (
        <div>
            <form class="signup-form" >
                <h2 class="form-header">Sign Up</h2>
                <div class="input-div">
                    <label>First Name</label>
                    <input id="signup-first-name" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} onFocus={(e) => onFocus("First Name", e.target.value, setFirstName)}/>
                    <p display={firstNameError.trim === "" ? 'none' : 'block'} id="signup-first-name-error">{firstNameError}</p>
                </div>
                <div class="input-div">
                    <label>Last Name</label>
                    <input id="signup-last-name" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} onFocus={(e) => onFocus("Last Name", e.target.value, setLastName)}/>
                    <p  display={lastNameError.trim === "" ? 'none' : 'block'} id="signup-last-name-error">{lastNameError}</p>
                </div>
                <div class="input-div">
                    <label>Email</label>
                    <input id="signup-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} onFocus={(e) => onFocus("Email", e.target.value, setEmail)}/>
                    <p display={emailError.trim === "" ? 'none' : 'block'} id="signup-email-error" >{emailError}</p>
                </div>
                <div class="input-div">
                    <label>Password</label>
                    <input id="signup-password" type="text" value={password} onChange={(e) => setPassword(e.target.value)} onFocus={(e) => onFocusPassword("Password", e.target.value, setPassword)}/>
                    <p display={passwordError.trim === "" ? 'none' : 'block'} id="signup-password-error">{passwordError}</p>
                </div>
                <button class="signup-submit submit-button" onClick={(e) => submit(e)}>Sign Up</button>
                <a class="form-help" href="/login">Already have an account? Login here!</a>
            </form>
        </div>
   
    )

}