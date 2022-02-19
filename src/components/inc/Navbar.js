import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/WLogo.jpeg'


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid position-relative " >
                <Link className="navbar-brand " to={'/'}>
                <img src={logo} alt='logo' style={{maxWidth:'60px'}} className="d-inline"/> 
                <h1 className="d-inline "> EL Dabar City Church</h1>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={'/'}>
                            <i className="bi bi-house-door-fill"></i>
                           Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/About'}>
                            <i className="bi bi-info-circle-fill"></i>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/Contact'}>
                            <i className="bi bi-person-lines-fill"></i>
                            Contact Us</Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;