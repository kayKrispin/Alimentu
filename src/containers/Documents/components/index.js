import Documents from './Documents';
import React from 'react';
import alimentuDocs from './documents-config';
import { connect } from 'react-redux';
import sgMail from '@sendgrid/mail';
import { actions as contactActions, selectors as contactSelectors } from '../../../store/modules/Contact';

class DocumentsContainer extends React.Component {

    state={
      statementOfClaime:'',
      formSchema:[],
      submitted:false,
      visible:false,
      errMessage:'',
    };

    componentWillReceiveProps(nextProps){
        if(nextProps.status !==this.props.status){
            this.setState({
                visible:true,
            })
        }
    }
    valiateFields = (signupData) => {
        let fields = [];
        const required = [
            { name: 'courtName', message: 'Please enter Court name' },
            { name: 'courtCity', message: 'Please enter Court City' },
            { name: 'courtAdress', message: 'Please complete Court adress' },
        ];

        required.forEach((key) => {
            if (!signupData.hasOwnProperty(key.name)) {
                fields.push(key.message);
            }
        });

        return fields;
    }

    handleSubmit = (values) => {
        let errorMessages = this.valiateFields(values);
        if(errorMessages.length){
            this.setState({
               errMessage:errorMessages[0]
            });
        } else {
            this.setState({submitted:true})
            this.props.handSendEmail(values)
        }
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

    handleModal = () => {
        this.setState({
            visible:!this.state.visible
        })
    }


    generateProps() {
        return {
            ...this.props,
            ...this.state,
            handleChange: this.handleChange,
            handleSubmit: this.handleSubmit,
            handleModal:this.handleModal,
        }
    }

    render() {
        const props = this.generateProps();
        return <Documents {...props} />
    }
}

const mapStateToProps = state => ({
    status: contactSelectors.getSendMessageStatus(state)
});

const mapDispatchToProps = dispatch => ({
   handSendEmail(sueData){
       contactActions.submitContactForm(sueData).then(()=>
        dispatch(contactActions.submitContactForms()))
   }
});

export default connect(mapStateToProps, mapDispatchToProps)(DocumentsContainer);

