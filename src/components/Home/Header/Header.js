import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container">
             <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
             
              <a className="nav-link  active me-3" href="#">Home</a>
              <Link className="nav-link  active  me-3" to="/addService">addService</Link>
              <Link className="nav-link  active  me-3" to="/sideBar">Dashboard</Link>
              <a className="nav-link  active  me-3" href="#">Login</a>
              <a className="nav-link  active  me-3" href="#">Login</a>
           
            </div>
          </div>
        </div>
      </nav>

        </div>
       
    );
};

export default Header;