import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;    

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault();
        console.log('Success');
    };

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

export default LoginPage;
