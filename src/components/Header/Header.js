import React from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';
import LoginForm from '../../containers/Auth/components/LoginForm'
import SignupForm from '../../containers/Auth/components/SignupForm'

const Header = ( {
    fakeLogin,
    loggedIn,
    fakeLoggedIn,
    showLogin,
    showRegister,
    visible,
    visibleRegister,
} ) => (
    <header className='headerContainer'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div   className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul style={{width:'100%'}} className="navbar-nav headerMain">
                    <li className="nav-item active   ">
                        <Link className="nav-link firstActive moreItems" to="/"> Головна<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item headerLi">
                        <Link className="nav-link moreItems" to="/about">Створи документ</Link>
                    </li>

                    <li className="nav-item dropdown headerLi">
                        <a className="nav-link dropdown-toggle lastItem moreItems" href="#" id="navbarDropdownMenuLink"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Більше
                        </a>
                        <div  className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            { fakeLoggedIn ? <Link className="dropdown-item " to="/mycabinet"> Мій кабінет</Link>  : null}
                            <a className="dropdown-item " href="#">Список документів</a>
                            <a className="dropdown-item " href="#">Зворотній зв"язок</a>
                            <a className="dropdown-item " href="#">Про нас</a>
                        </div>
                    </li>
                    <li className="nav-item headerLi ">
                        <Link className="nav-link moreItems" to="/prices">Ціни</Link>
                    </li>
                    <li   onClick={() => { fakeLogin(!fakeLoggedIn)}} className="nav-item exitItem  headerLi">
                        <a className="nav-link navLinkFinale moreItems" >
                            { fakeLoggedIn ? 'Вийти' : 'Логін/Регістрація' }</a>
                    </li>
                    <Modal
                        title="Login Form"
                        visible={visible}
                        onOk={showLogin}
                        onCancel={showLogin}
                    >
                    <LoginForm showRegister ={showRegister}/>
                    </Modal>
                    <Modal
                        title="Register Form"
                        visible={visibleRegister}
                        onOk={showRegister}
                        onCancel={showRegister}
                    >
                        <SignupForm/>
                    </Modal>
                </ul>
            </div>
        </nav>

    </header>
);

export default Header;