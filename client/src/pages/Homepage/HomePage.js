import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import TweetItem from './TweetItem';
import TweetForm from '../TweetForm/TweetForm';
import { getTweets } from '../../actions/tweet';
import { getCurrentProfile } from '../../actions/profile';
import './HomePageStyles.css';
import Header from '../../components/Header/Header';

const HomePage = ({ getCurrentProfile, getTweets, profile: { profile, profileLoading }, tweet: { tweets, loading } }) => {

    useEffect(() => {
        getCurrentProfile();
        getTweets();
    }, [getTweets]);

    return (
        (profileLoading && loading) ? <Spinner /> : <Fragment>
            <div className="container">
            <div className="row">
                <Header />
                <div className="r-1ye8kvj css-1dbjc4n r-yfoy6g r-18bvks7 r-1ljd8xs r-13l2t4g r-1phboty r-1jgb5lz r-11wrixw r-61z16t r-1ye8kvj r-13qz1uu r-184en5c mx-0">
                    <div className="css-1dbjc4n r-aqfbo4 r-yfoy6g r-1ila09b r-rull8r r-qklmqi r-gtdqiz r-ipm5af r-1g40b8q r-1h3ijdo r-1j3t67a r-qklmqi r-rull8r r-1ila09b" >
                        <div className='css-1dbjc4n r-1loqt21 r-136ojw6' >
                            <div className='css-1dbjc4n r-1awozwy r-18u37iz r-1h3ijdo r-1777fci r-1jgb5lz r-sb58tz r-13qz1uu' >
                            <div className="css-1dbjc4n r-16y2uox r-1wbh5a2 r-1pi2tsx r-1777fci" >
                                <div className='r-1habvwh' >
                                    <h2 style={{ alignItems: 'flex-start', fontWeight: '800', fontSize: '19px', color: 'rgb(255, 255, 255)', justifyContent: 'center', verticalAlign: 'middle' }}>Home</h2>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <TweetForm />
                    <div style={{ height: '10px', backgroundColor: 'rgb(37, 51, 65)' }} ></div>
                    {profile.following.length > 0 && profile.following.map(follow => tweets.map(tweet => (follow.user === tweet.user) && <TweetItem key={tweet._id} tweet={tweet} /> ))}
                </div>
            </div>
            </div>
        </Fragment>
    )
}

HomePage.propTypes = {
    getTweets: PropTypes.func.isRequired,
    tweet: PropTypes.object.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    tweet: state.tweet,
    profile: state.profile
});

export default connect(mapStateToProps, { getTweets, getCurrentProfile })(HomePage)
