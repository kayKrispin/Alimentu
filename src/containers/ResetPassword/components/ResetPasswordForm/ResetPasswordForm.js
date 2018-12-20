import React from 'react';
import AutoForm from '../../../../components/AutoForm';
import { Spin } from 'antd';


const ResetPasswordForm  = ({
                                handleSubmit,
                               error,
                               submitted,
                               token,
                                passwordChanged
                           }) => (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                {passwordChanged ? (<p className='requestP'>
                        <i className="far fa-smile-beam requestI"></i>
                        Ви успішно змінили свій пароль!</p>)
                    :
                    (<div>
                        <h2 style={{marginBottom:'20px'}}>Введіть новий пароль</h2>
                        <AutoForm
                            id="reset-password"
                            onSubmit={handleSubmit}
                            schema={[{
                                id: 'newPassword',
                                field: 'Input',
                                placeholder: 'Новий Пароль',
                                className:'resetPassInput'
                            }]}
                            btnClassName='resetPasswordBtn'
                            label='Підтвердити'
                        />
                    </div>)}
                { submitted ? passwordChanged ?  null : <Spin className='resetSpin'  size='large' /> : null }
            </div>
        </div>
    </div>
);

export default ResetPasswordForm;