import React from 'react';

const HomeAboutUs = ({}) => (
    <div>
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
</div>
);

export default HomeAboutUs;