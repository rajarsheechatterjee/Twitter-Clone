import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CreateProfile = props => {
    const [formData, setFormData] = useState({
        bio: '',
        location: ''
    });

    const {
        bio,
        location
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <Fragment>
            <h1>Create your profile</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Bio</label>
                    <input name='bio' type="text" className="form-control" value={bio} onChange={e => onChange(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Location</label>
                    <input name='location' type="text" className="form-control" value={location} onChange={e => onChange(e)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <a href='/profile' type="submit" className="btn btn-info">Go Back</a>
            </form>
        </Fragment>
    )
}

CreateProfile.propTypes = {

}

export default CreateProfile
