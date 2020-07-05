import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import {connect} from 'react-redux';

const TweetItem = ({ auth, tweet: { _id, text, name, avatar, user, like, replies, date} }) => {
    return (
        <div>
            <div className="bg-white p-1 my-1">
                <div>
                    <Link to='/'>
                        <img src={avatar} alt="avatar"/>
                        <h4>{name}</h4>
                    </Link>
                </div>
                <div>
                    <p className="my-1">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}

TweetItem.propTypes = {
    tweet: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {})(TweetItem);
