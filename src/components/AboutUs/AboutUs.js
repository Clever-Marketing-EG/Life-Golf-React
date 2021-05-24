import React, { useEffect, useState } from 'react';
import './AboutUs.scss';

import pic1 from './Assets/mask_group_10.png';
import pic2 from './Assets/mask_group_11.png';
import pic3 from './Assets/mask_group_12.png';
import pic4 from './Assets/mask_group_13.png';
import Certifiactes from './Certificates/Certificates';
import Videos from './Videos/Videos';
import Gallery from './Gallery/Gallery';
import Header from '../Shared/Header/Header';
import axios from "axios";
import { useTranslation } from "react-i18next";
import vision from './Assets/vision.jpeg';
const { BASE_URL } = require('../../config');

export default function AboutUs({ meta }) {

    const { t } = useTranslation();
    const [certificates, setCertificates] = useState([]);
    const [videos, setVideos] = useState([]);
    const [galleries, setGalleries] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/certificates`)
            .then((response) => {
                setCertificates(response.data.data);
            })

        axios.get(`${BASE_URL}/videos`)
            .then((response) => {
                setVideos(response.data.data);
            })

        axios.get(`${BASE_URL}/gallery`)
            .then((response) => {
                setGalleries(response.data.data);
            })
    }, [])

    return (
        <div id={'about'} dir={t('dir')}>
            <Header className="header" title={t('nav.about')} />
            <div className={'container d-flex flex-wrap justify-content-around xs'} >
                <div className={'d-flex left-container'}>
                    <div className={'d-flex flex-column pic-col justify-content-between me-2'}>
                        <img src={meta.image_1} className={'pic top mb-2'} alt="" />
                        <img src={meta.image_2} className={'pic bottom'} alt="" />
                    </div>
                    <div className={'d-flex flex-column pic-col justify-content-between mt-5'}>
                        <img src={meta.image_3} className={'pic top mb-2'} alt="" />
                        <img src={meta.image_4} className={'pic bottom'} alt="" />
                    </div>

                </div>
                <div className={'right-container'}>
                    <h1 className={'about-title'}>{meta.header}</h1>
                    <hr />
                    <p className={'abt-p'}>{meta.content}</p>
                    <div className={'row'}>
                        <div className={'col-3 col-md-3'}>
                            <img src={pic1} alt="" />
                            <h1 className={'first-h'}>{meta.number_of_clients}</h1>
                            <p className={'first-p'}>{meta.name_of_clients}</p>
                        </div>
                        <div className={'col-3 col-md-3'}>
                            <img src={pic2} alt="" />
                            <h1 className={'first-h'}>{meta.years_of_experience}</h1>
                            <p className={'first-p'}>{meta.name_of_experience}</p>
                        </div>
                        <div className={'col-3 col-md-3'}>
                            <img src={pic3} alt="" />
                            <h1 className={'first-h'}>{meta.number_of_engineers}</h1>
                            <p className={'first-p'}>{meta.name_of_engineers}</p>
                        </div>
                        <div className={'col-3 col-md-3'}>
                            <img src={pic4} alt="" />
                            <h1 className={'first'}>{meta.number_of_sold_vehicles}</h1>
                            <p className={'first-p'}>{meta.name_of_sold_vehicles}</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className={'container marg'} dir={t('dir')}>
                <div className={'row justify-content-around height'}>
                    <div className={'col-md-4 mb-3'}>
                        <ul className="nav nav-pills mb-3 snd-ul padding-0" id="pills-tab" role="tablist">
                            <li className="nav-item snd-list" role="presentation">
                                <button className="nav-link active list-btn" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">{t('utils.mission')}</button>
                            </li>
                            <li className="nav-item snd-list" role="presentation">
                                <button className="nav-link list-btn" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">{t('utils.vision')}</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active content" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                {t('utils.mission-content')}
                            </div>
                            <div className="tab-pane fade content" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                {t('utils.vision-content')}
                            </div>
                        </div>
                    </div>
                    <div className={'col-md-5 img-container '}>
                        <img src={vision} alt={'..'} className={'mission-img'} />
                    </div>
                </div>
            </div>
            <div className={'container'}>
                <Certifiactes
                    meta={meta}
                    certificates={certificates}
                />
                <Videos
                    meta={meta}
                    videos={videos}
                />
                <Gallery
                    meta={meta}
                    galleries={galleries}
                />



            </div>

        </div >
    )
}
