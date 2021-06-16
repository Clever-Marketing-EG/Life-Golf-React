import React, { useEffect, useState } from 'react';
import './Services.scss';
import Header from '../Shared/Header/Header';
import Truncate from 'react-truncate';
import arrow from '../News/Blogs/Assets/arrow.png';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";

const { BASE_URL } = require('../../config');


export default function Services({ changelang }) {

    const {t} = useTranslation();
    const [services, setServices] = useState([]);

    useEffect(() => {

        axios.get(`${BASE_URL}/services`).then(response => {
            const lang = localStorage.getItem('lang');
            let dataArr = [];
            if(lang === 'ar') {
                dataArr = response.data.data.map( item => (
                    {
                        id: item.id,
                        name: item.name_ar,
                        description: item.description_ar,
                        image_url: item.image_url
                    }
                ))
            } else {
                dataArr = response.data.data.map( item => (
                    {
                        id: item.id,
                        name: item.name,
                        description: item.description,
                        image_url: item.image_url
                    }
                ))
            }
            setServices(dataArr);
        });

    }, [])




    return (
        <div id={'services'}>
            <Header className="header" title={t('nav.services')} changelang={changelang} />
            <div className={'container margin-cont'} dir={t('dir')}>
                <div className={'row'}>
                    {
                        services.map( (item, index) => (
                            <Service
                                name={item.name}
                                description={item.description}
                                image_url={item.image_url}
                                id={item.id}
                            />
                        ))
                    }
                </div>
            </div>

        </div>
    );
}


function Service({name, description, id, image_url}) {
    const {t} = useTranslation();
    return (
        <div className={'col-md-4'}>
            <div className={'service-container'}>
                <img src={image_url} className={'service-img'} alt="" />
                <div className={'service-body'}>
                    <h1><Truncate lines={1}>{name}</Truncate></h1>
                    <p><Truncate lines={6}>{description}</Truncate></p>
                    {/* <Link className={'read'} to={'/Service/'+id} dir={'ltr'}>
                        {t('utils.read-more')}
                        <img className={'arrow'} src={arrow} alt="" />
                    </Link> */}
                </div>
            </div>

        </div>
    );
}
