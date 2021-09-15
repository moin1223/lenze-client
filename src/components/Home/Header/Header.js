import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container">
             <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <p className="navbar-brand"><b>Lanze</b></p>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="animation navbar-nav ms-auto">
            <Link className="nav-link  active me-3 navbar-brand " to="..."><b>Home</b></Link>
            <Link className="nav-link  active me-3 navbar-brand" to="..."><b>Services</b></Link>
            <Link className="nav-link  active me-3 navbar-brand" to="..."><b>Contact Us</b></Link>
              <Link className="nav-link  active me-3 navbar-brand" to="/dashboard/prifle"><b>Dashboard</b></Link>
              <Link className="nav-link  active me-3 navbar-brand" to="/login"><b>Login</b></Link>
            
            </div>
          </div>
        </div>
      </nav>

        </div>
       
    );
};

export default Header;