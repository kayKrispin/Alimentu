import React from 'react';

const Header = ( {
} ) => (
    <header className='headerContainer'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div   className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul style={{width:'100%'}} className="navbar-nav">
                    <li className="nav-item active ">
                        <a className="nav-link firstActive" href="#"> Головна<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Про нас</a>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle lastItem" href="#" id="navbarDropdownMenuLink"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Більше
                        </a>
                        <div style={{backgroundColor:'  #345a80'}} className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Логін</a>
                            <a className="dropdown-item" href="#">Регістрація</a>
                            <a className="dropdown-item" href="#">Контакти</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Ціни</a>
                    </li>
                    <li  className="nav-item exitItem ">
                        <a className="nav-link" href="#">Логін</a>
                    </li>
                </ul>
            </div>
        </nav>

    </header>
);

export default Header;