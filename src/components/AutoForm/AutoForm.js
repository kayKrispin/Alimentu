import React from 'react';
import PropTypes from 'prop-types';

const AutoForm = ({
    DynamicForm,
    formFields,
    title,
    onSubmit,
    submitText,
                      submitted,
                      className,
                      btnClassName,
    label,
}) => (

    <DynamicForm
        label={label}
        className={className}
        btnClassName={btnClassName}
        submitted={submitted}
        title={title}
        onSubmit={onSubmit}
        submitText={submitText}
    >    {title && <span >{title}</span>}
        {formFields.map(({ id: fieldId, Field, ...props }) => {
            return <Field {...props} key={fieldId} name={fieldId} />;
        })}
    </DynamicForm>
);

AutoForm.propTypes = {
  onSubmit:PropTypes.func,
    submitted: PropTypes.bool,
  DynamicForm: PropTypes.func,
  submitText: PropTypes.string,
  title: PropTypes.string,
  formFields: PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.string,
      Field: PropTypes.func,
  })).isRequired,
};

export default AutoForm;