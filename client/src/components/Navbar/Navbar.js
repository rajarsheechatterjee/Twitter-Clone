import React, { Fragment } from 'react';
import './NavbarStyles.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
              <div className="collapse navbar-collapse" id="navbarText">
                <span className="navbar-text">
                    <Link to='/home'>Home</Link>
                </span>
                <span className="navbar-text">
                    <Link to='/profiles'>Profiles</Link>
                </span>
                <span className="navbar-text">
                    <Link onClick={logout} to=''>Logout</Link>
                </span>
                <span className="navbar-text">
                    <Link to='/profile'>Profile</Link>
                </span>
              </div>          
  );

  const guestLinks = (
              <div className="collapse navbar-collapse" id="navbarText">
                <span className="navbar-text">
                  <span className="navbar-text">
                      <Link to='/profiles'>Profiles</Link>
                  </span>
                    <Link to="/login">Login </Link>
                    <Link to="/register">Sign up</Link>
                </span>
              </div>
              
  );

    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <Link className="navbar-brand" to="#">Twitter</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>) }
            </nav>
    )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar);
