import React, { useState } from 'react';
import './Register.css';
import Button from '@material-ui/core/Button';
import Axios from 'axios';
import { Redirect } from 'react-router-dom'

function Register() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = () => {
        Axios({
            method: "POST",
            data: {
                email: registerEmail,
                password: registerPassword
            },
            withCredentials: true,
            url: "http://localhost:5000/users/register"
        }).then((res) => console.log(res));
        // <Redirect to='todos' />
    }

    return (
        <div className="wrapper">
            <div className="form-wrapper">
                <h1>Register</h1>
                <form noValidate>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email" required name="email" onChange={(e) => setRegisterEmail(e.target.value)} noValidate placeholder="Email" />
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input type="password" required name="password" onChange={(e) => setRegisterPassword(e.target.value)} noValidate placeholder="Password" />
                    </div>
                    <div className="submit">
                        <Button variant="contained" color="primary" onClick={register} >Register</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;