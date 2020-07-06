import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import { addLike, removeLike, deleteTweet } from '../../actions/tweet';

const TweetItem = ({ 
    auth,
    addLike,
    removeLike,
    deleteTweet,
    tweet: { _id, text, name, avatar, user, likes, replies, date} 
}) => {
    return (
        <div>
            <div className="bg-white p-1 my-1">
                <div>
                    {/* <Link to='/' style={{ textDecoration: 'none' }}> */}
                        <img src={avatar} alt="avatar"/>
                        <h4>{name}</h4>
                    {/* </Link> */}
                </div>
                <div>
                    <p className="my-1">
                        {text}
                    </p>
                    <p>
                        <button type='button' className="btn btn-dark" onClick={e => addLike(_id)}>
                            <span>
                                {likes.length > 0 && <span>{likes.length}</span>} Like
                            </span>
                        </button>
                        <button type='button' className="btn btn-dark" onClick={e => removeLike(_id)}>
                            <span>
                                Dislike
                            </span>
                        </button>
                        {!auth.loading && user == auth.user._id && (
                            <button type='button' onClick={e => deleteTweet(_id)} className='btn btn-danger'>Delete Tweet</button>
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
