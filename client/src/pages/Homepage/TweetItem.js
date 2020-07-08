import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import { addLike, removeLike, deleteTweet } from '../../actions/tweet';
import './TweetItemStyles.css';

const TweetItem = ({ 
    auth,
    addLike,
    removeLike,
    deleteTweet,
    tweet: { _id, text, name, username, avatar, user, likes, replies, date} 
}) => {
    return (
        <div className='border' style={{ borderRadius: '3px' }}>
            <div className="bg-white p-2 my-1">
                <div className='d-flex flex-row' style={{ verticalAlign: 'center' }} >
                    {/* <Link to='/' style={{ textDecoration: 'none' }}> */}
                        <img className='mr-2' style={{ width: '49px', height: '49px', borderRadius: '50%' }} src={avatar} alt="avatar"/>
                        <h6>
                            {name}
                            <br/>
                            @{username}
                        </h6> 
                    {/* </Link> */}
                </div>
                <div>
                    <p className="my-1">
                        {text}
                    </p>
                    <p>
                        <button type='button' className="btn btn-sm mx-1 btn-dark" onClick={e => addLike(_id)}>
                        <svg viewBox="0 0 24 24" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg>
                            <span>
                                {likes.length > 0 && <span>{likes.length}</span>}
                            </span>
                        </button>
                        <button type='button' className="btn btn-sm mx-1 btn-dark" onClick={e => removeLike(_id)}>
                            <span>
                                Dislike
                            </span>
                        </button>
                        <Link to={`/tweets/${_id}`} type='button' className="btn btn-sm mx-1 btn-info">
                            <span>
                                View tweet
                            </span>
                        </Link>
                        {!auth.loading && user == auth.user._id && (
                            <button type='button' onClick={e => deleteTweet(_id)} className='btn btn-sm mx-1 btn-danger'>Delete Tweet</button>
                        )}
                    </p>
                </div>
            </div>
        </div>
    )
}

TweetItem.propTypes = {
    tweet: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    deleteTweet: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { addLike, deleteTweet, removeLike })(TweetItem);
