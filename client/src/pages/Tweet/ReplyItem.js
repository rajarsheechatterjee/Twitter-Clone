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
                <Link to={`/tweets/${_id}`} className="tweet-redirect">
                    <div className="tweet-body" style={{ marginTop: "10px" }}>
                        {text}
                    </div>
                </Link>
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
