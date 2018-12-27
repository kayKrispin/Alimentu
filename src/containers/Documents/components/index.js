import Documents from './Documents';
import React from 'react';
import alimentuDocs from './documents-config';
import { connect } from 'react-redux';
import sgMail from '@sendgrid/mail';
import { actions as contactActions, selectors as contactSelectors } from '../../../store/modules/Contact';
import { actions as documentActions, selectors as documentSelectors } from '../../../store/modules/Documents';
import { selectors as paymentSelectors } from '../../../store/modules/Payment';
import { selectors as authSelectors } from '../../../store/modules/Auth';
import required from '../../../components/Validation/requiredFields';
import { valiateFieldsMain } from '../../../components/Validation/documentsValidation';

class DocumentsContainer extends React.Component {

    state={
      statementOfClaime:'',
      formSchema:[],
      submitted:false,
      visible:false,
      errMessage:'',
      visiblePayment:false,
      validation:'',
    };

    componentDidMount(){
        window.scrollTo(0, 0);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.status !==this.props.status){
            this.setState({
                visible:true,
            })
        }
        if(nextProps.finishStep === 'finished'){
            this.setState({
               visiblePayment:false
            });
        }
    }


    handleSubmit = (values) => {
        const { user : { _id } } = this.props;
        const { statementOfClaime, validation } = this.state;

        this.props.handleSaveDocument({userId: _id ,values : values, statementOfClaime:statementOfClaime})

        let errorMessages = valiateFieldsMain(values, required[validation])
        if(errorMessages.length){
            this.setState({
               errMessage:errorMessages[0]
            });
        } else {
            this.setState({visiblePayment:true, errMessage:''})
            if( this.props.finishStep) {
                this.setState({ visiblePayment:false, submitted:true });
                this.props.handSendEmail(values);
            }
        }
    };


    handleChange = (value) => {
        this.setState({
           statementOfClaime:value,
        }, ()=>{this.setState({
            formSchema: this.handleChooseSchema() || [],
            validation: this.handleChooseRequiredFields() || [],
        });

    })};

    handleChooseRequiredFields = () => {
      let filteredRequired = alimentuDocs && alimentuDocs.filter(item =>
            item.header === this.state.statementOfClaime)[0].validation || [];
        return filteredRequired;
    }

    handleChooseSchema = () => {
        let filtereSchema = alimentuDocs && alimentuDocs.filter(item =>
            item.header === this.state.statementOfClaime)[0].alimentu.schema || [];
        return filtereSchema;
    };

    handleModal = () => {
        this.setState({
            visible:!this.state.visible,
        });
    }

    handlePayment = () => {
        this.setState({
            visiblePayment:!this.state.visiblePayment,
        });
    }

    generateProps() {
        return {
            ...this.props,
            ...this.state,
            handleChange: this.handleChange,
            handleSubmit: this.handleSubmit,
            handleModal:this.handleModal,
            handlePayment:this.handlePayment,
        }
    }

    render() {
        const props = this.generateProps();
        return <Documents {...props} />
    }
}

const mapStateToProps = state => ({
    status: contactSelectors.getSendMessageStatus(state),
    finishStep: paymentSelectors.getFinishStep(state),
    user: authSelectors.getAuthenticatedUser(state),
});

const mapDispatchToProps = dispatch => ({
   handSendEmail(sueData){
       contactActions.submitContactForm(sueData).then(()=>
        dispatch(contactActions.submitContactForms()))
   },
   handleSaveDocument(document) {
        dispatch(documentActions.createNewDocument(document));
   }
});

export default connect(mapStateToProps, mapDispatchToProps)(DocumentsContainer);

