import AuthFlow from './AuthFlow';
import React from 'react';

class AuthFlowContainer extends React.Component {

    componentDidMount(){
        setTimeout(()=>{window.close()},5000)
    }

    render(){
        return <AuthFlow/>
    }
}


export default AuthFlowContainer;
