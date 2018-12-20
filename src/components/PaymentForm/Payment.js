import React from 'react';
import { CardElement,injectStripe } from 'react-stripe-elements';
import { Modal } from 'antd';
import { Spin } from 'antd';

class CheckoutForm extends React.Component  {

    state = {
      attempted:false,
    };

    submit = async () => {
        this.setState({ attempted:true })
        let { token } = await this.props.stripe.createToken({name: "Name"});
        if(token) {
            this.props.handlePaymant(token)
        };
    };
    render() {
        const { visible, onCancel, paymentStatus,handleFinishCharge,values,handleSendEmail } =this.props;
        console.log('VALUES',values)
        const { attempted } = this.state;
        return (
            <Modal visible={visible}
                   onOk={onCancel}
                   onCancel={onCancel} >
                <div className="checkout">
                    <h5 className='wouldyou'>Чи бажаєте ви заплатити за покупку?</h5>
                    <CardElement />
                    <button disabled={paymentStatus} className={paymentStatus ? 'paymentS' : 'paymentB'}
                            onClick={this.submit}>{
                                attempted
                                    ?
                                    paymentStatus
                                        ? <span>Ви успішно здійснили оплату
                                        <i className="fas fa-check checkP"></i>
                                        </span>
                                        : (<Spin size='medium'/>)
                                    : (<span>Заплатити <strong>30 грн</strong></span> ) }</button>
                    {paymentStatus &&
                    <button onClick={()=>{handleSendEmail( values)}}
                            className='paymentB'>Надіслати позовну заяву на пошту</button>}
                </div>
            </Modal>
        )
    }

}


export default injectStripe(CheckoutForm);