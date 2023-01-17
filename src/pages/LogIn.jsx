import React, { useState } from "react";
import Input from "../components/Input";

function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function handleSubmission () {
        setEmail(email);
        setPassword(password);
    }

    return (<div className="aref">
        <h1 className="page-title">Take another step toward self awareness</h1>
        <form className="form" onSubmit={handleSubmission}>
            <Input 
            type="text"
            name="email"
            placeholder="Email Address"
            />
            <Input 
            type="password" 
            name="password"
            placeholder="Password"
            />
            <button type="submit">Sign In</button>
            
        </form>

        <a className="ref" href="/register">Or create an account</a>
        
    </div>)

}

export default LogIn;