import React, { useEffect, useState, useRef } from 'react';
import './Lavida.scss';
import axios from "axios";
import { useTranslation } from "react-i18next";
import Nav from './Nav/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import logo from './Assets/logo.png';
import logoFooter from './Assets/logo-footer.png';

import img from './Assets/home.jpg';


import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const { BASE_URL } = require('../../config');

export default function Lavida({ meta }) {

    const { t } = useTranslation();

    const [scrollChange, setScrollChange] = useState(0);
    const ShowUp = () => {
        if (window.scrollY >= 700) {
            setScrollChange(1);
        }
    };
    const [services, setServices] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/evservice`).then(response => {
            const lang = localStorage.getItem('lang');
            let dataArr = [];
            if (lang === 'ar') {
                dataArr = response.data.data.map(item => (
                    {
                        id: item.id,
                        title: item.title_ar,
                        content: item.content_ar,
                        image_url: item.image_url
                    }
                ))
            } else {
                dataArr = response.data.data.map(item => (
                    {
                        id: item.id,
                        title: item.title,
                        content: item.content,
                        image_url: item.image_url
                    }
                ))
            }
            setServices(dataArr);
        });
        axios.get(`${BASE_URL}/evproducts`).then(response => {
            const lang = localStorage.getItem('lang');
            setProducts(response.data.data);
            console.log(response.data.data);
            let dataArr = [];
            if (lang === 'ar') {
                dataArr = response.data.data.map(item => (
                    {
                        id: item.id,
                        name: item.name_ar,
                        description: item.description_ar,
                        highlights: item.highlights_ar,
                        points: item.points,
                        images: item.images
                    }
                ))
                setProducts(dataArr);

            } else {
                dataArr = response.data.data.map(item => (
                    {
                        id: item.id,
                        name: item.name,
                        description: item.description,
                        highlights: item.highlights,
                        points: item.points,
                        images: item.images
                    }
                ))
                setProducts(dataArr);
            }
            console.log(products);
        });


    }, [])

    window.addEventListener('scroll', ShowUp);
    return (
        <div id={'lavida'} dir={t('dir')}>
            <Nav />
            <div className={'main container-fluid'} >

                {/* Main */}
                <div id={'home'} className={'main-container mb-4 position-relative'}>
                    <img className={'img-container'} src={meta?.intro_image} />
                </div>

                {/* Services */}
                <div id={'service'} className={'row justify-content-center'}>
                    <div className={'mb-5'} />
                    {services?.slice(0, 10).map((item, index) =>
                        <div className={'col-md-3 service-container justify-content-center'}>
                            <img className={'img-service mt-4 mb-4'} src={item.image_url} />
                            <h1>{item.title}</h1>
                            <p>{item.content}</p>
                        </div>
                    )}
                </div>

                {/* About Us */}
                <div id={'aboutus'} className={'about-us-container'}>
                    <div className={'mb-5'} />
                    <div style={{ backgroundImage: "linear-gradient(100deg, #71c96cdc, #379676dc , #4089e2de ), url( " + meta?.about_image + ")" }} className={'row img-container position-relative'}>
                        <div className={'col-md-7 d-flex justify-content-center'}>
                            <div className={'frame'}>
                                <iframe src={`${meta?.about_video}?controls=0&autoplay=${scrollChange}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className={'col-md-5'}>
                            <div className={'content'}>
                                <h1>{meta?.about_title}</h1>
                                <p>{meta?.about_content}</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Products */}
                <div id={'product'} className={'product'}>
                    <div className={'container'}>
                        <div className={'row'}>
                            {products.map((item, index) => (
                                <div className={'col-md-6'}>
                                    <div className="slide-container">
                                        <Slide>
                                            {item.images.map((item, index) => (
                                                <div className={'carousel-img'}>
                                                    <img className={'img'} src={item} />
                                                </div>
                                            ))}
                                        </Slide>
                                    </div>
                                    <div className={'content'}>

                                        <div className={''}>
                                            <ul className="nav nav-pills mb-3 snd-ul" id="pills-tab" role="tablist">
                                                <li className="nav-item snd-list" role="presentation">
                                                    <button className="nav-link active list-btn" id="pills-home-tab" data-bs-toggle="pill" data-bs-target={`#pills-desc${index}`} type="button" role="tab" aria-controls="pills-home" aria-selected="true">{t('utils.desc')}</button>
                                                </li>
                                                <li className="nav-item snd-list" role="presentation">
                                                    <button className="nav-link list-btn" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target={`#pills-high${index}`} type="button" role="tab" aria-controls="pills-profile" aria-selected="false">{t('utils.highlight')}</button>
                                                </li>
                                            </ul>
                                            <div className="tab-content" id="pills-tabContent">
                                                <div className="tab-pane fade show active content" id={`pills-desc${index}`} role="tabpanel" aria-labelledby="pills-home-tab">
                                                    <p>{item.description}</p>

                                                </div>
                                                <div className="tab-pane fade content" id={`pills-high${index}`} role="tabpanel" aria-labelledby="pills-profile-tab">
                                                    <p>
                                                        {item.highlights}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <ul>
                                            {item.points.map((item, index) => (
                                                <li>
                                                    {/* <FontAwesomeIcon className={'logo'} icon={faAngellist} /> */}
                                                    <i class="fas fa-dot-circle"></i>
                                                    {/* <i class="fas fa-circle"></i>    */}
                                                    {item}
                                                </li>
                                            ))}

                                        </ul>
                                    </div>
                                </div>

                            ))}

                        </div>
                    </div>
                </div>


                {/* Foteer */}
                <div id={'contact'} className={'footer'}>
                    <div classNam={'container'}>
                        <div className={'row'}>
                            <div className={'col-md-4 mt-5 d-flex justify-content-center'}>
                                <div className={'main-footer'}>
                                    <img className={'footer-logo'} src={logoFooter} />
                                    <div className="social-icons-container mt-5">
                                        <ul className="social-icons d-flex ">
                                            <li>
                                                <a href="https://www.facebook.com/evehicleeg/" target="_blank">
                                                    {/* <i className="icon-facebook" /> */}
                                                    <FontAwesomeIcon icon={faFacebook} />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com/evehicleeg/?utm_medium=copy_link" target="_blank">
                                                    <FontAwesomeIcon icon={faInstagram} />
                                                </a>
                                            </li>
                                            {/* <li>
                                                <a href="https://www.linkedin.com/company/halite-egypt/about/" target="_blank">
                                                    <FontAwesomeIcon icon={faLinkedin} />
                                                </a>
                                            </li> */}
                                            <li>
                                                <a href="https://www.youtube.com/channel/UCU4t3RFeI4ZTYcCkVE0oqpg" target="_blank">
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
                                    <p>{meta?.contact_phone}</p>
                                    <p>{meta?.contact_email}</p>
                                    <p>{meta?.contact_address}</p>

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
