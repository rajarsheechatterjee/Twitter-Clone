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
        <div className='css-1dbjc4n r-1ila09b r-qklmqi r-1adg3ll' style={{backgroundColor: 'rgb(21, 32, 43)' }}>
            <div className="my-1" style={{ backgroundColor: 'rgb(21, 32, 43)'}} style={{ paddingLeft: '15px', paddingRight: '15px', paddingTop: '5px', paddingBottom: '5px' }} >
                <div className='d-flex flex-row' style={{ verticalAlign: 'center' }} >
                    <img className='mr-2' style={{ width: '49px', height: '49px', borderRadius: '50%' }} src={avatar} alt="avatar"/>
                    <Link to={(auth.user._id === user) ? (`/profile`) : (`/profile/${user}`)} style={{ textDecoration: 'none' }}>
                    <h6>
                        <span style={{ color: 'white' }} >{name}</span>
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
                            <button type='submit' onClick={e => deleteReply(tweetId, _id)} className='btn btn-sm mx-1' style={{ backgroundColor: 'rgb(21, 32, 43)', color: '#d9534f' }}><i className="fas fa-trash-alt"></i></button>
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
