import React from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';
import { Button } from 'antd';


const HomeHero = ( {
                       handleModal,
                        visible
                   } ) => (
    <div className='container'>
        <div className='row' >
            <div className='col-md-12'>
                <img className='topImg' src="https://plc.if.ua/wp-content/uploads/2017/03/baner_png.png" alt=""/>
                <h4 className='imgBtm'>Прикарпатська Юридична Фірма</h4>
                <h2 className='imgScndBtm'>Реалізуй свої конституційні права <br/> з допомогою нашого конструктора документів </h2>
            </div>
            <button onClick={handleModal} className='createDoc'>Створити Документ</button>
            <h2 className='imgScndBtm'>Або ознайомся з більш глибшими послугами які надає наша фірма супроводжуючи ваші створені документи!! </h2>
        </div>
        <Modal
            className='continueModal'
            visible={visible}
            onCancel={handleModal}
            onOk={handleModal}
        >
            <h4 style={{textAlign:"center"}}>Вартість документа <strong>30</strong> грн</h4>
            <Button style={{marginTop:'10px'}}  type='primary' primary={true} block={true}>
                <Link style={{textDecoration:'none'}} to='/document' >Продовжити</Link>
            </Button>
        </Modal>
    </div>
);

export default HomeHero;