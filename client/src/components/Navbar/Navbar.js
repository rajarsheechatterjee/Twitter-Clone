import React from 'react';
import './NavbarStyles.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-ligdarkht bg-dark">
              <Link className="navbar-brand" to="#">Twitter</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="#">New Tweet <span className="sr-only">(current)</span></Link>
                  </li>
                </ul>
                <span className="navbar-text">
                    <Link to="/login">Login </Link>
                    <Link to="/register">Sign up</Link>
                </span>
              </div>
            </nav>
        </div>
    )
}

export default Navbar;
