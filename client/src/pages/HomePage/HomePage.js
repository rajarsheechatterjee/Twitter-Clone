import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import TweetItem from "./TweetItem";
import TweetForm from "../TweetForm/TweetForm";

import Header from "../../components/Header/Header";
import PageHeader from "../../components/PageHeader/PageHeader";
import Spinner from "../../components/Spinner/Spinner";

import { getTweets } from "../../actions/tweet";
import { getFollowSuggestions } from "../../actions/profile";

import "./HomePageStyles.css";
import Divider from "../../components/Divider/Divider";

const HomePage = ({
    auth,
    getTweets,
    getFollowSuggestions,
    // profile: { profiles },
    tweet: { tweets, loading },
}) => {
    useEffect(() => {
        getTweets();
        // getFollowSuggestions();
    }, [getTweets, getFollowSuggestions]);

    return (
        <>
            <div>
                <div className="row">
                    <Header />
                    <div className="col-md-6">
                        <div className="timeline-container">
                            <PageHeader />
                            {auth.loading ? <Spinner /> : <TweetForm />}
                            <Divider />
                            {!auth.loading &&
                                !loading &&
                                tweets.map((tweet) => (
                                    <TweetItem key={tweet._id} tweet={tweet} />
                                ))}
                        </div>
                    </div>
                    <div className="col-md-3">
                        {/* <div className="mt-2 css-1dbjc4n r-1uaug3w r-1uhd6vh r-1ylenci r-1phboty r-rs99b7 r-ku1wi2 r-1bro5k0 r-1udh08x">
                                    <aside className="css-1dbjc4n">
                                        <div className="css-1dbjc4n r-1ila09b r-rull8r r-qklmqi r-1wtj0ep r-1j3t67a r-1w50u8q">
                                            <h2 class="css-4rbku5 css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep">
                                                <div
                                                    dir="auto"
                                                    class="css-901oao css-cens5h r-jwli3a r-1qd0xha r-1b6yd1w r-1vr29t4 r-ad9z0x r-bcqeeo r-qvutc0"
                                                    style={{
                                                        WebkitLineClamp: "3",
                                                    }}
                                                >
                                                    <span class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">
                                                        Who to follow
                                                    </span>
                                                </div>
                                            </h2>
                                        </div>
                                        <div className="css-1dbjc4n">
                                            {profiles &&
                                                profiles.map((prof) => (
                                                    <ProfileCard
                                                        key={prof._id}
                                                        prof={prof}
                                                    />
                                                ))}
                                        </div>
                                    </aside>
                                </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

HomePage.propTypes = {
    getTweets: PropTypes.func.isRequired,
    tweet: PropTypes.object.isRequired,
    // profile: PropTypes.object.isRequired,
    // getFollowSuggestions: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    tweet: state.tweet,
    // profile: state.profile,
});

export default connect(mapStateToProps, { getTweets, getFollowSuggestions })(
    HomePage
);
