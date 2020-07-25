import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import { getTweets } from '../../actions/tweet';
import Spinner from '../../components/Spinner/Spinner';
import Moment from 'react-moment';
import TweetItem from '../HomePage/TweetItem';
import Header from '../../components/Header/Header';


const UserProfile = ({ 
    getCurrentProfile,
    deleteAccount,
    auth, 
    profile: { profile, loading},
    getTweets,
    tweet: { tweets }

}) => {

    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

    useEffect(() => {
        getTweets();
    }, [getTweets]);

    return (
        <Fragment>
            {loading ? (
                <Spinner />
            ) : (
            <Fragment>
                <div className="container">
                    <div className="row">
                    <Header />
                    <div className="r-1ye8kvj css-1dbjc4n r-yfoy6g r-18bvks7 r-1ljd8xs r-13l2t4g r-1phboty r-1jgb5lz r-11wrixw r-61z16t r-1ye8kvj r-13qz1uu r-184en5c mx-0">
                        <div className="css-1dbjc4n r-aqfbo4 r-yfoy6g r-1ila09b r-rull8r r-qklmqi r-gtdqiz r-ipm5af r-1g40b8q r-1h3ijdo r-1j3t67a r-qklmqi r-rull8r r-1ila09b" >
                            <div className='css-1dbjc4n r-1loqt21 r-136ojw6' >
                                <div className='css-1dbjc4n r-1awozwy r-18u37iz r-1h3ijdo r-1777fci r-1jgb5lz r-sb58tz r-13qz1uu' >
                                <div className="css-1dbjc4n r-16y2uox r-1wbh5a2 r-1pi2tsx r-1777fci" >
                                    <div className='r-1habvwh' >
                                        <h2 style={{ alignItems: 'flex-start', fontWeight: '800', fontSize: '19px', color: 'rgb(255, 255, 255)', justifyContent: 'center', verticalAlign: 'middle' }}>
                                        <Link to='/home'>
                                        <svg viewBox="0 0 24 24" class="mr-4 r-13gxpu9 r-4qtqp9 r-yyyyoo r-1q142lx r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path></g></svg>
                                        </Link>
                                            Your Profile
                                        </h2>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        { profile !== null ? (
                        <Fragment>
                        <div className="text-light" style={{ paddingLeft: '15px', paddingRight: '15px', paddingTop: '5px' }}>
                        <img alt="" draggable="true" src={profile.user.avatar} style={{ height: '100px', width:'100px', borderRadius: '50%' }}></img>
                        <p className="text-light mb-1">
                            <span style={{ fontWeight: '800', fontSize: '19px' }}>{ profile.user && profile.user.name }</span>
                            <br/>
                            <span style={{ fontSize: '0.95rem', color: '#8899a6' }} >@{profile.user.username}</span><br/>
                            <span style={{ color: '#8899a6', fontSize: '0.9rem' }} ><i className="fas fa-calendar-week mr-1"></i>Joined
                                <Moment format='MMMM, YYYY' className='ml-2'>
                                 {profile.date}
                                </Moment>
                            </span><br/>
                            <span className='mt-1'>
                                {profile.bio}
                            </span>

                        </p>
                        <p>
                            {profile.followers.length} Followers {profile.following.length} Following
                        </p>
                        <p>
                        { profile !== null ? (
                            <Fragment>
                                <span className='pb-2' style={{ color: '#8899a6' }}><i className="fas fa-map-marked-alt mr-2"></i>Location: 
                                {profile.location}
                                </span><br/>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <p>Add a bio</p>
                                <Link to='/createprofile' className='btn btn-primary btn-sm'>Create Profile</Link>
                            </Fragment>
                        )}
                        </p>
                        <div className="css-1dbjc4n r-18u37iz r-16y2uox r-1h3ijdo r-58zi21" >
                            <div className='css-1dbjc4n r-1awozwy r-1pz39u2 r-18u37iz r-16y2uox' >
                            { auth.isAuthenticated && 
                            auth.loading === false && 
                            auth.user._id === profile.user._id && (
			    			<div className=" r-16y2uox mgnlft" style={{ color: 'white' }} >
			    				<Link to='/editprofile' className='deco nav-link r-urgr8i  r-aj3cln  r-1vsu8ta r-1ny4l3l r-6416eg  r-1w2pmg  r-1loqt21 r-o7ynqc  r-lrvibr  r-1fneopy r-42olwf  r-rs99b7  r-1phboty r-sdzlij ' >
			    					<div className='r-eljoum hght r-vw2c0b r-a023e6 r-1qd0xha r-qvutc0 r-bcqeeo  r-1awozwy r-1777fci r-16y2uox r-18u37iz r-q4m81j r-6koalj ' >
			    						<span className='r-1qd0xha r-qvutc0  r-bcqeeo  r-ad9z0x ' >
			    						<span className='deco mx-0 my-0 p-0  r-qvutc0 r-bcqeeo r-ad9z0x css-16my406 css-901oao'>Edit Profile</span>
			    						</span>
			    					</div>
			    				</Link>
			    			</div>
                            )}
                            </div>
                        </div>
                        </div>
                        <div style={{ height: '10px', backgroundColor: 'rgb(37, 51, 65)' }} ></div>
                        {tweets.map(tweet => (
                            (tweet.user == profile.user._id) && <TweetItem key={tweet._id} tweet={tweet} />
                        ))}

                        </Fragment>
                        ) : (
                            <Fragment>
                                <p>Add a bio</p>
                                <Link to='/createprofile' className='btn btn-primary btn-sm'>Create Profile</Link>
                            </Fragment>
                        )}

                        </div>
                    </div>
                </div>
            </Fragment>
            )}
        </Fragment>
    )
}

UserProfile.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    tweet: PropTypes.object.isRequired

}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
    tweet: state.tweet
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount, getTweets })(UserProfile);
