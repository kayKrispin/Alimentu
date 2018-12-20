import ResetPasswordScreen from './ResetPasswordScreen';
import React from 'react';
import { connect } from 'react-redux';
import { actions as authActions, selectors as authSelectors } from '../../../../store/modules/Auth';

class ResetPasswordScreenContainer extends React.Component {

    componentDidMount() {
        const { token } = this.props.match.params;
        if( token ) {
            this.props.handleValidateToken(token)
        }
    }

    getToken(){
        return this.props.match.params.token
    }

    generateProps(){
        return {
            ...this.state,
            ...this.props,
            token: this.getToken(),
        }
    }

    render() {
        const props = this.generateProps();
        return <ResetPasswordScreen {...props} />
    }
}

export const mapStateToProps = state => ({
    confirmResetLink: authSelectors.getConfirmResetPassword(state)
});

export const mapDispatchToProps = dispatch => ({

        handleValidateToken(token) {
            dispatch(authActions.validateToken(token))
        }
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordScreenContainer);