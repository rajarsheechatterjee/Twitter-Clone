import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import TweetItem from './TweetItem';
import TweetForm from '../TweetForm/TweetForm';
import { getTweets } from '../../actions/tweet';

const HomePage = ({ getTweets, tweet: { tweets, loading } }) => {

    useEffect(() => {
        getTweets();
    }, [getTweets]);

    return (
        loading ? <Spinner /> : <Fragment>
            <div className="row">
                <div className="col-md-3">

                </div>
                <div className="col-md-6">
                    <div style={{ height: '53px', backgroundColor: 'rgb(21, 32, 43)', paddingLeft: '15px', paddingRight: '15px' }} >
                        <h2 style={{ alignItems: 'flex-start', fontWeight: '800', fontSize: '19px', color: 'rgb(255, 255, 255)', justifyContent: 'center', verticalAlign: 'middle' }}>Home</h2>
                    </div>
                    <TweetForm />
                    <div style={{ height: '10px' }} ></div>
                    {tweets.map(tweet => (
                        <TweetItem key={tweet._id} tweet={tweet} />
                    ))}
                </div>
                <div className="col-md-3">

                </div>
            </div>
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
