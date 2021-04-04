import React from 'react';
import './Nav.scss';
import logo from '../Assets/logo.png';
import {Link} from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Nav() {

    const { t } = useTranslation();

    const changelang = (e) => {
        const language = e.target.lang;
        localStorage.setItem('lang', language);
        window.location.reload();
    }

    return (
        <nav className="navbar navbar-dark navbar-expand-lg " id={'nav'} dir={t('dir')}>
            <div className="container">
                <a className="navbar-brand" href="#">
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
                        <li className="nav-item active">
                            <a className="nav-link active" aria-current="page" href="/">
                                {t('nav.home')}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/About">
                                {t('nav.about')}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Services">
                                {t('nav.services')}
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {t('nav.products')}
                            </a>
                            <ul
                                className="dropdown-menu bg-dark"
                                aria-labelledby="navbarDropdown"
                            >
                                <li>
                                    <Link  className="nav-link" to={'/products'}>
                                        {t('nav.catalouge')}
                                    </Link>
                                </li>
                                <li>
                                    <a  className="nav-link" href={'#'}>
                                        {t('nav.categories')}
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/News">
                                {t('nav.news')}
                            </a>
                        </li>

                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {t('nav.support')}
                            </a>
                            <ul
                                className="dropdown-menu bg-dark"
                                aria-labelledby="navbarDropdown"
                            >
                                <li>
                                    <a className="nav-link" href="/Terms">
                                        {t('nav.terms-and-conditions')}
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="Maintenance">
                                        {t('nav.maintenance')}
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Contact">
                                {t('nav.contact-us')}
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="icon-sphere" /> {t('nav.language')}
                            </a>
                            <ul
                                className="dropdown-menu bg-dark"
                                aria-labelledby="navbarDropdown"
                            >
                                <li>
                                    <a lang="en" onClick={changelang} className="nav-link" href={'#'}>
                                        English
                                    </a>
                                </li>
                                <li>
                                    <a lang="ar" onClick={changelang} className="nav-link" href={'#'}>
                                        العربيه
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
