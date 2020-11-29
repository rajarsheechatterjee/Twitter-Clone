import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Moment from "react-moment";

import { getTweet, addLike, deleteTweet } from "../../actions/tweet";

import Header from "../../components/Header/Header";
import ReplyForm from "./ReplyForm";
import ReplyItem from "./ReplyItem";
import Spinner from "../../components/Spinner/Spinner";
import Divider from "../../components/Divider/Divider";

const Tweet = ({
    auth,
    getTweet,
    tweet: { tweet, loading },
    match,
    addLike,
    deleteTweet,
    history,
}) => {
    useEffect(() => {
        getTweet(match.params.id);
    }, [getTweet, match.params.id]);

    return (
        <>
            <div className="row">
                <Header />
                <div className="col-md-6">
                    <div className="timeline-container">
                        <PageHeaderWithBack history={history} title="Tweet" />
                        {auth.loading || loading || tweet === null ? (
                            <Spinner />
                        ) : (
                            <div className="main-tweet-cont">
                                <div className="tweet-user-cont">
                                    <img
                                        className="tweet-page-avatar"
                                        src={tweet.avatar}
                                        alt="tweet-page-avatar"
                                    />
                                    <Link
                                        to={
                                            auth.user._id === tweet.user
                                                ? `/profile/me`
                                                : `/profile/${tweet.user}`
                                        }
                                        className="tweet-redirect"
                                    >
                                        <div className="name-user-cont">
                                            <span className="name">
                                                {tweet.name}
                                            </span>
                                            <span className="username">
                                                {"@" + tweet.username}
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="main-tweet-body">
                                    <span className="text">{tweet.text}</span>
                                </div>
                                <div className="date-time-cont">
                                    <Moment format="HH:mm A · MMMM DD, YYYY">
                                        {tweet.date}
                                    </Moment>
                                </div>
                                <div className="like-cmmnt-cont">
                                    <div className="comment-btn">
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="comment-svg"
                                        >
                                            <g>
                                                <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                                            </g>
                                        </svg>
                                        <span className="btn-label">
                                            {tweet.replies.length > 0 &&
                                                tweet.replies.length}
                                        </span>
                                    </div>
                                    <div className="comment-btn like-btn">
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="comment-svg"
                                            onClick={(e) => {
                                                addLike(tweet._id);
                                            }}
                                        >
                                            <g>
                                                <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                                            </g>
                                        </svg>
                                        <span className="btn-label">
                                            {tweet.likes.length > 0 &&
                                                tweet.likes.length}
                                        </span>
                                    </div>
                                    <div className="like-btn delete-btn">
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="comment-svg"
                                            onClick={(e) => {
                                                deleteTweet(tweet._id);
                                                history.goBack();
                                            }}
                                        >
                                            <g>
                                                <path d="M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z"></path>
                                                <path d="M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        )}
                        <Divider />
                        {tweet !== null && (
                            <>
                                <ReplyForm tweetId={tweet._id} />
                                <Divider />
                            </>
                        )}
                        {tweet !== null &&
                            tweet.replies.length > 0 &&
                            tweet.replies.map((reply) => (
                                <ReplyItem
                                    key={reply._id}
                                    reply={reply}
                                    tweetId={tweet._id}
                                    tweet={tweet}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

Tweet.propTypes = {
    getTweet: PropTypes.func.isRequired,
    tweet: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    deleteTweet: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    tweet: state.tweet,
    auth: state.auth,
});

export default connect(mapStateToProps, { getTweet, addLike, deleteTweet })(
    Tweet
);

const PageHeaderWithBack = ({ title, history }) => (
    <div className="page-header">
        <Link
            to="#"
            onClick={() => history.goBack()}
            className="back-btn-container"
        >
            <svg viewBox="0 0 24 24" class="back-btn">
                <g>
                    <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
                </g>
            </svg>
        </Link>
        <div className="page-header-text">{title}</div>
    </div>
);
