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
                        <li className="nav-item dropdown">
                            <Link to= "" className="dropbtn">Cosa vedere</Link>
                            <div className="dropdown-content">
                                <Link to="/kyoto">Kyoto</Link>
                                <Link to="/tokyo">Tokyo</Link>
                                <Link to="/nara">Nara</Link>	
                                <Link to="/osaka">Osaka</Link>	
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
                        <li className='nav-item'>
                            <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
    
                </div>
            </nav>


        </Fragment>
    )
}

export default Navbar;
