import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';

const Select = ({
                    placeholder,
                    options,
                    onChange,
                    searchable,
                    className,
                    type,onInputChange,


                }) => (s
    <ReactSelect
        onInputChange={onInputChange}
        placeholder={placeholder}
        options={options}
        onChange={onChange}
        className={className}
        searchable={searchable}
    />
);

Select.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })),
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.bool]),
    searchable: PropTypes.bool,
};

export default Select;
