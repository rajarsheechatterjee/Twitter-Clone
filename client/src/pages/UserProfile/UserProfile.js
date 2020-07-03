import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';

const UserProfile = ({ 
    getCurrentProfile, 
    auth: {user}, 
    profile: { profile, loading} 

}) => {

    useEffect(() => {
        getCurrentProfile();
    }, []);

    return (
        <Fragment>
            <h1 className='text-primary'>Profile</h1>
            <p className="lead">Welcome { user && user.name }</p>
            { profile !== null ? (
                <Fragment>has</Fragment>
            ) : (
                <Fragment>
                    <p>Add a bio</p>
                    <Link to='/createprofile' className='btn btn-primary'>Create Profile</Link>
                </Fragment>
            )}
        </Fragment>
    )
}

UserProfile.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(UserProfile);
