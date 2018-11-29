import React from 'react';
import ReactCarousel from 'nuka-carousel';

const HomeMembers = () => (
    <ReactCarousel
        wrapAround={true}
        heightMode='first'
        speed={50}
        slidesToShow={1}
        width='70%'
        renderBottomCenterControls={null}
        initialSlideWidth={'300px'}
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
    <div className="container">
        <div className="row">
            <div className='singleLawyer'>
                <div style ={{paddingRight:'200px'}} className="col-md-6  col-sm-12">
                    <h3 className='name'>Бартків Андрій </h3>
                    <p className='prof' >(Адвокат)</p>
                    <p>7 років досвіду</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                    <div className='socials' >
                        <i className="fab fa-linkedin"></i>
                        <i className="fas fa-envelope"></i>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 laws">
                    <ul style={{textAlign:'right'}} className='laws'>
                        <li className='lawL'>
                            <p>Кримінальне право</p>
                        </li>
                        <li className='lawL'>
                            <p>Цивільне право</p>
                        </li>
                        <li className='lawL'>
                            <p>Трудове право</p>
                        </li>
                        <li className='lawL'>
                            <p>Екологічне право</p>
                        </li>
                        <li className='lawL'>
                            <p>Міжнародне право</p>
                        </li>
                        <li className='lawL'>
                            <p>Податкове право</p>
                        </li>
                        <li className='lawL'>
                            <p>Фінансове прао</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="container">
    <div className="row">
    <div className='singleLawyerP'>
    <div style ={{paddingRight:'200px'}} className="col-md-6  col-sm-12">
    <h3 className='name'>Пупенко Івано Васильович</h3>
<p className='prof' >(Адвокат)</p>
<p>7 років досвіду</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
<div className='socials' >
    <i className="fab fa-linkedin"></i>
<i className="fas fa-envelope"></i>
</div>
</div>
<div className="col-md-6 col-sm-12 laws">
    <ul style={{textAlign:'right'}} className='laws'>
    <li className='lawL'>
    <p>Кримінальне право</p>
</li>
<li className='lawL'>
    <p>Цивільне право</p>
</li>
<li className='lawL'>
    <p>Трудове право</p>
</li>
<li className='lawL'>
    <p>Екологічне право</p>
</li>
<li className='lawL'>
    <p>Міжнародне право</p>
</li>
<li className='lawL'>
    <p>Податкове право</p>
</li>
<li className='lawL'>
    <p>Фінансове прао</p>
</li>
</ul>
</div>
</div>
</div>
</div>
<div className="container">
    <div className="row">
        <div className='singleLawyerV'>
            <div style ={{paddingRight:'200px'}} className="col-md-6  col-sm-12">
                <h3 className='name'>Гедзик Василь Миронович</h3>
                <p className='prof' >(Адвокат)</p>
                <p>7 років досвіду</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                <div className='socials' >
                    <i className="fab fa-linkedin"></i>
                    <i className="fas fa-envelope"></i>
                </div>
            </div>
            <div className="col-md-6 col-sm-12 laws">
                <ul style={{textAlign:'right'}}  className='laws'>
                    <li className='lawL'>
                        <p>Кримінальне право</p>
                    </li>
                    <li className='lawL'>
                        <p>Цивільне право</p>
                    </li>
                    <li className='lawL'>
                        <p>Трудове право</p>
                    </li>
                    <li className='lawL'>
                        <p>Екологічне право</p>
                    </li>
                    <li className='lawL'>
                        <p>Міжнародне право</p>
                    </li>
                    <li className='lawL'>
                        <p>Податкове право</p>
                    </li>
                    <li className='lawL'>
                        <p>Фінансове прао</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
    </ReactCarousel>
);

export default HomeMembers;