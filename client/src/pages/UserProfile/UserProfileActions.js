import React from 'react';
import { Link } from 'react-router-dom';

const UserProfileActions = () => {
    return (
        <div>
            <Link to="/editprofile" className='btn btn-primary'>Edit Profile</Link>
        </div>
    )
}

export default UserProfileActions;