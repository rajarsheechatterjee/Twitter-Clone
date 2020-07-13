import React, { Fragment } from 'react';
import './NavbarStyles.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
				<Fragment>
					<ul className="navbar-nav mr-auto">
				        <li className="nav-item active">
					    	<Link className='nav-link' to="/home">Home</Link>
				        </li>
				        
				        <li className="nav-item">
					    	<Link className='nav-link' to="/profile">My Profile</Link>
				        </li>
				    </ul>
					
					<div className='css-1dbjc4n r-1awozwy r-1pz39u2 r-18u37iz r-16y2uox' >
						<div className="css-1dbjc4n r-16y2uox" >
							<Link onClick={logout} to='/login' className='deco nav-link r-aj3cln r-1vsu8ta r-1ny4l3l r-6416eg  r-1niwhzg r-1w2pmg  r-1loqt21 r-o7ynqc  r-lrvibr  r-1fneopy r-p1n3y5  r-rs99b7  r-1phboty r-sdzlij ' >
								<div className='r-eljoum hght r-vw2c0b r-a023e6 r-1qd0xha r-qvutc0 r-bcqeeo  r-1awozwy r-1777fci r-16y2uox r-18u37iz r-q4m81j  r-13gxpu9 r-dnmrzs  r-6koalj ' >
									<span className='r-1qd0xha r-qvutc0  r-bcqeeo  r-ad9z0x ' >
									<span className='deco mx-0 my-0 p-0  r-qvutc0 r-bcqeeo r-ad9z0x css-16my406 css-901oao ' >Logout</span>

									</span>

								</div>
							</Link>
						</div>
					</div>
				</Fragment>  
  );

  const guestLinks = (
				<Fragment>
					<div className='css-1dbjc4n r-1awozwy r-1pz39u2 r-18u37iz r-16y2uox' >
						<div className="css-1dbjc4n r-16y2uox" >
							<Link to='/login' className='deco nav-link r-aj3cln r-1vsu8ta r-1ny4l3l r-6416eg  r-1niwhzg r-1w2pmg  r-1loqt21 r-o7ynqc  r-lrvibr  r-1fneopy r-p1n3y5  r-rs99b7  r-1phboty r-sdzlij ' >
								<div className='r-eljoum hght r-vw2c0b r-a023e6 r-1qd0xha r-qvutc0 r-bcqeeo  r-1awozwy r-1777fci r-16y2uox r-18u37iz r-q4m81j  r-13gxpu9 r-dnmrzs  r-6koalj ' >
									<span className='r-1qd0xha r-qvutc0  r-bcqeeo  r-ad9z0x ' >
									<span className='deco mx-0 my-0 p-0  r-qvutc0 r-bcqeeo r-ad9z0x css-16my406 css-901oao ' >Login</span>

									</span>

								</div>
							</Link>
						</div>
						<div className=" r-16y2uox mgnlft" style={{ color: 'white' }} >
							<Link to='/register' className='deco nav-link r-urgr8i  r-aj3cln  r-1vsu8ta r-1ny4l3l r-6416eg  r-1w2pmg  r-1loqt21 r-o7ynqc  r-lrvibr  r-1fneopy r-42olwf  r-rs99b7  r-1phboty r-sdzlij ' >
								<div className='r-eljoum hght r-vw2c0b r-a023e6 r-1qd0xha r-qvutc0 r-bcqeeo  r-1awozwy r-1777fci r-16y2uox r-18u37iz r-q4m81j r-dnmrzs  r-6koalj ' >
									<span className='r-1qd0xha r-qvutc0  r-bcqeeo  r-ad9z0x ' >
									<span className='deco mx-0 my-0 p-0  r-qvutc0 r-bcqeeo r-ad9z0x css-16my406 css-901oao ' >Sign Up</span>

									</span>

								</div>
							</Link>
						</div>
					</div>

				</Fragment>  

  );

    return (
		<Fragment>
			<header type='banner' className='css-1dbjc4n r-1g40b8q  r-qklmqi r-rull8r r-1ila09b' >
				<div className='css-1dbjc4n r-1jgb5lz r-sb58tz r-13qz1uu'>
					<div className='css-1dbjc4n r-yfoy6g r-18u37iz r-1h3ijdo r-1wtj0ep r-utggzx r-rjfia r-136ojw6' >
						<nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'rgb(21, 32, 43)' }} >
							<div className='css-1dbjc4n r-18u37iz r-16y2uox r-1h3ijdo r-1ye8kvj r-utggzx r-184en5c' >
								<a className="hght2 navbar-brand  mt-1" href="#">
									<span className='hght2 my-auto wght'>
										{/* <span className="logo">
											<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72"><path d="M67.812 16.141a26.246 26.246 0 0 1-7.519 2.06 13.134 13.134 0 0 0 5.756-7.244 26.127 26.127 0 0 1-8.313 3.176A13.075 13.075 0 0 0 48.182 10c-7.229 0-13.092 5.861-13.092 13.093 0 1.026.118 2.021.338 2.981-10.885-.548-20.528-5.757-26.987-13.679a13.048 13.048 0 0 0-1.771 6.581c0 4.542 2.312 8.551 5.824 10.898a13.048 13.048 0 0 1-5.93-1.638c-.002.055-.002.11-.002.162 0 6.345 4.513 11.638 10.504 12.84a13.177 13.177 0 0 1-3.449.457c-.846 0-1.667-.078-2.465-.231 1.667 5.2 6.499 8.986 12.23 9.09a26.276 26.276 0 0 1-16.26 5.606A26.21 26.21 0 0 1 4 55.976a37.036 37.036 0 0 0 20.067 5.882c24.083 0 37.251-19.949 37.251-37.249 0-.566-.014-1.134-.039-1.694a26.597 26.597 0 0 0 6.533-6.774z"></path></svg>
  			  							</span> */}
										Twitter
									</span>
			  					</a>
			  					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
			  					    <span className="navbar-toggler-icon"></span>
			  					</button>
							</div>
							<div className="css-1dbjc4n r-18u37iz r-16y2uox r-1h3ijdo r-58zi21" >
								<div className="collapse navbar-collapse" id="navbarText">
									{ !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>) }
								</div>
							</div>
						</nav>
					</div>
				</div>				
			</header>			
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
