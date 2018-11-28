import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { selectors as authSelectors } from '../../store/modules/Auth';


const GuestRoute = ({ isFakeAuthenticated, component: Component, ...rest }) => (
    <Route
        {...rest}
        render={ props =>
            !isFakeAuthenticated ? (
                <Component {...props} />
            ) : (
                 <Redirect to="/" />
            )}
    />
);

GuestRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isFakeAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
   isFakeAuthenticated: authSelectors.getAuthenticatedFakeUser(state)
});

export default connect(mapStateToProps)(GuestRoute);
