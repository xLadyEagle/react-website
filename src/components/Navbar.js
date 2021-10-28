import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {
        setClick(!click);
    };

    const closeMobileMenu = () => {
        setClick(false);
    };

   
    return (
        <Fragment>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        JAPAN <i className="fas fa-spa"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="dropdown">
                            <button className="dropbtn">Cosa vedere
                            <i class="fa fa-caret-down"></i></button>
                            <div className="dropdown-content">
                                <Link to="/kyoto" onClick={closeMobileMenu}>Kyoto</Link>
                                <Link to="/nara" onClick={closeMobileMenu}>Nara</Link>
                                <Link to="/osaka" onClick={closeMobileMenu}>Osaka</Link>
                                <Link to="/tokyo" onClick={closeMobileMenu}>Tokyo</Link> 	
                            </div>
                        </li>
                        <li className='nav-item'>
                            <Link to="/primavera" className="nav-links" onClick={closeMobileMenu}>
                                Primavera in Giappone
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/cucina" className="nav-links" onClick={closeMobileMenu}>
                                Cucina giapponese
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/curiosità" className="nav-links" onClick={closeMobileMenu}>
                                Curiosità
                            </Link>
                        </li>
                    </ul>
    
                </div>
            </nav>


        </Fragment>
    )
}

export default Navbar;
