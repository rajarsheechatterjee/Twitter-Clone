import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Moment from "react-moment";

import { getCurrentUserTweets } from "../../actions/tweet";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";

import Spinner from "../../components/Spinner/Spinner";
import TweetItem from "../HomePage/TweetItem";
import Header from "../../components/Header/Header";
import PageHeaderWithBack from "../../components/PageHeaderWithBack/PageHeaderWithBack";
import Divider from "../../components/Divider/Divider";

const UserProfile = ({
    getCurrentProfile,
    deleteAccount,
    profile: { profile, loading },
    getCurrentUserTweets,
    tweet: { tweets },
    history,
}) => {
    useEffect(() => {
        getCurrentProfile();
        getCurrentUserTweets();
    }, [getCurrentProfile, getCurrentUserTweets]);

    return (
        <div className="row">
            <Header />
            <div className="col-md-6">
                <div className="timeline-container">
                    <PageHeaderWithBack
                        title="Your Profile"
                        history={history}
                    />
                    {profile === null ? (
                        loading && <Spinner />
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
                                <div>
                                    <Link to="/editprofile">
                                        <button
                                            className="follow-btn"
                                            onClick={(e) => {}}
                                        >
                                            Edit Profile
                                        </button>
                                    </Link>
                                    <button
                                        className="delete-prof-btn"
                                        onClick={(e) => deleteAccount()}
                                    >
                                        Delete Profile
                                    </button>
                                </div>
                            </span>
                            <span className="profile-bio">{profile.bio}</span>
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
                    {!loading && profile === null && (
                        <div className="no-bookmarks">
                            <div className="bookmark-header">
                                You don't have a profile yet yet
                            </div>
                            <div className="bookmarks-subtext">
                                Create your profile
                            </div>
                            <div style={{ marginTop: "20px" }}>
                                <Link
                                    to="/createprofile"
                                    className="follow-btn create-profile"
                                >
                                    Create Profile
                                </Link>
                            </div>
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
    );
};

UserProfile.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    tweet: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    profile: state.profile,
    tweet: state.tweet,
});

export default connect(mapStateToProps, {
    getCurrentProfile,
    deleteAccount,
    getCurrentUserTweets,
})(UserProfile);
