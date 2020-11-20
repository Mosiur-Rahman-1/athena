import React from 'react';
import './Navbar.css';
import logo from '../../../Images/Illustration/brand-logo.png';
import navMobileIcon from '../../../Images/Illustration/menu-2-outline.png';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg container align-middle">
                <a href="#home"><img src={logo} className="navbar-brand" alt="brand logo"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span><img src={navMobileIcon} className="navbar-toggler" alt=""/></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Our Team</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link contact-btn-modify text-white"  id = "contact-btn-mobile" href="#">Contact us</a>
                    </li>
                </ul>
                </div>
            </nav> 
        </div>
    );
};

export default Navbar;