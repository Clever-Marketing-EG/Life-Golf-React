import React, { useEffect, useState } from 'react';
import './Rental.scss';
import pic from '../../AboutUs/Assets/about-us-3.jpg';
import Header from '../../Shared/Header/Header';
import Truncate from 'react-truncate';
import axios from 'axios';
const { BASE_URL } = require('../../../config');

export default function Rental({ changelang }) {
    const [service, setService] = useState([]);
    useEffect(() => {
        var service_id = localStorage.getItem('service_id');
        var lang = localStorage.getItem('lang');
        axios.get(`${BASE_URL}/services/${service_id}`).then(response => {
            setService(response.data.data);
            if (lang == 'ar') {
                var dataObject = {
                    name: response.data.data.name_ar,
                    title1: response.data.data.title1_ar,
                    title2: response.data.data.title2_ar,
                    points: response.data.data.points_ar,
                    points_2: response.data.data.points_2_ar,
                    image_url1: response.data.data.image_url1,
                    image_url2: response.data.data.image_url2
                }
            } else {
                var dataObject = {
                    name: response.data.data.name,
                    title1: response.data.data.title1,
                    title2: response.data.data.title2,
                    points: response.data.data.points,
                    points_2: response.data.data.points_2,
                    image_url1: response.data.data.image_url1,
                    image_url2: response.data.data.image_url2
                }
            }
            setService(dataObject);

        })
    }, [localStorage.getItem('lang')])
   

    return (
        <div id={'rental'}>
            <Header changelang={changelang} className="header" title={service.name} />

            <div className={'container margin-t'}>
                <div className={'row'}>
                    <div className={'col-md-6'}>
                        <img src={service.image_url1} className={'img-one'} alt="" />
                    </div>
                    <div className={'col-md-6'}>
                        <h1>{service.title1}</h1>
                        <hr />
                        <ul className={'list'}>
                            <li className={'list-item'}>
                                <div className={'small-circle'}></div>

                                <Truncate lines={1}>{service.points}</Truncate>
                            </li>
                            <li className={'list-item'}>
                                <div className={'small-circle'}></div>
                                <Truncate lines={1}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Truncate>
                            </li>
                            <li className={'list-item'}>
                                <div className={'small-circle'}></div>
                                <Truncate lines={1}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Truncate>
                            </li>
                            <li className={'list-item'}>
                                <div className={'small-circle'}></div>
                                <Truncate lines={1}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Truncate>
                            </li>
                            <li className={'list-item'}>
                                <div className={'small-circle'}></div>
                                <Truncate lines={1}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Truncate>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={'row'}>

                    <div className={'col-md-6 order-last order-md-first'}>
                        <h1>{service.title2}</h1>
                        <hr />
                        <ul className={'list'}>
                            <li className={'list-item'}>
                                <div className={'small-circle'}></div>
                                <Truncate lines={1}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Truncate>
                            </li>
                            <li className={'list-item'}>
                                <div className={'small-circle'}></div>
                                <Truncate lines={1}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Truncate>
                            </li>
                            <li className={'list-item'}>
                                <div className={'small-circle'}></div>
                                <Truncate lines={1}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Truncate>
                            </li>
                            <li className={'list-item'}>
                                <div className={'small-circle'}></div>
                                <Truncate lines={1}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Truncate>
                            </li>
                            <li className={'list-item'}>
                                <div className={'small-circle'}></div>
                                <Truncate lines={1}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Truncate>
                            </li>
                        </ul>
                    </div>
                    <div className={'col-md-6'}>
                        <img src={service.image_url2} className={'img-one'} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}