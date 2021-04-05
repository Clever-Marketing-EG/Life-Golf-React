import React, { useState, useEffect } from 'react';
import './Nav.scss';
import logo from '../Assets/logo.png';
import { Link } from "react-router-dom";
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
                <Link className="navbar-brand" to="/">
                    <img src={logo} className={'nav-logo'} alt={''} />
                </Link>
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
                            <Link className="nav-link active" aria-current="page" to="/">
                                {t('nav.home')}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">
                                {t('nav.about')}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Services">
                                {t('nav.services')}
                            </Link>
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
                                            <Link className="nav-link" to={`/categories/${item.id}/products`}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/news">
                                {t('nav.news')}
                            </Link>
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
                                    <Link className="nav-link" to="/terms">
                                        {t('nav.terms-and-conditions')}
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="maintenance">
                                        {t('nav.maintenance')}
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact">
                                {t('nav.contact-us')}
                            </Link>
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
