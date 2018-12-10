import React from 'react';
import PropTypes from 'prop-types';

const Form = ({
    onSubmit,
    children,
    onKeyDown,
                  handleSub,
    handleSubmit,
}) => (
    <form  onKeyDown={onKeyDown} onSubmit={handleSubmit} >
        <div style={{display:'flex',flexWrap:'wrap',padding:"0 40px",textAlign:'center'}}>
         {children}
            <button type='submit' className='createDoc'>Оформити документ</button>
        </div>
    </form>
);


Form.propTypes = {
    handleSubmit: PropTypes.func
};

export default Form;