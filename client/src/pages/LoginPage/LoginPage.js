import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { login } from "../../actions/auth";

import TwitterLogo from "../../components/TwitterLogo/TwitterLogo";

import "./LoginPageStyles.css";

const LoginPage = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        login(email, password);
    };

    if (isAuthenticated) {
        return <Redirect to="/home" />;
    }

    return (
        <>
            <div className="loginPageContainer">
                <div className="loginForm">
                    <TwitterLogo />
                    <p className="loginHeader">Login to Twitter</p>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div class="form-group">
                            <label htmlFor="Email" className="emailLabel">
                                Email
                            </label>
                            <input
                                name="email"
                                type="email"
                                className="form-control emailInput"
                                value={email}
                                onChange={(e) => onChange(e)}
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label htmlFor="Email" className="emailLabel">
                                Password
                            </label>
                            <input
                                name="password"
                                type="password"
                                minLength="6"
                                className="form-control"
                                value={password}
                                onChange={(e) => onChange(e)}
                                required
                            />
                        </div>
                        <button type="submit" className="loginButton">
                            Submit
                        </button>
                    </form>
                    <p className="signupLink">
                        <Link to="/register">Sign up for Twitter</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

LoginPage.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LoginPage);
