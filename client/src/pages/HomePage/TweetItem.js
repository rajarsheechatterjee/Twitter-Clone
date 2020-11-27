import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Moment from "react-moment";

import { addLike, deleteTweet } from "../../actions/tweet";

import Spinner from "../../components/Spinner/Spinner";

import "./TweetItemStyles.css";

const TweetItem = ({
    auth,
    addLike,
    deleteTweet,
    tweet: { _id, text, name, username, avatar, user, likes, replies, date },
}) => {
    return auth.loading ? (
        <Spinner />
    ) : (
        <>
            <div className="tweet-container">
                <div className="tweet-avatar-cont">
                    <img
                        className="tweet-avatar"
                        src={avatar}
                        alt="tweet-avatar"
                    />
                </div>
                <div className="tweet-content">
                    <Link
                        to={
                            auth.user._id === user
                                ? `/profile/me`
                                : `/profile/${user}`
                        }
                        className="tweet-redirect"
                    >
                        <div className="tweet-text">
                            <div className="tweet-name">{name}</div>
                            <div className="tweet-username">
                                {"@" + username}
                            </div>
                            <span className="time-divider">·</span>
                            <div className="tweet-time">
                                <Moment fromNow>{date}</Moment>
                            </div>
                        </div>
                    </Link>
                    <Link to={`/tweets/${_id}`} className="tweet-redirect">
                        <div className="tweet-body">{text}</div>
                    </Link>

                    <div className="btn-cont">
                        <Link to={`/tweets/${_id}`} className="comment-btn">
                            <svg viewBox="0 0 24 24" className="comment-svg">
                                <g>
                                    <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                                </g>
                            </svg>
                            <span className="btn-label">
                                {replies.length > 0 && replies.length}
                            </span>
                        </Link>
                        <div
                            className="comment-btn like-btn"
                            onClick={(e) => {
                                addLike(_id);
                            }}
                        >
                            <svg viewBox="0 0 24 24" className="comment-svg">
                                <g>
                                    <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                                </g>
                            </svg>
                            <span className="btn-label">
                                {likes.length > 0 && likes.length}
                            </span>
                        </div>
                        {!auth.loading && auth.user._id === user && (
                            <div
                                className="comment-btn like-btn delete-btn"
                                onClick={(e) => {
                                    deleteTweet(_id);
                                }}
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="comment-svg"
                                >
                                    <g>
                                        <path d="M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z"></path>
                                        <path d="M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z"></path>
                                    </g>
                                </svg>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

TweetItem.propTypes = {
    tweet: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    deleteTweet: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { addLike, deleteTweet })(TweetItem);
