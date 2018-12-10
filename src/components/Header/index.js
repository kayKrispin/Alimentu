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
            visible:true,
            visibleRegister:false
        });
    };

    componentWillReceiveProps(nextProps){
        console.log(this.props.user,nextProps.user)
        this.props.user !== nextProps.user && this.setState({
            visible:false,
            visibleRegister:false,
        })
    }

    hideLogin = () => {
        this.setState({
            visible:false,
            visibleRegister:false
        });
    };

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
            showRegister:this.showRegister,
            showLogin:this.showLogin,
            hideLogin:this.hideLogin,
        }
    };

    render() {
        const props = this.generateProps();
        return <Header {...props} />
    }
}

const mapStateToProps = state => ({
    user:authSelectors.getAuthenticatedUser(state)
});

const mapDispatchToprops =  dispatch => ({
    handleLogout(){
        localStorage.clear();
        dispatch(authActions.logout());
    }
});

export default connect( mapStateToProps, mapDispatchToprops )( HeaderContainer );