import React from 'react';
import './Footer.scss';
import logo from '../Assets/logo.png';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer({ meta }) {
    const { t } = useTranslation();

    return (
        <div id={'footer'} dir={t('dir')}>
            <footer className={'footer-background'}>
                <div className={'container'}>
                    <div className={'row '}>
                        <div className={'col-md-3 margin-top-footer margin-right'} dir={t('dir')}>
                            <img src={logo} className={'logo-img'} alt="" />
                            <p className={'footer-desc'}>
                                {meta.content}
                            </p>
                            <div className="social-icons-container">
                                <ul className="social-icons">
                                    <li>
                                        <a className="facebook" href="https://www.facebook.com/397530136960047/" target="_blank">
                                            <i className="icon-facebook" />
                                        </a>
                                    </li>

                                    {/* <li>
                                        <a className="twitter" href="#">
                                            <i className="icon-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="linkedin" href="#">
                                            <i className="icon-linkedin"/>
                                        </a>
                                    </li> */}
                                    <li>
                                        <a className="instagram" href="https://instagram.com/life_golf_car?igshid=1sw4foiskfzkk" target="_blank">
                                            <i className="icon-instagram" />
                                        </a>
                                    </li>
                                </ul>
                                <br />
                            </div>
                        </div>
                        <div className={'col-6 col-md-2 margin-top-footer'}>
                            <h3>{t('nav.about')}</h3>
                            <ul className={'pages-link'} >
                                <li>
                                    <a href={'/services'}>{t('nav.services')}</a>
                                </li>
                                <li>
                                    <a href="/news">{t('nav.news')}</a>
                                </li>
                            </ul>
                        </div>
                        <div className={'col-6 col-md-2 margin-top-footer'}>
                            <h3>{t('nav.products')}</h3>
                            <ul className={'pages-link'} >
                                <li>
                                    <a href="/categories/1/products">{t('categories.golf-carts-and-utilities')}</a>
                                </li>
                                <li>
                                    <a href="/categories/2/products">{t('categories.electric-vehicles')}</a>
                                </li>
                                <li>
                                    <a href="/categories/3/products">{t('categories.electric-cleaning-equipments')}</a>
                                </li>
                                <li>
                                    <a href="/categories/4/products">{t('categories.electric-handling-equipments')}</a>
                                </li>
                                <li>
                                    <a href="/categories/5/products">{t('categories.electronics')}</a>
                                </li>
                            </ul>
                        </div>
                        <div className={'col-6 col-md-2 margin-top-footer'}>
                            <h3>{t('nav.support')}</h3>
                            <ul className={'pages-link'}>
                                <li>
                                    <a href="/terms">{t('nav.terms-and-conditions')}</a>
                                </li>
                                <li>
                                    <a href="/maintenance">{t('nav.maintenance')}</a>
                                </li>
                            </ul>
                        </div>
                        <div className={'col-6 col-md-2 margin-top-footer'}>
                            <h3>{t('utils.be-in-touch')}</h3>
                            <ul className={'pages-link'}>
                                <li>
                                    <a href="/contact">{t('nav.contact-us')}</a>
                                </li>
                                <hr />
                                <li>
                                    <span style={{ color: "white" }}>{t('utils.address')}: </span>
                                    <a href="https://www.google.com/maps/place/Life+Golf/@30.1025934,31.3409571,14z/data=!4m5!3m4!1s0x0:0x766fc31e19db272f!8m2!3d30.102029!4d31.3398301?hl=en" target={'_blank'} rel="noreferrer">{t('utils.head-office')}</a>
                                </li>
                                <li>
                                <span style={{ color: "white" }}>{t('utils.email')}: </span>
                                    <a href="mailto: info@lifegolf.net">info@lifegolf.net</a>
                                </li>
                                <li>
                                    <span style={{ color: "white" }}>{t('utils.phone')}: </span>
                                    <a href="tel:+201091111350">+201091111350, </a>
                                    <a href="tel:+201018680507">+201018680507</a>
                                </li>

                            </ul>
                        </div>
                        <p className="text-center mb-3"> &copy; {t('utils.cont')}<a className={'clever'} href="https://www.clevermarketing-eg.com/" target="_blank"> Clever marketing</a></p>
                    </div>

                </div>

            </footer>
        </div >
    )
}
