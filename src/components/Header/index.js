import React from 'react';
import Header from './Header';

class HeaderContainer extends React.Component {

    generateProps = () => {
        return {
            ...this.props,
            ...this.state,
            handleLogin:this.handleLogin,
        }
    };

    render() {
        const props = this.generateProps();
        return <Header {...props} />
    }
}



export default HeaderContainer;