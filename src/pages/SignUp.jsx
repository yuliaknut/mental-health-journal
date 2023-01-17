import React from "react";
import Input from "../components/Input";

function SignUp() {
    return (<div className="aref">
        <h1 className="page-title">Take another step toward self awareness</h1>
        <form className="form">
            <Input 
            type="text"
            placeholder="Email Address"
            />
            <Input 
            type="password"
            placeholder="Password"
            />
            <Input 
            type="password"
            placeholder="Confirm Password"
            />
            <button type="submit">Register</button>
        </form>

        <a className="ref" href="/login">I already have an account</a>

    </div>)

}

export default SignUp;