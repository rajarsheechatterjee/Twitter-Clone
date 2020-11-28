import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Moment from "react-moment";

import { deleteReply } from "../../actions/tweet";

const ReplyItem = ({
    auth,
    tweetId,
    tweet,
    deleteReply,
    reply: { _id, text, name, username, avatar, user, date },
}) => {
    return (
        <div
            className="tweet-container"
            style={{ paddingTop: "15px", paddingBottom: "15px" }}
        >
            <div className="tweet-avatar-cont">
                <img className="tweet-avatar" src={avatar} alt="tweet-avatar" />
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
                        <div className="tweet-username">{"@" + username}</div>
                        <span className="time-divider">·</span>
                        <div className="tweet-time">
                            <Moment fromNow>{date}</Moment>
                        </div>
                    </div>
                    {!tweet.loading && (
                        <div
                            className="tweet-username"
                            style={{ marginLeft: "0px" }}
                        >
                            <span>Replying to </span>
                            <Link
                                to={
                                    auth.user._id === user
                                        ? `/profile/me`
                                        : `/profile/${user}`
                                }
                                className="tweet-redirect"
                            >
                                <span>{"@" + tweet.username}</span>
                            </Link>
                        </div>
                    )}
                </Link>
                <div className="tweet-body" style={{ marginTop: "10px" }}>
                    {text}
                </div>
                <div className="btn-cont">
                    {!auth.loading && auth.user._id === user && (
                        <div
                            className="comment-btn like-btn delete-btn"
                            onClick={(e) => {
                                deleteReply(tweetId, _id);
                            }}
                        >
                            <svg viewBox="0 0 24 24" className="comment-svg">
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
    );
};

ReplyItem.propTypes = {
    tweet: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    deleteReply: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { deleteReply })(ReplyItem);
