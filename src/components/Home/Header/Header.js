import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container">
             <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          
        <p className="navbar-brand ms-3 " href="/"><img width="30px" src="https://i.ibb.co/tBsCGvz/1083127.png" alt=""/></p>
        <p className="navbar-brand"><b>Lenze</b></p>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="animation navbar-nav ms-auto">
            <Link className="nav-link  active me-3 navbar-brand " to="...">Home</Link>
            <Link className="nav-link  active me-3 navbar-brand" to="...">Services</Link>
            <Link className="nav-link  active me-3 navbar-brand" to="...">Contact Us</Link>
              <Link className="nav-link  active me-3 navbar-brand" to="/dashboard/Profile">Dashboard</Link>
              <Link className="nav-link  active me-3 navbar-brand" to="/login">Login</Link>
            </div>
          </div>
        </div>
      </nav>

        </div>
       
    );
};

export default Header;