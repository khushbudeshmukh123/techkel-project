// src/components/Header.js
import React from 'react';
import logo from '../assets/images/logo.png';
import button_right_arrow from '../assets/images/button_right_arrow.svg';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg custom_header">
      <div className="container-fluid px-0">
        <a className="navbar-brand" href="#"><img src={logo} alt="Techkel Logo" className="logo" /></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto mr_34">
            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Innovate with Us</a></li>
            <li className="nav-item"><a className="nav-link" href="#">What We Do Best</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Work That Speaks</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Grow With Us</a></li>
            <li className="nav-item"><a className="nav-link" href="#"> Who We Are</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Meet Our Experts</a></li>
            <li className="nav-item"><a className="nav-link" href="#"> Hire a Developer</a></li>
          </ul>
        </div>
        <a href='#' className='btn btn_primary'>Let’s Connect <img src={button_right_arrow} alt="Techkel Logo" className="ml_2" /></a>
      </div>
    </nav>
  );
};

export default Header;
