import React from "react";
import Input from "../components/Input";
import { mouseOver, mouseOut } from "./LogIn";

function SignUp() {
    return (<div className="alined">
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
            <button className="login-button" type="submit">Register</button>
        </form>

        <a className="ref" onMouseEnter={mouseOver} onMouseLeave={mouseOut} href="/login">I already have an account</a>

    </div>)

}

export default SignUp;