import React, { useEffect, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TweetItem from "../HomePage/TweetItem";
import Spinner from "../../components/Spinner/Spinner";
import { getProfileById, followProfile } from "../../actions/profile";
import "./ProfileStyles.css";
import Moment from "react-moment";
import { getUserTweets } from "../../actions/tweet";
import Header from "../../components/Header/Header";

const Profile = ({
    getProfileById,
    followProfile,
    profile: { profile, loading },
    getUserTweets,
    auth,
    tweet: { tweets },
    match,
}) => {
    const [follow, setFollow] = useState(false);

    useEffect(() => {
        getProfileById(match.params.id);
        getUserTweets(match.params.id);
    }, [getProfileById, getUserTweets, match.params.id, follow]);

    return (
        <Fragment>
            <Fragment>
                <div className="container">
                    <div className="row">
                        <Header />
                        <div className="r-1ye8kvj css-1dbjc4n r-yfoy6g r-18bvks7 r-1ljd8xs r-13l2t4g r-1phboty r-1jgb5lz r-11wrixw r-61z16t r-1ye8kvj r-13qz1uu r-184en5c mx-0">
                            <div className="css-1dbjc4n r-aqfbo4 r-yfoy6g r-1ila09b r-rull8r r-qklmqi r-gtdqiz r-ipm5af r-1g40b8q r-1h3ijdo r-1j3t67a r-qklmqi r-rull8r r-1ila09b">
                                <div className="css-1dbjc4n r-1loqt21 r-136ojw6">
                                    <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1h3ijdo r-1777fci r-1jgb5lz r-sb58tz r-13qz1uu">
                                        <div className="css-1dbjc4n r-16y2uox r-1wbh5a2 r-1pi2tsx r-1777fci">
                                            <div className="r-1habvwh">
                                                <h2
                                                    style={{
                                                        alignItems:
                                                            "flex-start",
                                                        fontWeight: "800",
                                                        fontSize: "19px",
                                                        color:
                                                            "rgb(255, 255, 255)",
                                                        justifyContent:
                                                            "center",
                                                        verticalAlign: "middle",
                                                    }}
                                                >
                                                    <Link to="/home">
                                                        <svg
                                                            viewBox="0 0 24 24"
                                                            class="backarrow mr-4 r-13gxpu9 r-4qtqp9 r-yyyyoo r-1q142lx r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
                                                        >
                                                            <g>
                                                                <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
                                                            </g>
                                                        </svg>
                                                    </Link>
                                                    Profile
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {profile === null ? (
                                <Spinner />
                            ) : (
                                <div
                                    className="text-light"
                                    style={{
                                        paddingLeft: "15px",
                                        paddingRight: "15px",
                                        paddingTop: "5px",
                                    }}
                                >
                                    <img
                                        alt=""
                                        draggable="true"
                                        src={profile.user.avatar}
                                        style={{
                                            height: "100px",
                                            width: "100px",
                                            borderRadius: "50%",
                                            marginBottom: "7px",
                                            marginTop: "5px",
                                        }}
                                    ></img>
                                    <p style={{ marginBottom: "10px" }}>
                                        <div className="mb-0">
                                            <span
                                                style={{
                                                    lineHeight: "1",
                                                    fontWeight: "800",
                                                    fontSize: "19px",
                                                }}
                                            >
                                                {profile.user &&
                                                    profile.user.name}
                                            </span>
                                            {!auth.loading &&
                                                auth.user._id !==
                                                    profile.user._id && (
                                                    <button
                                                        className={`ml-2 followbutton`}
                                                        onClick={(e) => {
                                                            followProfile(
                                                                profile.user._id
                                                            );
                                                            setFollow(!follow);
                                                        }}
                                                    >
                                                        {follow
                                                            ? "Following"
                                                            : "Follow"}
                                                    </button>
                                                )}
                                        </div>
                                        <div style={{ marginBottom: "10px" }}>
                                            <span
                                                style={{
                                                    fontSize: "0.95rem",
                                                    color: "#8899a6",
                                                }}
                                            >
                                                @{profile.user.username}
                                            </span>
                                        </div>
                                        <span>{profile.bio}</span>
                                    </p>
                                    <p style={{ fontWeight: "bold" }}>
                                        <span>{profile.followers.length}</span>
                                        <span
                                            style={{
                                                fontSize: "0.9rem",
                                                color: "#8899a6",
                                            }}
                                        >
                                            {" "}
                                            Followers{" "}
                                        </span>
                                        <span className="ml-2">
                                            {profile.following.length}
                                        </span>
                                        <span
                                            style={{
                                                fontSize: "0.9rem",
                                                color: "#8899a6",
                                            }}
                                        >
                                            {" "}
                                            Following
                                        </span>
                                    </p>
                                </div>
                            )}
                            <div
                                style={{
                                    height: "10px",
                                    backgroundColor: "rgb(37, 51, 65)",
                                }}
                            ></div>
                            {tweets.map((tweet) => (
                                <TweetItem key={tweet._id} tweet={tweet} />
                            ))}
                        </div>
                    </div>
                </div>
            </Fragment>
        </Fragment>
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
