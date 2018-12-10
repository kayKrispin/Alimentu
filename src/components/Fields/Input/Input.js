import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Input = ({
                   type,
                   value,
                   size,
                   onChange,
                   onKeyDown,
                   readOnly,
                   placeholder,
                   className,
               }) => (

    <input
        type={type}
        defaultValue={value}
        size={size}
        onChange={e => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        className={className}
    />
);

Input.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
  className: PropTypes.oneOfType([ PropTypes.string, PropTypes.object, PropTypes.bool ]),
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;