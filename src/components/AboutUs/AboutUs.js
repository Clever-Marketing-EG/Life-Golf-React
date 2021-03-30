import React, {useEffect, useState} from 'react';
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

const {BASE_URL} = require('../../config');

export default function AboutUs({meta}) {

    const [certificates, setCertificates] = useState([]);
    const [videos, setVideos] = useState([]);
    const [galleries, setGalleries] = useState([]);

    useEffect( () => {
        axios.get(`${BASE_URL}/certificates`)
            .then( (response) => {
                setCertificates(response.data.data);
            })

        axios.get(`${BASE_URL}/videos`)
            .then( (response) => {
                setVideos(response.data.data);
            })

        axios.get(`${BASE_URL}/gallery`)
            .then( (response) => {
                setGalleries(response.data.date);
            })
    }, [])

    return (
        <div id={'about'}>
            <Header className="header" title={'About Us'} />
            <div className={'container d-flex flex-wrap justify-content-around xs'}>
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
                    <h1 className={'about-title'}>Get to know us better</h1>
                    <hr />
                    <p className={'abt-p'}>{meta.content}</p>
                    <div className={'row'}>
                        <div className={'col-3 col-md-3'}>
                            <img src={pic1} alt="" />
                            <h1 className={'first-h'}>{meta.number_of_clients}</h1>
                            <p className={'first-p'}>Happy clients</p>
                        </div>
                        <div className={'col-3 col-md-3'}>
                            <img src={pic2} alt="" />
                            <h1 className={'first-h'}>{meta.years_of_experience}</h1>
                            <p className={'first-p'}>Years of Experience</p>
                        </div>
                        <div className={'col-3 col-md-3'}>
                            <img src={pic3} alt="" />
                            <h1 className={'first-h'}>{meta.number_of_engineers}</h1>
                            <p className={'first-p'}>Engineers</p>
                        </div>
                        <div className={'col-3 col-md-3'}>
                            <img src={pic4} alt="" />
                            <h1 className={'first'}>{meta.number_of_sold_vehicles}</h1>
                            <p className={'first-p'}>Vehicle sold</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className={'container'}>
                <Certifiactes
                    certificates={certificates}
                />
                <Videos
                    videos={videos}
                />
                <Gallery
                    galleries={galleries}
                />
            </div>

        </div >
    )
}
