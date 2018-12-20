import ResetPasswordForm from './ResetPasswordForm';
import React from 'react';
import { connect } from 'react-redux';
import {actions as authActions, selectors as authSelectors} from "../../../../store/modules/Auth";

class ResetPasswordFormContainer extends React.Component {

    state = {
        submitted:false,
    };

    handleSubmit = (values) => {
        const { token } = this.props;
        const { newPassword } = values;
        this.setState({submitted:true})
        this.props.handleChangePassword(newPassword, token)
    };

    generateProps(){
        return {
            ...this.state,
            ...this.props,
            handleSubmit: this.handleSubmit,
        }
    }

    render() {
        const props = this.generateProps();
        return <ResetPasswordForm {...props}/>
    }
}

const mapStateToProps = (state) => ({
    passwordChanged: authSelectors.getPasswordChanged(state)
});

const mapDispatchToProps = dispatch => ({
    handleChangePassword(password, token){
        dispatch(authActions.resetPassword(password,token))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordFormContainer);