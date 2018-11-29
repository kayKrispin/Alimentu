import React from 'react';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import { Link } from 'react-router-dom';
import Carousel from '../../../../components/Carousel'
import { BackTop } from 'antd';
import HomeMembers from '../HomeMembers';
import HomeHero from '../HomeHero';
import HomeAboutUs from '../HomeAbousUs';


const HomeScreen = ( { } ) => (
    <div className='dildo'>
        <Header />
          <HomeHero />
          <HomeAboutUs />
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
        <HomeMembers/>
        <BackTop />
        <Footer/>
    </div>
);


export default HomeScreen;