import Documents from './Documents';
import React from 'react';
import alimentuDocs from './documents-config';
import { connect } from 'react-redux';

class DocumentsContainer extends React.Component {

    state={
      statementOfClaime:'',
      formSchema:[],
    };

    handleChange = (value) => {
        this.setState({
           statementOfClaime:value,
        }, ()=>{this.setState({
            formSchema:this.handleChooseSchema() || []});

    })};

    handleChooseSchema = () => {
        let filtereSchema = alimentuDocs && alimentuDocs.filter(item =>
            item.header === this.state.statementOfClaime)[0].alimentu.schema || [];
        return filtereSchema;
    };

    handleSubmit = (values) => {
        console.log('hi from doc',values)
    };


    generateProps() {
        return {
            ...this.props,
            ...this.state,
            handleChange: this.handleChange,
            handleSubmit: this.handleSubmit,
        }
    }

    render() {
        const props = this.generateProps();
        return <Documents {...props} />
    }
}

export default DocumentsContainer;