import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getProfileById, followProfile } from "../../actions/profile";
import { getUserTweets } from "../../actions/tweet";

import Header from "../../components/Header/Header";
import Spinner from "../../components/Spinner/Spinner";
import TweetItem from "../HomePage/TweetItem";
import Divider from "../../components/Divider/Divider";

import "./ProfileStyles.css";

const Profile = ({
    getProfileById,
    followProfile,
    profile: { profile },
    getUserTweets,
    auth,
    tweet: { tweets },
    match,
    history,
}) => {
    const [follow, setFollow] = useState(false);

    useEffect(() => {
        getProfileById(match.params.id);
        getUserTweets(match.params.id);
    }, [getProfileById, getUserTweets, match.params.id, profile]);

    return (
        <>
            <div className="row">
                <Header />
                <div className="col-md-6">
                    <div className="timeline-container">
                        <PageHeaderWithBack title="Profile" history={history} />
                        {profile === null ? (
                            <Spinner />
                        ) : (
                            <div className="profile-container">
                                <img
                                    alt="avatar"
                                    draggable="true"
                                    src={profile.user.avatar}
                                    className="profile-avatar"
                                />
                                <span className="follow-btn-container">
                                    <span className="names-container">
                                        <span className="profile-name">
                                            {profile.user.name}
                                        </span>
                                        <span className="profile-username">
                                            {"@" + profile.user.username}
                                        </span>
                                    </span>
                                    <button
                                        className="follow-btn"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            followProfile(profile.user._id);
                                            setFollow(!follow);
                                        }}
                                    >
                                        {follow ? "Following" : "Follow"}
                                    </button>
                                </span>
                                <span className="profile-bio">
                                    {profile.bio}
                                </span>
                                <span className="stats-cont">
                                    <span className="followers-count">
                                        <span className="stats">
                                            {profile.followers.length + " "}
                                        </span>
                                        <span className="stat-label">
                                            Followers
                                        </span>
                                    </span>
                                    <span className="following-count">
                                        <span className="stats">
                                            {profile.following.length + " "}
                                        </span>{" "}
                                        <span className="stat-label">
                                            Following
                                        </span>
                                    </span>
                                </span>
                            </div>
                        )}
                        <Divider />
                        {tweets === null ? (
                            <Spinner />
                        ) : (
                            tweets.map((tweet) => (
                                <TweetItem key={tweet._id} tweet={tweet} />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    followProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    tweet: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    profile: state.profile,
    auth: state.auth,
    tweet: state.tweet,
});

export default connect(mapStateToProps, {
    getProfileById,
    getUserTweets,
    followProfile,
})(Profile);

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
