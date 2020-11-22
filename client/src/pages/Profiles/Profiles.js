import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfiles } from "../../actions/profile";
import ProfileItem from "./ProfileItem";
import Spinner from "../../components/Spinner/Spinner";

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
    useEffect(() => {
        getProfiles();
    }, [getProfiles]);

    return loading ? (
        <Spinner />
    ) : (
        <Fragment>
            <div className="text-light">
                <h1>All Profiles</h1>
                <p className="lead">These are all the existing users</p>
                <div>
                    {profiles.length > 0 ? (
                        profiles.map((profile) => (
                            <ProfileItem key={profile._id} profile={profile} />
                        ))
                    ) : (
                        <h4>No Profiles Found</h4>
                    )}
                </div>
            </div>
        </Fragment>
    );
};

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
