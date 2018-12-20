import React from 'react';
import RequestEmailForm from './RequestEmailForm';
import { connect } from 'react-redux';
import { actions as authActions, selectors as authSelectors } from '../../../../store/modules/Auth';


class RequestEmailFormContainer extends React.Component {

    state = {
        error:false,
    };

    handleError = (email) => {
        if(email !== undefined)
        return email.indexOf("@") < 0
    };

    handleSubmit = (values) => {

        const { email } = values;
        const { _id } = this.props;
        const error = this.handleError(email);
        if (error) {
            this.setState({error: true});
        } else {
            this.props.handleResetPasswordLink(email, _id)
            this.setState({error: false});
         }
    };

    generateProps(){
        return {
            ...this.state,
            ...this.props,
            handleSubmit: this.handleSubmit
        }
    }

    render() {
        const props = this.generateProps();
        return <RequestEmailForm {...props}/>
    }
}

const mapStateToProps = (state) => ({
   _id: authSelectors.getAuthenticatedUser(state)._id
});

const mapDispatchToProps = dispatch => ({
   handleResetPasswordLink(email, _id){
        dispatch(authActions.requestResetPassLink(email, _id))
   },
});

export default connect(mapStateToProps, mapDispatchToProps)(RequestEmailFormContainer);