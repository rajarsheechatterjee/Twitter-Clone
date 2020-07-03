import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
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
            console.log('Password dont match');
        } else {
            console.log('Success');
        }
    };

    return (
        <Fragment>
            <h1>Create your account</h1>
            <form onSubmit={e => onSubmit(e)} >
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input name='name' type="text" className="form-control" value={name} onChange={e => onChange(e)} required />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Username</label>
                <input name='username' type="text" className="form-control" value={username} onChange={e => onChange(e)} required />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input name='email' type="email" className="form-control" value={email} onChange={e => onChange(e)} required />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input name='password' type="password" minLength='6' className="form-control" value={password} onChange={e => onChange(e)} required />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword2">Confirm Password</label>
                <input name='password2' type="password" minLength='6' className="form-control" value={password2} onChange={e => onChange(e)} required />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <p className="my-1">
                Already have an account? <Link to='/login'>Login</Link>
            </p>
        </Fragment>
    )
}

export default RegisterPage;
