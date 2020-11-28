import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getProfiles } from "../../actions/profile";

import ProfileItem from "./ProfileItem";
import Spinner from "../../components/Spinner/Spinner";
import Header from "../../components/Header/Header";

const Profiles = ({ getProfiles, profile: { profiles, loading }, history }) => {
    useEffect(() => {
        getProfiles();
    }, [getProfiles]);

    return loading ? (
        <Spinner />
    ) : (
        <Fragment>
            <div className="row">
                <Header />
                <div className="col-md-6">
                    <div
                        className="timeline-container"
                        style={{
                            borderBottomWidth: "1px",
                            borderBottomStyle: "solid",
                            borderBottomColor: "rgb(56, 68, 77)",
                        }}
                    >
                        {!loading ? (
                            <PageHeaderWithBack
                                title="Profiles"
                                history={history}
                            />
                        ) : (
                            <PageHeaderWithBack
                                title="No Profile Found"
                                history={history}
                            />
                        )}
                        {profiles.length > 0 ? (
                            profiles.map((profile) =>
                                profile === null ? (
                                    <Spinner />
                                ) : (
                                    <div
                                        className="profile-container"
                                        style={{
                                            borderBottomWidth: "1px",
                                            borderBottomStyle: "solid",
                                            borderBottomColor:
                                                "rgb(56, 68, 77)",
                                            marginBottom: "0px",
                                        }}
                                    >
                                        <img
                                            alt="avatar"
                                            draggable="true"
                                            src={profile.user.avatar}
                                            className="profile-avatar"
                                        />
                                        <span className="follow-btn-container">
                                            <Link
                                                to={`/profile/${profile.user._id}`}
                                                className="tweet-redirect"
                                                style={{ color: "white" }}
                                            >
                                                <span className="names-container">
                                                    <span className="profile-name">
                                                        {profile.user.name}
                                                    </span>
                                                    <span className="profile-username">
                                                        {"@" +
                                                            profile.user
                                                                .username}
                                                    </span>
                                                </span>
                                            </Link>
                                        </span>
                                        <span className="profile-bio">
                                            {profile.bio}
                                        </span>
                                        <span className="stats-cont">
                                            <span className="followers-count">
                                                <span className="stats">
                                                    {profile.followers.length +
                                                        " "}
                                                </span>
                                                <span className="stat-label">
                                                    Followers
                                                </span>
                                            </span>
                                            <span className="following-count">
                                                <span className="stats">
                                                    {profile.following.length +
                                                        " "}
                                                </span>
                                                <span className="stat-label">
                                                    Following
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                )
                            )
                        ) : (
                            <Spinner />
                        )}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);

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
