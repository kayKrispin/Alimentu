import React from 'react';
import { Field } from 'redux-form';

const FormField = ({
    children,
}) => (
  <div>
      {children}
  </div>
);


const FieldWrapper  =  WrappedField => props => (
    <WrappedField {...props} {...props.input} />
);

export default ( WrappedField ) => {
    const MyField = FieldWrapper(WrappedField);
    return props =>(
      <FormField>
        <Field {...props} component={MyField} />
      </FormField>
    );
}


export default FieldWrapper;