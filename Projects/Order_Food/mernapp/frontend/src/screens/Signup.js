import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
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
        <div>
            <div className='container text-light'>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mt-5 my-2">
                        <label htmlFor="name" className='form-label'>Name</label>
                        <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} placeholder="Enter Name" />
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="location" className='form-label'>Location</label>
                        <input type="text" className="form-control" name='location' value={credentials.location} onChange={onChange} placeholder="Enter Location" />
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="email" className='form-label'>Email address</label>
                        <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="password1" className='form-label'>Password</label>
                        <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="password1" placeholder="Password" />
                    </div>
                    <button type="submit" className="my-3 btn btn-success">Submit</button>
                    <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
                </form>
            </div>
        </div>
    );
};

export default Signup;