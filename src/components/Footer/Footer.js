import React from 'react';

const Footer = ( {
    upToTop,
                 } ) => (
    <footer style={{paddingTop:'90px'}} className='footer pageFooter'>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img className='footerImg' src="https://www.plc.if.ua/wp-content/uploads/2017/02/1112-300x300.jpg" alt=""/>
                    <p className='footerR' >© 2018 | Усі права захищено </p>

                </div>
                <div className="col-md-4 secondF">
                    <p className='phoneF'>Call us : +380950053294</p>
                    <p className='fotterP'>MY COMPANY , 4578 MARMORA ROAD</p>
                    <p className='fotterP'>GLASGOW D04 89GR</p>
                    <p className='fotterP'>EMAIL INFO@DEMOLINK.ORG</p>
                </div>
            </div>
        </div>
        <button onClick={() => {upToTop()} } id='btnTop' ><i className="fas fa-chevron-up"></i></button>
    </footer>
);

export default Footer;