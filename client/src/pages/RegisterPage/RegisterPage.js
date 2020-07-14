import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import Navbar from '../../components/Navbar/Navbar';


import './RegisterPageStyles.css';

const RegisterPage = ({ setAlert, register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
        password2: ''
    });

    const { name, email, username, password, password2 } = formData;    

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault();
        if(password !== password2){
            setAlert('Passwords do not match', 'danger');
        } else {
            register({ name, username, email, password });
        }
    };

    if(isAuthenticated) {
      return (<Redirect to="/home" />);
    }

    return (
        <Fragment>
          <Navbar />
            <div className='r-1x0uki6 r-1ye8kvj r-13qz1uu r-1j3t67a r-1jgb5lz'>
            <h1 className='r-6ity3w r-15d164r r-1blvdjr r-jwli3a r-vw2c0b'>Create your account</h1>
            <form onSubmit={e => onSubmit(e)} >
              <div className="form-group my-2">
              <label className=' r-wgabs5  r-1uaug3w r-18u37iz r-rull8r  r-1778zho r-1jkafct css-1dbjc4n' htmlFor="Name">
                  <span className='r-glunga r-utggzx r-k200y r-16dba41 r-111h2gw r-a023e6'>Name</span>
                </label>
                <input name='name' type="text" className="form-control" value={name} onChange={e => onChange(e)} />
              </div>
              <div className="form-group my-2">
              <label className=' r-wgabs5  r-1uaug3w r-18u37iz r-rull8r  r-1778zho r-1jkafct css-1dbjc4n' htmlFor="Username">
                  <span className='r-glunga r-utggzx r-k200y r-16dba41 r-111h2gw r-a023e6'>Username</span>
                </label>
                <input name='username' type="text" className="form-control" value={username} onChange={e => onChange(e)} />
              </div>
              <div className="form-group my-2">
              <label className=' r-wgabs5  r-1uaug3w r-18u37iz r-rull8r  r-1778zho r-1jkafct css-1dbjc4n' htmlFor="Email">
                  <span className='r-glunga r-utggzx r-k200y r-16dba41 r-111h2gw r-a023e6'>Email Address</span>
                </label>
                <input name='email' type="email" className="form-control" value={email} onChange={e => onChange(e)} />
                <small id="emailHelp" style={{color: '#8899a6'}} className="form-text">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group my-2">
              <label className=' r-wgabs5  r-1uaug3w r-18u37iz r-rull8r  r-1778zho r-1jkafct css-1dbjc4n' htmlFor="Password">
                  <span className='r-glunga r-utggzx r-k200y r-16dba41 r-111h2gw r-a023e6'>Password</span>
                </label>
                <input name='password' type="password" minLength='6' className="form-control" value={password} onChange={e => onChange(e)} />
              </div>
              <div className="form-group my-2">
              <label className=' r-wgabs5  r-1uaug3w r-18u37iz r-rull8r  r-1778zho r-1jkafct css-1dbjc4n' htmlFor="ConfPass">
                  <span className='r-glunga r-utggzx r-k200y r-16dba41 r-111h2gw r-a023e6'>Confirm Password</span>
                </label>                <input name='password2' type="password" minLength='6' className="form-control" value={password2} onChange={e => onChange(e)} />
              </div>
              <button type="submit" style={{ width: '100%', cursor:'pointer' }}  className="mx-0 my-4 r-17bavie r-1jayybb r-urgr8i  r-1ny4l3l r-6416eg  r-1w2pmg  r-o7ynqc  r-lrvibr  r-15bsvpr r-vlx1xi  r-zg41ew  r-42olwf  r-rs99b7  r-1phboty r-sdzlij r-jwli3a  r-eljoum  r-vw2c0b  r-a023e6  r-1qd0xha r-qvutc0  r-bcqeeo  r-1awozwy r-1777fci r-16y2uox r-18u37iz r-q4m81j  r-dnmrzs  r-6koalj ">Submit</button>
            </form>
            <p className="my-1 text-light" style={{ textAlign: 'center' }} >
                Already have an account? <Link to='/login'>Login</Link>
            </p>
          </div>
        </Fragment>
    )
}

RegisterPage.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(RegisterPage);
