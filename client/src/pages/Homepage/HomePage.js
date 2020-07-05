import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import TweetItem from './TweetItem';
import { getTweets } from '../../actions/tweet';

const HomePage = ({ getTweets, tweet: { tweets, loading } }) => {

    useEffect(() => {
        getTweets();
    }, [getTweets]);

    return (
        loading ? <Spinner /> : <Fragment>
            <h1>Tweets</h1>
            <p className="lead">Timeline</p>
            {tweets.map(tweet => (
                <TweetItem key={tweet._id} tweet={tweet} />
            ))}
        </Fragment>
    )
}

HomePage.propTypes = {
    getTweets: PropTypes.func.isRequired,
    tweet: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    tweet: state.tweet
});

export default connect(mapStateToProps, { getTweets })(HomePage)
