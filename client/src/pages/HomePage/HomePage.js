import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
import TweetItem from "./TweetItem";
import TweetForm from "../TweetForm/TweetForm";
import { getTweets } from "../../actions/tweet";
import { getFollowSuggestions } from "../../actions/profile";
import "./HomePageStyles.css";
import Header from "../../components/Header/Header";
import ProfileCard from "./ProfileCard";

const HomePage = ({
    auth: { user },
    getTweets,
    getFollowSuggestions,
    profile: { profiles },
    tweet: { tweets, loading },
}) => {
    useEffect(() => {
        getTweets();
        getFollowSuggestions();
    }, [getTweets, getFollowSuggestions]);

    return loading ? (
        <Spinner />
    ) : (
        <Fragment>
            <div style={{ maxWidth: "1340px" }} className="container">
                <div className="row">
                    <header
                        role="banner"
                        className="css-1dbjc4n r-obd0qt r-16y2uox r-1g40b8q"
                    >
                        <Header />
                    </header>
                    <div className="col-md-6">
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
                                                    Home
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <TweetForm />
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
                    <div className="col-md-3">
                        <div className="mt-2 css-1dbjc4n r-1uaug3w r-1uhd6vh r-1ylenci r-1phboty r-rs99b7 r-ku1wi2 r-1bro5k0 r-1udh08x">
                            <aside className="css-1dbjc4n">
                                <div className="css-1dbjc4n r-1ila09b r-rull8r r-qklmqi r-1wtj0ep r-1j3t67a r-1w50u8q">
                                    <h2 class="css-4rbku5 css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep">
                                        <div
                                            dir="auto"
                                            class="css-901oao css-cens5h r-jwli3a r-1qd0xha r-1b6yd1w r-1vr29t4 r-ad9z0x r-bcqeeo r-qvutc0"
                                            style={{ WebkitLineClamp: "3" }}
                                        >
                                            <span class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">
                                                Who to follow
                                            </span>
                                        </div>
                                    </h2>
                                </div>
                                <div className="css-1dbjc4n">
                                    {/* Profile Card */}
                                    {profiles &&
                                        profiles.map((prof) => (
                                            <ProfileCard
                                                key={prof._id}
                                                prof={prof}
                                            />
                                        ))}
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

HomePage.propTypes = {
    getTweets: PropTypes.func.isRequired,
    tweet: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    getFollowSuggestions: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    tweet: state.tweet,
    profile: state.profile,
});

export default connect(mapStateToProps, { getTweets, getFollowSuggestions })(
    HomePage
);
