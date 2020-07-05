import React, { Fragment } from 'react';
import './NavbarStyles.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
				<Fragment>
					<Link style={{ textDecoration: 'none' }} to="/home" className="logo-title right-title color--neutral-white mr-2 search-icon js-nav-search">Home</Link>
					<Link style={{ textDecoration: 'none' }} to="/profiles" className="logo-title right-title color--neutral-white mr-2 search-icon js-nav-search">All Profiles</Link>
					<Link style={{ textDecoration: 'none' }} to="/profile" className="logo-title right-title color--neutral-white mr-2 search-icon js-nav-search">My Profile</Link>
					<Link style={{ textDecoration: 'none' }} onClick={logout} to='' className="logo-title right-title color--neutral-white mr-2 search-icon js-nav-search">Logout</Link>
				</Fragment>  
  );

  const guestLinks = (
				<Fragment>
					<Link style={{ textDecoration: 'none' }} to="/profiles" className="logo-title right-title color--neutral-white mr-2 search-icon js-nav-search">All Profiles</Link>
					<Link to="/login" class="mr-2 twtr-scribe-clicks">
  					      <button type="button">Login</button>
  					</Link>
					<Link to="/register" class="twtr-scribe-clicks">
  					      <button type="button">Sign in</button>
  					</Link>
				</Fragment>  

  );

    return (
		<Fragment>
			<div className='nav theme-bg-color--dark sticky'>
			<div className='nav--wrapper'>
				<header className="nav__header">
					<div className="nav__headeritem-left">
						<div className="nav__headeritem-title">
						<Link style={{ textDecoration: 'none' }} to="/home" className="logo-title color--neutral-white">
							<span className="logo">
							  <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72"><path d="M67.812 16.141a26.246 26.246 0 0 1-7.519 2.06 13.134 13.134 0 0 0 5.756-7.244 26.127 26.127 0 0 1-8.313 3.176A13.075 13.075 0 0 0 48.182 10c-7.229 0-13.092 5.861-13.092 13.093 0 1.026.118 2.021.338 2.981-10.885-.548-20.528-5.757-26.987-13.679a13.048 13.048 0 0 0-1.771 6.581c0 4.542 2.312 8.551 5.824 10.898a13.048 13.048 0 0 1-5.93-1.638c-.002.055-.002.11-.002.162 0 6.345 4.513 11.638 10.504 12.84a13.177 13.177 0 0 1-3.449.457c-.846 0-1.667-.078-2.465-.231 1.667 5.2 6.499 8.986 12.23 9.09a26.276 26.276 0 0 1-16.26 5.606A26.21 26.21 0 0 1 4 55.976a37.036 37.036 0 0 0 20.067 5.882c24.083 0 37.251-19.949 37.251-37.249 0-.566-.014-1.134-.039-1.694a26.597 26.597 0 0 0 6.533-6.774z"></path></svg>
		
							</span>
							<span className="title color--neutral-white">Twitter</span>
						 </Link>
						</div>
					</div>
					<div className="nav__headeritem-right">
						<div className="login-container">
							<div className="search">
        	      				{ !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>) }
						  </div>

						</div>
					</div>
				</header>
			</div>
			</div>
		</Fragment>       
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
