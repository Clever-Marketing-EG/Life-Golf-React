import React, {useEffect, useState} from 'react';
import './OurServices.scss';

import cart from '../Assets/car.png';
import GreySquare from '../Assets/grey-square.jpg';
import axios from "axios";
import Loader from "../../Shared/Loader/Loader";
import { useTranslation } from "react-i18next";
const {BASE_URL} = require('../../../config');


export default function OurServices({ meta }) {
    
    const { t } = useTranslation();
    const [services, setServics] = useState([]);

    useEffect(()=> {
        axios.get(`${BASE_URL}/services`)
            .then( (response) => {
                const lang = localStorage.getItem('lang');
                let dataArr;
                if (lang === 'ar') {
                    dataArr = response.data.data.map(item => ({
                        id: item.id,
                        name: item.name_ar,
                    }))
                } else {
                    dataArr = response.data.data.map(item => ({
                        id: item.id,
                        name: item.name,
                    }))
                }
                setServics(dataArr)
            })
    }, [])

    if(services.length === 0 )
        return <Loader />
    else
        return (
            <div id={'our-services'} className={'container'}>
                <h1 className={'home-header'}>{meta.services_header}</h1>
                <hr className={'blue-line'} />
                <div className={'center-container'}>
                    <div className={'image-container'}>
                        <img src={cart} alt={'...'} />
                        <img src={GreySquare} className={'grey-square translate-middle top-50 start-50'} alt={'...'} />
                    </div>
                    <div className={'tags-container justify-content-around flex-wrap'}>
                        <div className={'inner-container d-flex justify-content-around'}>
                            {/* <a className={'tag left top-0 d-flex'} href={`/service/${services[0].id}`}> */}
                            <a className={'tag left top-0 d-flex'} href={`/services`}>

                                {services[0].name}
                                <span className={'ms-3 logo-container'}>
                                <i className="icon-electric-vehicle" />
                            </span>
                            </a>
                            {/* <a className={'tag right top-0 d-flex'} href={`/service/${services[1].id}`}> */}
                            <a className={'tag right top-0 d-flex'} href={`/services`}>
                            <span className={'me-3 logo-container'}>
                                <i className="icon-electric-vehicle" />
                            </span>
                                {services[1].name}
                            </a>
                        </div>
                        <div className={'inner-container d-flex justify-content-around'}>
                            {/* <a className={'tag left top-50 translate-middle-y d-flex'} href={`/service/${services[2].id}`}> */}
                            <a className={'tag left top-50 translate-middle-y d-flex'} href={`/services`}>
                                {services[2].name}
                                <div className={'ms-3 logo-container'}>
                                    <i className="icon-electric-vehicle" />
                                </div>
                            </a>
                            {/* <a className={'tag right top-50 translate-middle-y d-flex'} href={`/service/${services[3].id}`}> */}
                            <a className={'tag right top-50 translate-middle-y d-flex'} href={`/services`}>

                            <span className={'me-3 logo-container'}>
                                <i className="icon-electric-vehicle" />
                            </span>
                                {services[3].name}
                            </a>
                        </div>

                        <div className={'inner-container d-flex justify-content-around'}>
                            {/* <a className={'tag left bottom-0 d-flex'} href={`/service/${services[4].id}`}> */}
                            <a className={'tag left bottom-0 d-flex'} href={`/services`}>

                                {services[4].name}
                                <span className={'ms-3 logo-container'}>
                                <i className="icon-electric-vehicle" />
                            </span>
                            </a>
                            {/* <a className={'tag right bottom-0 d-flex'} href={`/service/${services[5].id}`}> */}
                            <a className={'tag right bottom-0 d-flex'} href={`/services`}>
                            <span className={'me-3 logo-container'}>
                                <i className="icon-electric-vehicle" />
                            </span>
                                {services[5].name}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
}
