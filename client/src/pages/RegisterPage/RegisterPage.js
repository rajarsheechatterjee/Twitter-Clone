import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";

import TwitterLogo from "../../components/TwitterLogo/TwitterLogo";

import "./RegisterPageStyles.css";

const RegisterPage = ({ setAlert, register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
        password2: "",
    });

    const { name, email, username, password, password2 } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            setAlert("Passwords do not match", "danger");
        } else {
            register({ name, username, email, password });
        }
    };

    if (isAuthenticated) {
        return <Redirect to="/home" />;
    }

    return (
        <>
            <div className="loginPageContainer">
                <div className="loginForm  register-form">
                    <TwitterLogo />
                    <p className="loginHeader">Create your account</p>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="form-group">
                            <label htmlFor="Name" className="emailLabel">
                                Name
                            </label>
                            <input
                                name="name"
                                type="text"
                                className="form-control emailInput"
                                value={name}
                                onChange={(e) => onChange(e)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Email" className="emailLabel">
                                Username
                            </label>
                            <input
                                name="username"
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Email" className="emailLabel">
                                Email Address
                            </label>
                            <input
                                name="email"
                                type="email"
                                className="form-control emailInput"
                                value={email}
                                onChange={(e) => onChange(e)}
                                required
                            />
                            <small className="email-msg form-text">
                                We'll never share your email with anyone else
                            </small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="emailLabel">
                                Password
                            </label>
                            <input
                                name="password"
                                type="password"
                                minLength="6"
                                className="form-control"
                                value={password}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label
                                htmlFor="confirm-password"
                                className="emailLabel"
                            >
                                Confirm Password
                            </label>
                            <input
                                name="password2"
                                type="password"
                                minLength="6"
                                className="form-control"
                                value={password2}
                                onChange={(e) => onChange(e)}
                            />
                            <button type="submit" className="loginButton">
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <p className="signupLink">
                        <Link to="/login">Log in to Twitter</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

RegisterPage.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(RegisterPage);
