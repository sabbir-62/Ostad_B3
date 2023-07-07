import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [credentials, setcredentials] = useState({email: "", password: "" });
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/v1/loginUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password
            })
        });
        const json = await response.json()
        console.log(json)

        if (!json.success) {
            alert("Please Enter Email and Password");
        }
        if (json.success) {
            navigate('/');
        }
    }

    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }
    return (
        <div className='text-light'>
             <div className='container text-light'>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mt-5 my-2">
                        <label htmlFor="email" className='form-label'>Email address</label>
                        <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="password1" className='form-label'>Password</label>
                        <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="password1" placeholder="Password" />
                    </div>
                    <button type="submit" className="my-3 btn btn-success">Submit</button>
                    <Link to="/signup" className='m-3 btn btn-danger'>Create Profile</Link>
                </form>
            </div>
        </div>
    );
};

export default Login;