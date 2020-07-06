import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import UserProfileActions from './UserProfileActions';

const UserProfile = ({ 
    getCurrentProfile,
    deleteAccount,
    auth, 
    profile: { profile, loading} 

}) => {

    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

    return (
        <Fragment>
            <h1>Your Profile</h1>
            <p className="lead">Welcome { auth.user && auth.user.name } @{auth.user.username}</p>
            { profile !== null ? (
                <Fragment>
                    <UserProfileActions />
                    {profile.bio}
                    <p>
                    {profile.location}
                    </p>
                    <button onClick={() => deleteAccount()} className="btn btn-danger btn-sm">Delete My Account</button>
                </Fragment>
            ) : (
                <Fragment>
                    <p>Add a bio</p>
                    <Link to='/createprofile' className='btn btn-primary btn-sm'>Create Profile</Link>
                </Fragment>
            )}
        </Fragment>
    )
}

UserProfile.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(UserProfile);
