import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { actions as authActions, selectors as authSelectors } from '../../store/modules/Auth';


class HeaderContainer extends React.Component {
    state = {
        visible:false,
        visibleRegister:false,
    };

    showLogin = () => {
        this.setState({
           visible:!this.state.visible
        });
    };

    handleLogin = ( login ) => {
        this.props.fakeLogin(login);
        const openModal = !this.props.fakeLoggedIn ? this.showLogin : this.zaglushka;
        openModal();
    };

    zaglushka = () => {

    }

    showRegister = () => {
        this.setState({
            visible:false,
            visibleRegister:!this.state.visibleRegister
        });
    };

    onFakeAuthClick = (login) => {
        const {
            fakeLogin,
            fakeLogout,
            fakeLoggedIn,
        } = this.props;
        const loginOrLogout = fakeLoggedIn ? fakeLogout : fakeLogin;

        loginOrLogout(  login  );
    };

    generateProps = () => {
        return {
            ...this.props,
            ...this.state,
            onFakeAuthClick: this.onFakeAuthClick,
            showLogin: this.showLogin,
            showRegister: this.showRegister,
            handleLogin: this.handleLogin
        }
    };

    render() {
        const props = this.generateProps();
        return <Header {...props} />
    }
}

const mapStateToProps = state => ({
   fakeLoggedIn: authSelectors.getAuthenticatedFakeUser(state)
});

const mapDispatchToprops = {
    fakeLogin: authActions.fakeLogin
};

export default connect( mapStateToProps, mapDispatchToprops )( HeaderContainer );