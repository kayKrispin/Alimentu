import React from 'react';
import AutoForm from '../../../../components/AutoForm';

const RequestEmailForm  = ({
    handleSubmit,
    error,
}) => (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h2 style={{marginBottom:'20px'}}>Відправити запит для нового пароля на емейл</h2>
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
                {error ? <span className='error'>Введіть коректний емейл</span> : null}
            </div>
        </div>
    </div>
);

export default RequestEmailForm;