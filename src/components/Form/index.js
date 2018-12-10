import React from 'react';
import Form from './Form';
import { reduxForm } from 'redux-form';

class FormContainer extends React.PureComponent {

    onKeyDown = (e) => {
        console.log(this.props)
        if (e.key === 'Enter') {
            e.preventDefault();
            this.props.handleSubmit && this.props.handleSubmit();
        }
    };

    handleSub = values => {
      console.log('vallll',values)
    };


    generateProps(){
        return {
            ...this.props,
            ...this.state,
            onKeyDown: this.onKeyDown,
            handleSub: this.handleSub,

        }
    }

    render() {
        const props = this.generateProps();
        return <Form ref="form" {...props} />
    }
}

export default formId => reduxForm({
    form:formId,
    enableReinitialize:true,
})(FormContainer);