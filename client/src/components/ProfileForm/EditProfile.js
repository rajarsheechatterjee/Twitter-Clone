import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { createProfile, getCurrentProfile } from "../../actions/profile";

import Header from "../Header/Header";
import PageHeaderWithBack from "../PageHeaderWithBack/PageHeaderWithBack";
import Spinner from "../../components/Spinner/Spinner";

const EditProfile = ({
    profile: { profile, loading },
    createProfile,
    getCurrentProfile,
    history,
}) => {
    const [formData, setFormData] = useState({
        bio: "",
        location: "",
    });

    useEffect(() => {
        getCurrentProfile();

        setFormData({
            bio: loading || !profile.bio ? "" : profile.bio,
            location: loading || !profile.location ? "" : profile.location,
        });
    }, [loading, getCurrentProfile]);

    const { bio, location } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        createProfile(formData, history, true);
        history.push("/profile/me");
    };

    return (
        <>
            <div className="row">
                <Header />
                <div className="col-md-6">
                    <div
                        className="timeline-container"
                        style={{
                            borderBottomWidth: "1px",
                            borderBottomStyle: "solid",
                            borderBottomColor: "rgb(56, 68, 77)",
                        }}
                    >
                        <PageHeaderWithBack
                            history={history}
                            title="Edit Profile"
                        />
                        {loading ? (
                            <Spinner />
                        ) : (
                            <div
                                style={{
                                    paddingRight: "20px",
                                    paddingLeft: "20px",
                                }}
                            >
                                <form onSubmit={(e) => onSubmit(e)}>
                                    <div className="form-group">
                                        <label
                                            className="emailLabel"
                                            htmlFor="exampleInputEmail1"
                                        >
                                            Bio
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
                                    <div className="form-group">
                                        <label
                                            className="emailLabel"
                                            htmlFor="exampleInputEmail1"
                                        >
                                            Location
                                        </label>
                                        <input
                                            name="location"
                                            type="text"
                                            className="form-control"
                                            value={location}
                                            onChange={(e) => onChange(e)}
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="loginButton"
                                    >
                                        Save Changes
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

EditProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
    withRouter(EditProfile)
);
