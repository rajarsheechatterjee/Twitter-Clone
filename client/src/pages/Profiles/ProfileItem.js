import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProfileItem = ({ profile: {
    user: { _id, name, username, avatar },
    bio,
    location
} }) => {
    return (
        <div>
            <img src={avatar} className="round-img"/>
            <div>
                <h2>{name} @{username}</h2>
                <p>{bio}</p>
                {location}
                <Link to={`/profile/${_id}`} className='btn btn-primary'>View Profile</Link>
            </div>
        </div>
    )
}

ProfileItem.propTypes = {
    profile: PropTypes.func.isRequired
}

export default ProfileItem
