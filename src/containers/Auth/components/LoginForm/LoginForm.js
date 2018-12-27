import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import SocialSignIn from '../SocialSignIn';
import { connect } from 'react-redux';
import { actions as authActions, selectors as authSelectors } from '../../../../store/modules/Auth';
import { error } from "../../../../store/modules/Auth/actions";


const FormItem = Form.Item;

class LoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.handleLogin(values)
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form
        const { error,errType } = this.props;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <div className='logReg'>
                    <span className='alreadyReg' >Already registered?</span>
                    <span onClick={ ()=> this.props.showRegister() } className='registerTab'>Register</span>
                </div>
                <FormItem>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please input your email!' }],
                    })(
                        <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: false,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a style={{float:'right'}} className="login-form-forgot" href="">Forgot password</a>
                    <Button style={{width:'100%'}} type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    <br/>
                    Or login with...
                    {errType === 'login' &&  <p className='duplicate'>{error}</p>}
                </FormItem>
                <SocialSignIn/>
            </Form>
        );
    }
}

const WrappedLoginForm = Form.create()(LoginForm);

const mapStateToProps = state => ({
    error:authSelectors.getError(state),
    errType:authSelectors.getErrorType(state),
})

const mapDispatchToProps = dispatch => ({
   handleLogin(data){
        dispatch(authActions.loginUser(data))
   }

});

export default connect(mapStateToProps, mapDispatchToProps)(WrappedLoginForm);