import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const EditProfile = ({ profile: { profile, loading }, createProfile, getCurrentProfile, history }) => {
    const [formData, setFormData] = useState({
        bio: '',
        location: ''
    });

    useEffect(() => {
        getCurrentProfile();

        setFormData({
            bio: loading || !profile.bio ? '' : profile.bio,
            location: loading || !profile.location ? '' : profile.location
        });
    }, [loading, getCurrentProfile]);

    const {
        bio,
        location
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, history, true);
    };

    return (
        <Fragment>
            <h1>Edit your profile</h1>
            <form onSubmit={e => onSubmit(e)} >
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Bio</label>
                    <input name='bio' type="text" className="form-control" value={bio} onChange={e => onChange(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Location</label>
                    <input name='location' type="text" className="form-control" value={location} onChange={e => onChange(e)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to='/profile' type="submit" className="btn btn-info">Go Back</Link>
            </form>
        </Fragment>
    )
}

EditProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(withRouter(EditProfile))
