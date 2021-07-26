import React, { useState } from 'react';
import './Nav.scss';
import logo from '../Assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export default function Nav() {

    const { t } = useTranslation();

    const changelang = (e) => {
        const language = e.target.lang;
        localStorage.setItem('lang', language);
        window.location.reload();
    }

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 50 || window.innerWidth <= 1000) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);


    return (
        <div id={'nav-bar'}>
            <nav style={{ zIndex: 15 }} className={`${colorChange ? 'nav-color' : 'nav-Trans'} fixed-top navbar navbar-dark navbar-expand-lg`} >
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={logo} className={'nav-logo'} alt={''} />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="#home" className="nav-a" activeClassName={'active'}>
                                    {t('nav.home')}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a" href="#aboutus" activeClassName={'active'}>
                                    {t('nav.about')}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a" href="#product" activeClassName={'active'}>
                                    {t('nav.products')}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a" href="#service" activeClassName={'active'}>
                                    {t('nav.services')}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a" href="#contact" activeClassName={'active'}>
                                    {t('nav.contact-us')}
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-a dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    activeClassName={'active'}
                                >
                                    <i className="icon-sphere" />
                                </Link>
                                <ul
                                    dir={t('dir')}
                                    className="dropdown-menu"
                                    aria-labelledby="navbarDropdown"
                                >
                                    <li>
                                        <Link lang="en" onClick={changelang} className="nav-a" href={'#'}>
                                            {t('nav.en')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link lang="ar" onClick={changelang} className="nav-a" href={'#'}>
                                            {t('nav.ar')}
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}