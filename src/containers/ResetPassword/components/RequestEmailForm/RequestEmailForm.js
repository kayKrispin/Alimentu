import React from 'react';
import AutoForm from '../../../../components/AutoForm';
import { Spin } from 'antd';

const RequestEmailForm  = ({
    handleSubmit,
    error,
    successMessage,
    submitted,
    confirmResetLink,
}) => (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                {successMessage ? (<p className='requestP'>
                        <i className="far fa-smile-beam requestI"></i>
                        Будь ласка перевірте свій емейл та перейдіть по вказаному посиланню</p>)
                    :
                    (<div>
                        {confirmResetLink === 'failed'
                            ? ( <h2>Лінк неактивний відправте листа ще раз</h2> )
                            : ( <h2 className='requestPass'>Відправити запит для нового пароля на емейл</h2> )
                        }
                        <AutoForm
                            id="request-password"
                            onSubmit={handleSubmit}
                            schema={[{
                                id: 'email',
                                field: 'Input',
                                placeholder: 'Email Address',
                                className:'resetPassInput'
                            }]}
                            btnClassName='resetPasswordBtn'
                            label='Підтвердити'
                        />
                    </div>)}
                { submitted ? successMessage ?  null : <Spin className='resetSpin'  size='large' /> : null }
                {error ? <span className='error'>Введіть коректний емейл</span> : null}
            </div>
        </div>
    </div>
);

export default RequestEmailForm;