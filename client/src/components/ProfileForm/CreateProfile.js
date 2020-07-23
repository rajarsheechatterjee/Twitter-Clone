import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
    const [formData, setFormData] = useState({
        bio: '',
        location: ''
    });

    const {
        bio,
        location
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, history);
    };

    return (
        <Fragment>
            <h1>Create your profile</h1>
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
                <Link to='/profile/me' type="submit" className="btn btn-info">Go Back</Link>
            </form>
        </Fragment>
    )
}

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired
}

export default connect(null, { createProfile })(withRouter(CreateProfile))
