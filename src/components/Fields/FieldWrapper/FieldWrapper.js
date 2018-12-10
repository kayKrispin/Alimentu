import React from 'react';
import { Field } from 'redux-form';

const FormField = ({
                                          title,
                                          children,
    type,
    lox,
                       marginTop,

                                      }) => (
                                          <div style={{width: lox && '100%',marginTop: marginTop && '20px',marginBottom:"32px"}} >
        {title && (
            <label >
                <span >
                    {title}
                </span>
            </label>
        )}
        {children}
    </div>
);

const FieldWrapper = WrappedField => props => (
    <WrappedField {...props} {...props.input} />
);

export default (WrappedField) => {
    const MeField = FieldWrapper(WrappedField);
    return props => (
        <FormField marginTop={props.marginTop} lox={props.lox} title={props.title} type={props.type} tip={props.tip} wrapperClassName={props.wrapperClassName}>
            <Field {...props} component={MeField} />
        </FormField>
    );
};