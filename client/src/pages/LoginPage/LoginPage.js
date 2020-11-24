import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { login } from "../../actions/auth";

import Navbar from "../../components/Navbar/Navbar";

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
            <Navbar />
            <div className="loginPageContainer">
                <div className="loginForm">
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
            {/* <div className="r-1x0uki6 r-1ye8kvj r-13qz1uu r-1j3t67a r-1jgb5lz">
                <h1 className="r-6ity3w r-15d164r r-1blvdjr r-jwli3a r-vw2c0b">
                    Login in to Twitter
                </h1>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="form-group my-2">
                        <label
                            className=" r-wgabs5  r-1uaug3w r-18u37iz r-rull8r  r-1778zho r-1jkafct css-1dbjc4n"
                            htmlFor="exampleInputEmail1"
                        >
                            <span className="r-glunga r-utggzx r-k200y r-16dba41 r-111h2gw r-a023e6">
                                Email Address
                            </span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => onChange(e)}
                            required
                        />
                    </div>
                    <div className="form-group my-2">
                        <label
                            className=" r-wgabs5  r-1uaug3w r-18u37iz r-rull8r  r-1778zho r-1jkafct css-1dbjc4n"
                            htmlFor="exampleInputEmail1"
                        >
                            <span className="r-glunga r-utggzx r-k200y r-16dba41 r-111h2gw r-a023e6">
                                Password
                            </span>
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
                    <button
                        type="submit"
                        style={{ width: "100%", cursor: "pointer" }}
                        className="submitbutton mx-0 my-4 r-17bavie r-1jayybb r-urgr8i  r-1ny4l3l r-6416eg  r-1w2pmg  r-o7ynqc  r-lrvibr  r-15bsvpr r-vlx1xi  r-zg41ew  r-42olwf  r-rs99b7  r-1phboty r-sdzlij r-jwli3a  r-eljoum  r-vw2c0b  r-a023e6  r-1qd0xha r-qvutc0  r-bcqeeo  r-1awozwy r-1777fci r-16y2uox r-18u37iz r-q4m81j  r-dnmrzs  r-6koalj "
                    >
                        Submit
                    </button>
                </form>
                <p className="my-1 text-light" style={{ textAlign: "center" }}>
                    Dont have an account? <Link to="/register">Sign up</Link>
                </p>
            </div> */}
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
