import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteReply } from '../../actions/tweet';
import '../HomePage/TweetItemStyles.css';

const ReplyItem = ({ 
    auth,
    tweetId,
    deleteReply,
    reply: { _id, text, name, username, avatar, user, date}
}) => {
    

    return (
        <div className='css-1dbjc4n r-1ila09b r-qklmqi r-1adg3ll tweetitem'>
            <div className="my-1" style={{ backgroundColor: 'rgb(21, 32, 43)'}} style={{ paddingLeft: '15px', paddingRight: '15px', paddingTop: '5px', paddingBottom: '5px' }} >
                <div className='d-flex flex-row' style={{ verticalAlign: 'center' }} >
                    <img className='mr-2' style={{ width: '49px', height: '49px', borderRadius: '50%' }} src={avatar} alt="avatar"/>
                    <Link to={(auth.user._id === user) ? (`/profile/me`) : (`/profile/${user}`)} style={{ textDecoration: 'none' }}>
                    <h6>
                        <span style={{ color: 'white' }} className='name'>{name}</span>
                        <span className='ml-1' style={{ color: '#8899A6', fontSize: '0.9rem' }} >@{username} · </span>
                        <span style={{ color: '#8899a6', fontSize: '0.8rem' }}>
                            <span className="mr-1">At</span>
                            <Moment format='HH:mm A on DD MMMM YYYY'>
                                {date}
                            </Moment>
                        </span>
                    </h6> 
                    <Link to={`/tweets/${_id}`} style={{ textDecoration: 'none', color: 'white' }}>
                    <p>
                        {text}
                    </p>
                    </Link>
                    </Link>
                </div>
                <div>
                    <p>                        
                        {!auth.loading && user == auth.user._id && (
                            <button type='submit' onClick={e => deleteReply(tweetId, _id)} className='btn btn-sm mx-1' style={{ color: '#d9534f' }}><svg viewBox="0 0 24 24" class="r-daml9f r-4qtqp9 r-yyyyoo r-1q142lx r-1xvli5t r-zso239 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z"></path><path d="M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z"></path></g></svg></button>
                        )}
                    </p>
                </div>
            </div>
        </div>
    )
}

ReplyItem.propTypes = {
    tweet: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    deleteReply: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
})

export default connect(mapStateToProps, { deleteReply })(ReplyItem);
