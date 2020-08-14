import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { createProfile } from '../../actions/profile';
import Header from '../Header/Header';

const CreateProfile = ({ createProfile, history }) => {
    const [formData, setFormData] = useState({
        bio: '',
        location: ''
    });

    const { bio, location } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        createProfile(formData, history);
    };

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <Header />
                    <div className="r-1ye8kvj bdr-btm css-1dbjc4n r-yfoy6g r-18bvks7 r-1ljd8xs r-13l2t4g r-1phboty r-1jgb5lz r-11wrixw r-61z16t r-1ye8kvj r-13qz1uu r-184en5c mx-0">
                        <div className="css-1dbjc4n r-aqfbo4 r-yfoy6g r-1ila09b r-rull8r r-qklmqi r-gtdqiz r-ipm5af r-1g40b8q r-1h3ijdo r-1j3t67a r-qklmqi r-rull8r r-1ila09b">
                            <div className="css-1dbjc4n r-1loqt21 r-136ojw6">
                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1h3ijdo r-1777fci r-1jgb5lz r-sb58tz r-13qz1uu">
                                    <div className="css-1dbjc4n r-16y2uox r-1wbh5a2 r-1pi2tsx r-1777fci">
                                        <div className="r-1habvwh">
                                            <h2
                                                style={{
                                                    alignItems: 'flex-start',
                                                    fontWeight: '800',
                                                    fontSize: '19px',
                                                    color: 'rgb(255, 255, 255)',
                                                    justifyContent: 'center',
                                                    verticalAlign: 'middle'
                                                }}
                                            >
                                                <Link to="/profile/me">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        class="backarrow mr-4 r-13gxpu9 r-4qtqp9 r-yyyyoo r-1q142lx r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
                                                    >
                                                        <g>
                                                            <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
                                                        </g>
                                                    </svg>
                                                </Link>
                                                Create Profile
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="r-1x0uki6 r-1ye8kvj r-13qz1uu r-1j3t67a r-1jgb5lz">
                            <form onSubmit={(e) => onSubmit(e)}>
                                <div className="form-group my-2">
                                    <label
                                        className=" r-wgabs5  r-1uaug3w r-18u37iz r-rull8r  r-1778zho r-1jkafct css-1dbjc4n"
                                        htmlFor="exampleInputEmail1"
                                    >
                                        <span className="r-glunga r-utggzx r-k200y r-16dba41 r-111h2gw r-a023e6">
                                            Bio
                                        </span>
                                    </label>
                                    <input
                                        name="bio"
                                        type="text"
                                        className="form-control"
                                        value={bio}
                                        onChange={(e) => onChange(e)}
                                        required
                                    />
                                </div>
                                <div className="form-group my-2">
                                    <label
                                        className=" r-wgabs5  r-1uaug3w r-18u37iz r-rull8r  r-1778zho r-1jkafct css-1dbjc4n"
                                        htmlFor="exampleInputEmail1"
                                    >
                                        <span className="r-glunga r-utggzx r-k200y r-16dba41 r-111h2gw r-a023e6">
                                            Location
                                        </span>
                                    </label>
                                    <input
                                        name="location"
                                        type="text"
                                        minLength="6"
                                        className="form-control"
                                        value={location}
                                        onChange={(e) => onChange(e)}
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    style={{ width: '100%', cursor: 'pointer' }}
                                    className="mx-0 my-4 r-17bavie r-1jayybb r-urgr8i  r-1ny4l3l r-6416eg  r-1w2pmg  r-o7ynqc  r-lrvibr  r-15bsvpr r-vlx1xi  r-zg41ew  r-42olwf  r-rs99b7  r-1phboty r-sdzlij r-jwli3a  r-eljoum  r-vw2c0b  r-a023e6  r-1qd0xha r-qvutc0  r-bcqeeo  r-1awozwy r-1777fci r-16y2uox r-18u37iz r-q4m81j  r-dnmrzs  r-6koalj"
                                >
                                    Save Profile
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
