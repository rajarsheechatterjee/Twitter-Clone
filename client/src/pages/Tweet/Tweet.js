import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import Spinner from '../../components/Spinner/Spinner';
import { getTweet } from '../../actions/tweet';
import { addLike, deleteTweet } from '../../actions/tweet';
import ReplyForm from './ReplyForm';
import ReplyItem from './ReplyItem';
import Header from '../../components/Header/Header';

const Tweet = ({
    auth, 
    getTweet, 
    tweet: { 
        tweet, 
        loading 
    },
    match, 
    addLike, 
    deleteTweet}) => {
    
    useEffect(() => {
        getTweet(match.params.id);
    }, [getTweet], match.params.id);

    return (
        (!tweet) ? <Spinner /> : <Fragment>
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
                                        Tweet
                                    </h2>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>


                    <div>
                        <div className='css-1dbjc4n r-1ila09b r-qklmqi r-1adg3ll' style={{backgroundColor: 'rgb(21, 32, 43)' }}>
                            <div className="my-1" style={{  backgroundColor: 'rgb(21, 32, 43)', paddingLeft: '15px', paddingRight: '15px', paddingTop: '5px', paddingBottom: '5px' }} >
                                <div className='d-flex flex-row' style={{ verticalAlign: 'center' }} >
                                    <img className='mr-2' style={{ width: '49px', height: '49px', borderRadius: '50%' }} src={tweet.avatar} alt="avatar"/>
                                    <Link to={(auth.user._id === tweet.user) ? (`/profile/me`) : (`/profile/${tweet.user}`)} style={{ textDecoration: 'none' }}>
                                    <h6>
                                        <span style={{ color: 'white', fontWeight: '700' }} className='name' >{tweet.name}</span> 
                                        <br/>
                                        <span style={{ color: '#8899A6', fontSize: '0.9rem' }} >@{tweet.username}</span>
                                    </h6> 
                                    </Link>
                                </div>
                                <div>
                                    <Link to={`/tweets/${tweet._id}`} style={{ textDecoration: 'none', color: 'white' }}>
                                    <p className='mt-2'>
                                        {tweet.text}
                                    </p>
                                    </Link>
                                    <p>
                                        <button type='button' className="backarrow btn btn-sm mr-1 like" onClick={e => addLike(tweet._id)}>
                                        <svg viewBox="0 0 24 24" className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg>
                                            <span style={{marginLeft: '10px'}}>
                                                {tweet.likes.length > 0 && <span>{tweet.likes.length}</span>}
                                            </span>
                                        </button>
                                        {/* <button type='button' className="btn btn-sm mx-1" style={{ backgroundColor: 'rgb(21, 32, 43)', color: '#8899a6' }} onClick={e => removeLike(tweet._id)}>
                                            <span>
                                                <i className="fas fa-heart-broken"></i>
                                            </span>
                                        </button> */}

                                        {!auth.loading && tweet.user === auth.user._id && (
                                            <button type='button' onClick={e => deleteTweet(tweet._id)} className='backarrow btn btn-sm mx-1' style={{ color: '#d9534f' }}><svg viewBox="0 0 24 24" class="r-daml9f r-4qtqp9 r-yyyyoo r-1q142lx r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z"></path><path d="M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z"></path></g></svg></button>
                                        )}
                                    </p>
                                    <p>
                                    <span style={{ color: '#8899a6'}}>
                                            <Moment format='HH:mm A · MMMM DD, YYYY'>
                                                {tweet.date}
                                            </Moment>
                                    </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ReplyForm tweetId={tweet._id} />
                    <div className="replies">
                    {tweet.replies.map(reply => (
                        <ReplyItem key={reply._id} reply={reply} tweetId={tweet._id} tweet={tweet} />
                    ))}
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
    )
}

Tweet.propTypes = {
    getTweet: PropTypes.func.isRequired,
    tweet: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    deleteTweet: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    tweet: state.tweet,
    auth: state.auth
})


export default connect(mapStateToProps, { getTweet, addLike, deleteTweet })(Tweet);
