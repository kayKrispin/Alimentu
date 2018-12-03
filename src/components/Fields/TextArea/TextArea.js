import React from 'react';
import PropTypes from 'prop-types';


const TextArea = ( {
    placeholder,
    className,
    value,
    onChange } ) => (

    <textarea
        value={value}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
    />
);

TextArea.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.bool]),
};

export default TextArea;