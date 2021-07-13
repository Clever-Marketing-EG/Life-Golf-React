import React, { useEffect, useState, useRef } from 'react';
import './Lavida.scss';
import axios from "axios";
import { useTranslation } from "react-i18next";
import Nav from './Nav/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import logo from './Assets/logo.png';
import img from './Assets/home.jpg';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const { BASE_URL } = require('../../config');

export default function Lavida({ meta }) {


    const slideImages = [
        logo,
        logo,
        logo
    ];


    const carouselRef = useRef(null);
    const carouselRef1 = useRef(null);
    const totalPages = Math.ceil(2 / 1)
    let resetTimeout;

    const onNext = ({ index }) => {
        clearTimeout(resetTimeout)
        if (index + 1 === totalPages) {
            resetTimeout = setTimeout(() => {
                carouselRef.current.goTo(0)
                // carouselRef1.current.goTo(0)
            }, 3500) // same time
        }
    }


    const { t } = useTranslation();

    const [scrollChange, setScrollChange] = useState(0);
    const ShowUp = () => {
        if (window.scrollY >= 800) {
            setScrollChange(1);
        }
    };

    window.addEventListener('scroll', ShowUp);

    return (
        <div id={'lavida'} dir={t('dir')}>
            <Nav />
            <div className={'main container-fluid'} >

                {/* Main */}
                <div id={'home'} className={'main-container mb-4 position-relative'}>
                    <img className={'img-container'} src={img} />
                </div>

                {/* Services */}
                <div id={'service'} className={'row justify-content-center'}>
                    <div className={'mb-5'} />
                    <div className={'col-md-3 service-container justify-content-center'}>
                        <img className={'img-service mt-4 mb-4'} src={logo} />
                        <h1>Best price guarantee</h1>
                        <p>You always know your carrier, all carriers are carefully selected</p>
                    </div>
                    <div className={'col-md-3 service-container justify-content-center'}>
                        <img className={'img-service mt-4 mb-4'} src={logo} />
                        <h1>Best price guarantee</h1>
                        <p>You always know your carrier, all carriers are carefully selected</p>
                    </div>
                    <div className={'col-md-3 service-container justify-content-center'}>
                        <img className={'img-service mt-4 mb-4'} src={logo} />
                        <h1>Best price guarantee</h1>
                        <p>You always know your carrier, all carriers are carefully selected</p>
                    </div>
                    <div className={'col-md-3 service-container justify-content-center'}>
                        <img className={'img-service mt-4 mb-4'} src={logo} />
                        <h1>Best price guarantee</h1>
                        <p>You always know your carrier, all carriers are carefully selected</p>
                    </div>
                </div>


                {/* About Us */}
                <div id={'aboutus'} className={'about-us-container'}>
                    <div className={'mb-5'} />
                    <div style={{ backgroundImage: "linear-gradient(100deg, #71c96cdc, #379676dc , #4089e2de ), url( " + img + ")" }} className={'row img-container position-relative'}>
                        <div className={'col-md-7 d-flex justify-content-center'}>
                            <div className={'frame'}>
                                <iframe width="660" height="415" src={`https://www.youtube.com/embed/DDpXdljhstg?controls=0&autoplay=${scrollChange}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className={'col-md-5'}>
                            <div className={'content'}>
                                <h1>You always know</h1>
                                <p>You always know your carrier, all carriers are carefully selected</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Products */}
                <div id={'product'} className={'product'}>
                    <div className={'container '}>
                        <div className={'row'}>
                            <div className={'col-md-6'}>
                                <div className="slide-container">
                                    <Slide>
                                        <div className={'carousel-img'}>
                                            <img src={logo} />
                                        </div>
                                        <div className={'carousel-img'}>
                                            <img src={logo} />
                                        </div>
                                        <div className={'carousel-img'}>
                                            <img src={logo} />
                                        </div>
                                    </Slide>
                                </div>
                                <div className={'content'}>

                                    <div className={''}>
                                        <ul className="nav nav-pills mb-3 snd-ul" id="pills-tab" role="tablist">
                                            <li className="nav-item snd-list" role="presentation">
                                                <button className="nav-link active list-btn" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">{t('utils.desc')}</button>
                                            </li>
                                            <li className="nav-item snd-list" role="presentation">
                                                <button className="nav-link list-btn" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">{t('utils.highlight')}</button>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="pills-tabContent">
                                            <div className="tab-pane fade show active content" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                                <p>In terms of power, e-Lavida is equipped with a permanent magnet synchronous motor with maximum power of 100kW (134hp), maximum torque of 290Nm, and an acceleration time of 3.4s from 0-50Km/h, but the top speed is only 150km/h. The e-Lavida is equipped with a ternary lithium battery, its battery capacity is 38.1kWh, which can support multiple charging modes such as DC fast charging, AC slow charging, and portable charging. It takes 5.5 hours to fully charge in the slow charge mode, and 40 mins charge from 0-80% in the fast charge mode. It consumes 13.2kWh of energy in 100-kilometer comprehensive condition. In the interior design, e-Lavida and the Lavida fuel version are almost identical in terms of overall layout, materials, configuration, and room. Specifically, e-Lavida uses a smaller LCD screen, most of which are manually controlled, and the dashboard style remains old-fashioned. e-Lavida features 6 airbags, AEB brake assist system, intelligent collision safety system, electronic handbrake, electronic parking, MIB in-vehicle infotainment system, intelligent recognition collision strength, Apple CarPlay and Baidu CarLife mobile phone interconnection system.</p>

                                            </div>
                                            <div className="tab-pane fade content" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                                <p>
                                                    In the interior design, e-Lavida and the Lavida fuel version are almost identical in terms of overall layout, materials, configuration, and room. Specifically, e-Lavida uses a smaller LCD screen, most of which are manually controlled, and the dashboard style remains old-fashioned. e-Lavida features 6 airbags, AEB brake assist system, intelligent collision safety system, electronic handbrake, electronic parking, MIB in-vehicle infotainment system, intelligent recognition collision strength, Apple CarPlay and Baidu CarLife mobile phone interconnection system.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <ul>
                                        <li>
                                            {/* <img src={logo}/> */}
                                            <FontAwesomeIcon className={'logo'} icon={faInstagram} />
                                            asamm
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className={'col-md-6'}>
                                <div className="slide-container">
                                    <Slide>
                                        <div className={'carousel-img'}>
                                            <img src={logo} />
                                        </div>
                                        <div className={'carousel-img'}>
                                            <img src={logo} />
                                        </div>
                                        <div className={'carousel-img'}>
                                            <img src={logo} />
                                        </div>
                                    </Slide>
                                </div>
                                <div className={'content'}>
                                    <div className={''}>
                                        <ul className="nav nav-pills mb-3 snd-ul" id="pills-tab" role="tablist">
                                            <li className="nav-item snd-list" role="presentation">
                                                <button className="nav-link active list-btn" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home1" type="button" role="tab" aria-controls="pills-home" aria-selected="true">{t('utils.desc')}</button>
                                            </li>
                                            <li className="nav-item snd-list" role="presentation">
                                                <button className="nav-link list-btn" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile1" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">{t('utils.highlight')}</button>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="pills-tabContent">
                                            <div className="tab-pane fade show active content" id="pills-home1" role="tabpanel" aria-labelledby="pills-home-tab">
                                                <p>In terms of power, e-Lavida is equipped with a permanent magnet synchronous motor with maximum power of 100kW (134hp), maximum torque of 290Nm, and an acceleration time of 3.4s from 0-50Km/h, but the top speed is only 150km/h. The e-Lavida is equipped with a ternary lithium battery, its battery capacity is 38.1kWh, which can support multiple charging modes such as DC fast charging, AC slow charging, and portable charging. It takes 5.5 hours to fully charge in the slow charge mode, and 40 mins charge from 0-80% in the fast charge mode. It consumes 13.2kWh of energy in 100-kilometer comprehensive condition. In the interior design, e-Lavida and the Lavida fuel version are almost identical in terms of overall layout, materials, configuration, and room. Specifically, e-Lavida uses a smaller LCD screen, most of which are manually controlled, and the dashboard style remains old-fashioned. e-Lavida features 6 airbags, AEB brake assist system, intelligent collision safety system, electronic handbrake, electronic parking, MIB in-vehicle infotainment system, intelligent recognition collision strength, Apple CarPlay and Baidu CarLife mobile phone interconnection system.</p>

                                            </div>
                                            <div className="tab-pane fade content" id="pills-profile1" role="tabpanel" aria-labelledby="pills-profile-tab">
                                                <p>
                                                    In the interior design, e-Lavida and the Lavida fuel version are almost identical in terms of overall layout, materials, configuration, and room. Specifically, e-Lavida uses a smaller LCD screen, most of which are manually controlled, and the dashboard style remains old-fashioned. e-Lavida features 6 airbags, AEB brake assist system, intelligent collision safety system, electronic handbrake, electronic parking, MIB in-vehicle infotainment system, intelligent recognition collision strength, Apple CarPlay and Baidu CarLife mobile phone interconnection system.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <ul>
                                        <li>
                                            {/* <img src={logo}/> */}
                                            <FontAwesomeIcon className={'logo'} icon={faInstagram} />
                                            asamm
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                {/* Foteer */}
                <div id={'contact'} className={'footer'}>
                    <div classNam={'container'}>
                        <div className={'row'}>
                            <div className={'col-md-4 mt-5 d-flex justify-content-center'}>
                                <div className={'main-footer'}>
                                    <img className={'footer-logo'} src={logo} />
                                    <div className="social-icons-container mt-5">
                                        <ul className="social-icons d-flex ">
                                            <li>
                                                <a href="https://facebook.com/Halite-Egypt-107590011497121/posts/?ref=page_internal&mt_nav=0" target="_blank">
                                                    {/* <i className="icon-facebook" /> */}
                                                    <FontAwesomeIcon icon={faFacebook} />

                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com/company/halite-egypt/about/" target="_blank">
                                                    {/* <i className="icon-instagram" /> */}
                                                    <FontAwesomeIcon icon={faInstagram} />

                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com/company/halite-egypt/about/" target="_blank">
                                                    {/* <i className="icon-linkedin" /> */}
                                                    <FontAwesomeIcon icon={faLinkedin} />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com/company/halite-egypt/about/" target="_blank">
                                                    <FontAwesomeIcon icon={faYoutube} />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className={'col-md-4 mt-5 contact-us d-flex justify-content-center'}>
                                <div>
                                    <h1>{t('nav.contact-us')}</h1>
                                    <hr />
                                    <p>Phone: 0123456789</p>
                                    <p>Email: mina@gmail.com</p>
                                    <p>Addres: 8asji uhasd u</p>

                                </div>
                            </div>

                            <div className={'col-md-4 mb-4 mt-5 d-flex justify-content-center'}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.725752370821!2d31.337672750781348!3d30.102039722715247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581592d9955c01%3A0x766fc31e19db272f!2sLife%20Golf!5e0!3m2!1sen!2seg!4v1626016408032!5m2!1sen!2seg" allowfullscreen="" loading="lazy"></iframe>
                            </div>
                        </div>
                        <div className={'container'}>
                            <hr />
                            <p className="text-center mb-3"> &copy; {t('utils.cont')}<a className={'clever'} href="https://www.clevermarketing-eg.com/" target="_blank"> Clever marketing</a></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
