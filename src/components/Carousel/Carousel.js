import React from 'react';
import ReactCarousel from 'nuka-carousel';
import cx from 'classnames';
import style from './style.scss';
import SVG from '../SVG';


const DefaultDecorators = [{
    component: (props) => {
        const bars = [];
        for (let i = 0; i < props.slideCount; i++) {
            bars.push(
                <span
                    key={`bar${i}`}
                    className={cx(style.bar, props.currentSlide === i && style.activeBar)}
                    onClick={() => props.goToSlide(i)}
                />
            );
        }

        return ([
            <span key="bars" className={style.navigation}>{bars}</span>,
            <span key="previous" className={style.previous} onClick={() => props.previousSlide()}><SVG icon="angleleft" className="icon angleleft" /></span>,
            <span key="next" className={style.next} onClick={() => props.nextSlide()}><SVG icon="angleright" className="icon angleright" /></span>,

        ]);
    },
    position: 'TopLeft',
    style: {
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
    },
}];

const Carousel = ({ slides })  => (
    <ReactCarousel
        wrapAround={true}
        heightMode='first'
        speed={50}
        slidesToShow={slides}
        width='70%'
        renderBottomCenterControls={null}
        initialSlideWidth={'400px'}
        renderCenterLeftControls={({ previousSlide }) => (
            <button className='slidBtn' onClick={previousSlide}>
                <i className="fas fa-chevron-left"></i>
            </button>
        )}
        renderCenterRightControls = {({ nextSlide }) => (
            <button className='slidBtn' onClick={nextSlide}>
                <i className="fas fa-chevron-right"></i>
            </button>
        )}


    >
        <img className='slidImg' src="https://www.plc.if.ua/wp-content/uploads/2016/08/semejnye-dela-home.jpg" />
        <img className='slidImg' src="https://www.plc.if.ua/wp-content/uploads/2017/02/real-estate-law-300x191.jpg" />
        <img className='slidImg' src="https://www.plc.if.ua/wp-content/uploads/2017/02/jur.jpg" />
        <img className='slidImg' src="https://www.plc.if.ua/wp-content/uploads/2017/03/police-705x353.jpg" alt=""/>
    </ReactCarousel>

);



Carousel.defaultProps = {
    images: [],
    decorators: DefaultDecorators,
    customClasses: {},
};

export default Carousel;





