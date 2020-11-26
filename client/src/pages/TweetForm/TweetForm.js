import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addPost } from "../../actions/tweet";

import Spinner from "../../components/Spinner/Spinner";

import "./TweetFormStyles.css";

const TweetForm = ({ addPost, auth }) => {
    const [text, setText] = useState("");

    return auth.loading ? (
        <Spinner />
    ) : (
        <>
            <div className="add-tweet-form">
                <div className="avatar-container">
                    <img
                        className="avatar"
                        src={auth.user.avatar}
                        alt="avatar"
                    />
                </div>
                <div className="form-container">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            addPost({ text });
                            setText("");
                        }}
                    >
                        <div className="input-container">
                            <textarea
                                name="text"
                                rows="2"
                                placeholder="What's Happening?"
                                required
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="divider" />
                        <div className="submit-btn">
                            <input
                                type="submit"
                                className={`tweet-btn ${
                                    text === "" && "disabled"
                                }`}
                                value="Tweet"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

TweetForm.propTypes = {
    addPost: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { addPost })(TweetForm);
