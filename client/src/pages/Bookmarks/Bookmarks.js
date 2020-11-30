import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import TweetItem from "../HomePage/TweetItem";

import Header from "../../components/Header/Header";
import PageHeaderWithBack from "../../components/PageHeaderWithBack/PageHeaderWithBack";
import Spinner from "../../components/Spinner/Spinner";

import { getBookmarks } from "../../actions/tweet";

const Bookmarks = ({
    auth,
    getBookmarks,
    history,
    tweet: { tweets, loading },
}) => {
    useEffect(() => {
        getBookmarks();
    }, [getBookmarks]);

    return (
        <div className="row">
            <Header />
            <div className="col-md-6">
                <div className="timeline-container">
                    <PageHeaderWithBack history={history} title="Bookmarks" />
                    {loading ? (
                        <Spinner />
                    ) : tweets.length > 0 ? (
                        tweets.map((tweet) => (
                            <TweetItem key={tweet._id} tweet={tweet} />
                        ))
                    ) : (
                        <div className="no-bookmarks">
                            <div className="bookmark-header">
                                You haven’t added any Tweets to your Bookmarks
                                yet
                            </div>
                            <div className="bookmarks-subtext">
                                When you do, they’ll show up here.
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    auth: PropTypes.object.isRequired,
    getBookmarks: PropTypes.func.isRequired,
    tweet: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    tweet: state.tweet,
});

export default connect(mapStateToProps, { getBookmarks })(Bookmarks);
