import React from 'react';

const Footer = ( {
    upToTop,
                 } ) => (
    <div style={{marginTop:'50px'}}>
        <img className='footerImg' src="https://www.plc.if.ua/wp-content/uploads/2017/02/1112-300x300.jpg" alt=""/>
        <p className='footerP' >© 2018 | Усі права захищено </p>
        <button onClick={() => {upToTop()} } id='btnTop' ><i className="fas fa-chevron-up"></i></button>
    </div>
);

export default Footer;