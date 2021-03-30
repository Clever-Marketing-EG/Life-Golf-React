import React, { useEffect, useState } from 'react';
import './Services.scss';
import Header from '../Shared/Header/Header';
import pic from '../AboutUs/Assets/about-us-3.jpg';
import Truncate from 'react-truncate';
import arrow from '../News/Blogs/Assets/arrow.png';
import axios from 'axios';
import { Link } from 'react-router-dom';
const { BASE_URL } = require('../../config');


export default function Services({ changelang }) {
    const [services, setServices] = useState([]);
    useEffect(() => {
        var lang = localStorage.getItem('lang');
        axios.get(`${BASE_URL}/services`).then(response => {
            setServices(response.data.data);

        });
    }, [localStorage.getItem('lang')])
    var items = services.map(item => {
        var lang = localStorage.getItem('lang');
        if (lang == 'ar') {
            return (
                <div className={'col-md-4'}>
                    <div className={'service-container'}>
                        <img src={item.image_url} className={'service-img'} alt="" />
                        <div className={'service-body'}>
                            <h1><Truncate lines={1}>{item.name_ar}</Truncate></h1>
                            <p><Truncate lines={3}>{item.description_ar}</Truncate></p>
                            <Link className={'read'} to="/Service"
                                onClick={() => {
                                    localStorage.setItem("service_id", item.id);
                                }} >
                                Read More
                        <img className={'arrow'} src={arrow} alt="" />
                            </Link>
                        </div>
                    </div>

                </div>
            );
        }
        else{
            return (
                <div className={'col-md-4'}>
                    <div className={'service-container'}>
                        <img src={item.image_url} className={'service-img'} alt="" />
                        <div className={'service-body'}>
                            <h1><Truncate lines={1}>{item.name}</Truncate></h1>
                            <p><Truncate lines={3}>{item.description}</Truncate></p>
                            <Link className={'read'} to="/Service"
                                onClick={() => {
                                    localStorage.setItem("service_id", item.id);
                                }} >
                                Read More
                        <img className={'arrow'} src={arrow} alt="" />
                            </Link>
                        </div>
                    </div>

                </div>
            );
        }
    })
    return (
        <div id={'services'}>
            <Header className="header" title={'Services'} changelang={changelang} />
            <div className={'container margin-cont'}>
                <div className={'row'}>
                    {items}
                </div>
            </div>

        </div>
    );
}