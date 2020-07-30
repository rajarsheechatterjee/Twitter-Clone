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
                                        <svg viewBox="0 0 24 24" class="backarrow mr-4 r-13gxpu9 r-4qtqp9 r-yyyyoo r-1q142lx r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path></g></svg>
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
                        <img alt="" draggable="true" src={profile.user.avatar} style={{ height: '100px', width:'100px', borderRadius: '50%',  marginBottom: '7px', marginTop: '5px'  }}></img>
                        <p style={{marginBottom: '10px'}}>
                            <div className='mb-0' ><span style={{ fontWeight: '800', fontSize: '19px' }}>{ profile.user && profile.user.name }</span><button className='ml-2 deletebutton' onClick={() => deleteAccount()}>Delete Profile</button><Link to='/editprofile'><button className='ml-2 followbutton'>Edit Profile</button></Link></div>
                            <div style={{marginBottom: '10px'}}><span style={{ fontSize: '0.95rem', color: '#8899a6' }} >@{profile.user.username}</span></div>
                            <span className='my-3'>
                                {profile.bio}
                            </span>
                        </p>
                        <p>
                        { profile !== null && (
                            <div>
                                <span style={{ color: '#8899a6', fontSize: '0.9rem', marginRight: '10px' }} ><svg viewBox="0 0 24 24" class="r-111h2gw r-4qtqp9 r-yyyyoo r-1xvli5t r-7o8qx1 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path><circle cx="7.032" cy="8.75" r="1.285"></circle><circle cx="7.032" cy="13.156" r="1.285"></circle><circle cx="16.968" cy="8.75" r="1.285"></circle><circle cx="16.968" cy="13.156" r="1.285"></circle><circle cx="12" cy="8.75" r="1.285"></circle><circle cx="12" cy="13.156" r="1.285"></circle><circle cx="7.032" cy="17.486" r="1.285"></circle><circle cx="12" cy="17.486" r="1.285"></circle></g></svg>Joined
                                    <Moment format='MMMM, YYYY' className='ml-2'>
                                     {profile.date}
                                    </Moment>
                                </span>
                                    <span style={{ color: '#8899a6', fontSize: '0.9rem' }}><svg viewBox="0 0 24 24" class="r-111h2gw r-4qtqp9 r-yyyyoo r-1xvli5t r-7o8qx1 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M12 14.315c-2.088 0-3.787-1.698-3.787-3.786S9.913 6.74 12 6.74s3.787 1.7 3.787 3.787-1.7 3.785-3.787 3.785zm0-6.073c-1.26 0-2.287 1.026-2.287 2.287S10.74 12.814 12 12.814s2.287-1.025 2.287-2.286S13.26 8.24 12 8.24z"></path><path d="M20.692 10.69C20.692 5.9 16.792 2 12 2s-8.692 3.9-8.692 8.69c0 1.902.603 3.708 1.743 5.223l.003-.002.007.015c1.628 2.07 6.278 5.757 6.475 5.912.138.11.302.163.465.163.163 0 .327-.053.465-.162.197-.155 4.847-3.84 6.475-5.912l.007-.014.002.002c1.14-1.516 1.742-3.32 1.742-5.223zM12 20.29c-1.224-.99-4.52-3.715-5.756-5.285-.94-1.25-1.436-2.742-1.436-4.312C4.808 6.727 8.035 3.5 12 3.5s7.192 3.226 7.192 7.19c0 1.57-.497 3.062-1.436 4.313-1.236 1.57-4.532 4.294-5.756 5.285z"></path></g></svg>
                                    <span>{profile.location}</span>
                                </span>
                            </div>
                        )}
                        </p>
                        <p style={{fontWeight: 'bold'}}>
                        <span>
                            {profile.followers.length}
                        </span><span style={{fontSize: '0.9rem', color: '#8899a6'}}> Followers </span>
                        <span className='ml-2'>
                            {profile.following.length}
                        </span><span style={{fontSize: '0.9rem', color: '#8899a6'}}> Following</span>

                        </p>
                        </div>
                        <div style={{ height: '10px', backgroundColor: 'rgb(37, 51, 65)' }} ></div>
                        {tweets.map(tweet => (
                            (tweet.user == profile.user._id) && <TweetItem key={tweet._id} tweet={tweet} />
                        ))}

                        </Fragment>
                        ) : (
                            <div className='text-light'  style={{ paddingLeft: '15px', paddingRight: '15px', paddingTop: '5px' }}>
                                <p>Add a bio</p>
                                <Link to='/createprofile' className='followbutton'>Create Profile</Link>
                            </div>
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
