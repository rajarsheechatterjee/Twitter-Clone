import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import { getTweet } from '../../actions/tweet';

const Tweet = ({ getTweet, tweet: { tweet, loading }, match }) => {
    
    useEffect(() => {
        getTweet(match.params.id);
    }, [getTweet]);
    
    return (
        <div>
            tweet
        </div>
    )
}

Tweet.propTypes = {
    getTweet: PropTypes.func.isRequired,
    tweet: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    tweet: state.tweet
})

export default connect(mapStateToProps, { getTweet })(Tweet);
