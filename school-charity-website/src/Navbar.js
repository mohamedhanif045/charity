// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      {/* Logo above the navbar */}
      <div className="text-center mt-3">
        <img
          src="https://www.schoolsforkenya.co.uk/wp-content/uploads/2019/03/Schools-For-Kenya-Logo.jpg"
          alt="Schools For Kenya Logo"
          style={{ maxWidth: '200px', height: 'auto' }}
        />
      </div>

      {/* Navbar with attractive background color */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">  {/* Dark navbar with primary color */}
        <div className="container">
          <Link className="navbar-brand text-white" to="/">School Charity</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/our-schools">Our Schools</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/gallery">Gallery</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/news">News</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/sponsors">Sponsors</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/history">History</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact-us">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/born-free">Born Free</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
