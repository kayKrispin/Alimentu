import React from 'react';
import CheckoutForm from './Payment';
import {Elements, injectStripe} from 'react-stripe-elements';
import { connect } from 'react-redux';
import { actions as paymentActions, selectors as paymentSelectors } from '../../store/modules/Payment';
import { actions as contactActions } from "../../store/modules/Contact";



class PaymentFormContainer extends React.Component{

    state = {
        visible:false
    }

     submit = async (ev) => {
        let {token} = await this.props.stripe.createToken({name: "Name"});
       console.log('token',token,ev,'ev')

    }
    generateProps(){
        return {
            ...this.state,
            ...this.props,
            handleModal: this.handleModal,
            submit: this.submit,
            handleSendEmail:this.handleSendEmail,
        }
    }

    handleSendEmail = data => {
        console.log('data',data)
        this.setState({
            visible:false
        });
        this.props.handSendEmail(data);
        this.props.handleFinishCharge();
    }

    handleModal = () => {
        this.setState({
            visible:this.state.visible,
        })
    }

    render() {
        console.log('payment',this.props)
        const props = this.generateProps();
        return (
            <Elements>
            <CheckoutForm {...props} />
            </Elements>)
    }}

const mapStateToProps = state => ({
   paymentStatus: paymentSelectors.getPaymentStatus(state),
    values:state.form
});

const mapDispathToProps = dispatch => ({
    handlePaymant(data){
        return paymentActions.paymentCharge(data).then(res=>{
            console.log('res',res)
            dispatch(paymentActions.charge(res))
        });
    },
    handleFinishCharge(){
      dispatch(paymentActions.finishCharge('finished'))
    },

    handSendEmail(sueData){
        contactActions.submitContactForm(sueData).then(()=>{
            dispatch(contactActions.submitContactForms())})
    }
});

export default  connect(mapStateToProps, mapDispathToProps)(PaymentFormContainer);