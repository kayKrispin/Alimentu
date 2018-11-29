import React from 'react';
import { Link } from 'react-router-dom';

const HomeHero = ( { } ) => (
    <div className='container'>
        <div className='row' >
            <div className='col-md-12'>
                <img className='topImg' src="https://plc.if.ua/wp-content/uploads/2017/03/baner_png.png" alt=""/>
                <h4 className='imgBtm'>Прикарпатська Юридична Фірма</h4>
                <h2 className='imgScndBtm'>Реалізуй свої конституційні права <br/> з допомогою нашого конструктора документів </h2>
            </div>
            <button className='createDoc'><Link to='/document' >Створити документ</Link></button>
            <h2 className='imgScndBtm'>Або ознайомся з більш глибшими послугами які надає наша фірма супроводжуючи ваші створені документи!! </h2>
        </div>
    </div>
);

export default HomeHero;