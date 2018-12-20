import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import {selectors as authSelectors} from "../../store/modules/Auth";

const UserRoute = ({ user, component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            user.email !== null ? <Component {...props} /> : <Redirect to="/" />}
    />
);

UserRoute.propTypes = {
    component: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    user: authSelectors.getAuthenticatedUser(state)
});

export default connect(mapStateToProps)(UserRoute);
