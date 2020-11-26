import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alerts }) =>
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => (
        <div
            className="container"
            style={{
                position: "relative",
                zIndex: "9999",
                alignSelf: "center",
            }}
        >
            <div
                key={alert.id}
                style={{ position: "absolute", width: "100%", top: 20 }}
                className={`alert alert-danger`}
            >
                {alert.msg}
            </div>
        </div>
    ));

Alert.propTypes = {
    alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
