import React from 'react';
import './Footer.scss';
import logo from './Assets/olio-02.a0d26e46-1.png';
import { useTranslation } from "react-i18next";
import {Link} from "react-router-dom";

export default function Footer({meta}) {
    const {t} = useTranslation();

    return (
        <div id={'footer'} dir={t('dir')}>
            <footer className={'footer-background'}>
                <div className={'container'}>
                    <div className={'row '}>
                        <div className={'col-md-3 margin-top-footer margin-right'}>
                            <img src={logo} className={'logo-img'} alt="" />
                            <p className={'footer-desc'}>
                                {meta.content}
                            </p>
                            <div className="social-icons-container">
                                <ul className="social-icons">
                                    <li>
                                        <a className="facebook" href="#">
                                            <i className="icon-facebook"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="twitter" href="#">
                                            <i className="icon-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="linkedin" href="#">
                                            <i className="icon-linkedin"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="instagram" href="#">
                                            <i className="icon-instagram" />
                                        </a>
                                    </li>
                                </ul>
                                <br />
                            </div>
                        </div>
                        <div className={'col-6 col-md-2 margin-top-footer'}>
                            <h3>{t('nav.about')}</h3>
                            <ul className={'pages-link'}>
                                <li>
                                    <a href={'/services'}>{t('nav.services')}</a>
                                </li>
                                <li>
                                    <a href={'/products'}>{t('nav.categories')}</a>
                                </li>
                                <li>
                                    <a href="/news">{t('nav.news')}</a>
                                </li>
                            </ul>
                        </div>
                        <div className={'col-6 col-md-2 margin-top-footer'}>
                            <h3>{t('nav.products')}</h3>
                            <ul className={'pages-link'}>
                                <li>
                                    <a href="#">Golf cart & utilities</a>
                                </li>
                                <li>
                                    <a href="#">Electric vehicles</a>
                                </li>
                                <li>
                                    <a href="#">Electric cleaning equipment</a>
                                </li>
                                <li>
                                    <a href="#">Electric handling equipment</a>
                                </li>
                            </ul>
                        </div>
                        <div className={'col-6 col-md-2 margin-top-footer'}>
                            <h3>Support</h3>
                            <ul className={'pages-link'}>
                                <li>
                                    <a href="#">Terms</a>
                                </li>
                                <li>
                                    <a href="#">Maintainance</a>
                                </li>
                                <li>
                                    <a href="#">Prochure</a>
                                </li>

                            </ul>
                        </div>
                        <div className={'col-6 col-md-2 margin-top-footer'}>
                            <h3>Contact</h3>
                            <ul className={'pages-link'}>
                                <li>
                                    <a href="#">Contact Us</a>
                                </li>

                            </ul>
                        </div>
                        <p className="text-center mb-3"> &copy; 2021 All Rights Reserved. Life Golf Car. | Designed by <a className={'clever'} href="https://www.clevermarketing-eg.com/"> Clever marketing</a></p>
                    </div>

                </div>

            </footer>
        </div >
    )
}
