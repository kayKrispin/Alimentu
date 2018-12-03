import React from 'react';
import AutoForm from './AutoForm';
import * as Fields from '../Fields';
import PropTypes from 'prop-types';
import Form from '../Form';


class AutoFormContainer extends React.PureComponent {

   constructor(props){
       super(props);

       this.state = {
           DynamicForm:Form(props.id)
       }
   }

   componentDidUpdate(nextprops){
       if(nextprops.id != this.props.id){
           this.setState({
                DynamicForm: Form(nextprops.id)
           });
       }
   };


   generateFields(){
       return this.props.schema.map(schemaItem=>({
           ...schemaItem,
           Field:Fields[schemaItem.field],
       }))
   }

    generateProps = () => {
        return {
            ...this.props,
            ...this.state,
        }
    };

    render() {
        const props = this.generateProps();
        return <AutoForm {...props} />
    }
}

export default AutoFormContainer;