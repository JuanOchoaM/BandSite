import React, { useState } from "react";
import './signup.css'
import FormGroup from '@mui/material/FormGroup';
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel';

export default function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    return (
        <FormGroup className="signup">
            <InputLabel htmlFor="my-input">First Name</InputLabel>
            <Input id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            
            <InputLabel htmlFor="my-input">Last Name</InputLabel>
            <Input id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            
            <InputLabel htmlFor="my-input">Email</InputLabel>
            <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            
            <InputLabel htmlFor="my-input">Password</InputLabel>
            <Input id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormGroup>
    )

}