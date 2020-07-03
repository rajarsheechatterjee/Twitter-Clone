import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';


const LoginPage = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;    

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault();
        login(email, password);
    };

    if(isAuthenticated) {
      return (<Redirect to="/home" />);
    }

    return (
        <Fragment>
            <h1>Login</h1>
            <form onSubmit={e => onSubmit(e)} >
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input name='email' type="email" className="form-control" value={email} onChange={e => onChange(e)} required />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input name='password' type="password" minLength='6' className="form-control" value={password} onChange={e => onChange(e)} required />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <p className="my-1">
                Dont have an account? <Link to='/register'>Sign up</Link>
            </p>
        </Fragment>
    )
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(LoginPage);
