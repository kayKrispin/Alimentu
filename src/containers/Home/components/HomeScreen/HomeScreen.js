import React from 'react';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';

import Carousel from '../../../../components/Carousel'

const HomeScreen = ( { } ) => (
    <div className='dildo'>
        <Header/>
            <div className='container'>
                <div className='row' >
                    <div className='col-md-12'>
                        <img src="https://plc.if.ua/wp-content/uploads/2017/03/baner_png.png" alt=""/>
                        <h4 className='imgBtm'>Прикарпатська Юридична Фірма</h4>
                        <h2 className='imgScndBtm'>Реалізуй свої конституційні права <br/> з кваліфікованою допомогою</h2>
                    </div>
                </div>
            </div>
        <div style={{display:'block'}} className='row'>
            <div style={{color:'white'}} className='midlContetnImg' >
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3 activitis'>
                            <i className="fas fa-user-alt"></i>
                            <p className='midlContentH'>Цивільне впровадження</p>
                            <p className='scndP'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                        </div>
                        <div className='col-md-3 activitis'>
                            <i className="fas fa-lock"></i>
                            <p className='midlContentH'>Кримінальне Провадження</p>
                            <p className='scndP'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>

                        </div>
                        <div className='col-md-3 activitis'>
                            <i className="fas fa-suitcase"></i>
                            <p className='midlContentH'>Трудове Провадження іі</p>
                            <p className='scndP' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>

                        </div>
                        <div className='col-md-3 activitis'>
                            <i className="fas fa-hospital-alt"></i>
                            <p className='midlContentH'>Оціночна діяльність у нас
                            </p>
                            <p className='scndP'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container backMain'>
            <div style={{alignItems:'center'}} className="row backContainer">
                <div className="col-md-8">
                    <div style={{alignItems:'center'}} className="row">
                        <div className="col-md-6">
                            <p className='freeConsult'>Отримайте безкоштовну правову консультацію</p>
                        </div>
                        <div style={{margin:'0'}} className="col-md-6">
                            <p className='callUs'>Дзвоніть на нашу лінію безкоштовно</p>
                            <p className='phone' >+380950053294</p>
                            <p className='schedule' >7 днів на тиждень з 8 ранку до 2 ночі</p>
                        </div>
                    </div>
                </div>
                <div  style={{height:'100%', paddingRight:'0'}} className="col-md-4">
                    <div className='chatOn' style={{height:'70%'}}>
                        <h3  className='backBack'>Чат Онлайн</h3>
                    </div>
                    <div className='registerNow' style={{height:'30%'}}>
                        <p className='registerP'>Регіструйтесь зараз</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className='needLegalCon'>
                        <h3 className='needLegal' >Потрібна правова допомога? <br/> спитайте наших професіоналів</h3>
                        <p style={{color:'#345a80'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <p  className='readMe'>Read me</p>
                    </div>
                </div>
            </div>
        </div>
        <Carousel slides='3'/>
            <p className='betweenS'></p>
            <h3 className='foundary' >Засноване у 2017 наше агентво <br/> має 3 адвокатів!!!</h3>

        <div className="container">
            <div className="row">
                <div className='singleLawyer'>
                    <div style ={{paddingRight:'200px'}} className="col-md-6  col-sm-12">
                        <h1 className='name'>Бартків Андрій</h1>
                        <p className='prof' >(Адвокат)</p>
                        <p>7 років досвіду</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        <div className='socials' >
                            <i className="fab fa-linkedin"></i>
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <ul className='laws'>
                            <li>
                                <p>Кримінальне право</p>
                            </li>
                            <li>
                                <p>Цивільне право</p>
                            </li>
                            <li>
                                <p>Трудове право</p>
                            </li>
                            <li>
                                <p>Екологічне право</p>
                            </li>
                            <li>
                                <p>Міжнародне право</p>
                            </li>
                            <li>
                                <p>Податкове право</p>
                            </li>
                            <li>
                                <p>Фінансове прао</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <Carousel slides='1'/>
        <Footer/>
    </div>
);


export default HomeScreen;