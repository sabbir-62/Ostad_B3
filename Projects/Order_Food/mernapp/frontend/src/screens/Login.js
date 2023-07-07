import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [credentials, setcredentials] = useState({ name: "", location: "", email: "", password: "" })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/v1/createUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: credentials.name,
                location: credentials.location,
                email: credentials.email,
                password: credentials.password
            })
        });
        const json = await response.json()
        console.log(json)

        if (!json.success) {
            alert("Enter Valid Credentials");
        }
    }

    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }
    return (
        <div className='text-light'>
            Login
        </div>
    );
};

export default Login;