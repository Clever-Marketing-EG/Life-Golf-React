import React, { useState, useEffect } from 'react';
import './Nav.scss';
import logo from '../Assets/logo.png';
import { Link,  NavLink } from "react-router-dom";
import axios from 'axios';
import { useTranslation } from "react-i18next";

const { BASE_URL } = require('../../../config');

export default function Nav() {

    const { t } = useTranslation();
    const [categories, setCategories] = useState([]);
    const lang = localStorage.getItem('lang');

    const changelang = (e) => {
        const language = e.target.lang;
        localStorage.setItem('lang', language);
        window.location.reload();
    }


    useEffect(() => {
        axios.get(`${BASE_URL}/categories`).then(response => {
            let dataArr;
            if (lang === 'ar') {
                dataArr = response.data.data.map(item => ({
                    id: item.id,
                    name: item.name_ar
                }))
            } else {
                dataArr = response.data.data.map(item => ({
                    id: item.id,
                    name: item.name
                }))
            }
            setCategories(dataArr);
        });
    }, []);

    return (
        <nav className="navbar navbar-dark navbar-expand-lg " id={'nav'} dir={t('dir')}>
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <img src={logo} className={'nav-logo'} alt={''} />
                </NavLink>
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
                            <NavLink exact to="/" className="nav-link" activeClassName={'active'}>
                                {t('nav.home')}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/About" activeClassName={'active'}>
                                {t('nav.about')}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName={'active'} className="nav-link" to="/Services">
                                {t('nav.services')}
                            </NavLink>
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

                                {
                                    categories.map((item, index) => (

                                        <li key={index}>
                                            <NavLink activeClassName={'active'} className="nav-link" to={`/categories/${item.id}/products`}>
                                                {item.name}
                                            </NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName={'active'} className="nav-link" to="/news">
                                {t('nav.news')}
                            </NavLink>
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
                                    <NavLink activeClassName={'active'} className="nav-link" to="/terms">
                                        {t('nav.terms-and-conditions')}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName={'active'} className="nav-link" to="maintenance">
                                        {t('nav.maintenance')}
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName={'active'} className="nav-link" to="/Contact">
                                {t('nav.contact-us')}
                            </NavLink>
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
                                        العربية
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
