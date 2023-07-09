import React from "react";
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login')
    }


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <Link className="navbar-brand fs-1 ms-4 fst-italic" to="/">Foody</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link active fs-5" to="/">
                                Home
                            </Link>
                        </li>
                        {(localStorage.getItem('token')) ?
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" to="/">
                                    My Orders
                                </Link>
                            </li>
                            : ""
                        }
                    </ul>


                    {(!localStorage.getItem('token')) ?
                    <div className="d-flex me-4">
                        <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
                        <Link className="btn bg-white text-success mx-1" to="/signup">Signup</Link>
                    </div>
                    :
                    <div>
                        <div className="btn bg-white text-success mx-1 me-4">My Cart</div>
                        <div className="btn bg-white text-danger mx-1 me-4" onClick={handleLogout}>Logout</div>
                    </div>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
