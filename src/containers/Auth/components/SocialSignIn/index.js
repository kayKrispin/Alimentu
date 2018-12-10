import SocialSignIn from './SocialSignIn';
import React from 'react';
import { connect } from 'react-redux';
import { actions as authActions } from '../../../../store/modules/Auth';

class SocialSignInContainer extends React.Component {


    handleSocialSignIn = () => {
        alert('Social signin innet');
    };

    generateProps = () => {
            return {
                ...this.state,
                ...this.props,
                handleSocialSignIn:this.handleSocialSignIn,
            }
    };


    render() {
        const props = this.generateProps();
        return <SocialSignIn {...props} />
    }
}

const mapDispatchToProps = dispatch => ({
    handleSignIn(network) {
        const scope = network === 'google' ? 'profile, email' : 'email';
        dispatch(authActions.loginSocial({ network, scope }));
    },
});

export default connect(null, mapDispatchToProps)(SocialSignInContainer);