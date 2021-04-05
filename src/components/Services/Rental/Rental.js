import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Rental.scss';
import Header from '../../Shared/Header/Header';
import Truncate from 'react-truncate';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const { BASE_URL } = require('../../../config');

export default function Rental() {
    const [service, setService] = useState([]);
    const [list, setList] = useState([]);
    const [list2, setList2] = useState([]);
    const [btn, setBtn] =useState([]);
    const params = useParams();
    const { t } = useTranslation();

    useEffect(() => {
        const service_id = params.id;
        const service_name = params.name;
        const lang = localStorage.getItem('lang');

        axios.get(`${BASE_URL}/services/${service_id}`).then(response => {
            setService(response.data.data)
            console.log(service);
            if (lang === 'ar') {
                var test = response.data.data.points_ar;
                var snd = response.data.data.points_2_ar;

                var dataObject = {
                    name: response.data.data.name_ar,
                    title1: response.data.data.title1_ar,
                    title2: response.data.data.title2_ar,
                    image_url1: response.data.data.image_url_2,
                    image_url2: response.data.data.image_url_3
                }
            } else {
                var test = response.data.data.points;
                var snd = response.data.data.points_2;
                var dataObject = {
                    name: response.data.data.name,
                    title1: response.data.data.title1,
                    title2: response.data.data.title2,
                    image_url1: response.data.data.image_url_2,
                    image_url2: response.data.data.image_url_3
                }
            }

            setService(dataObject);
            const buttonRender = [];

            if (response.data.data.name === 'Spare Parts') {
                buttonRender.push(
                    <Link to="/Electronics" class="btn send-btn" type="submit">Order</Link>
                )
            }
            setBtn(buttonRender);
            const x = JSON.parse(test);
            const listItem = [];
            console.log(x);
            for (let i = 0; i < x.length; i++) {
                console.log(x[i]);
                listItem.push(
                    <li className={'list-item'} key={i}>
                        <div className={'small-circle'} />

                        <Truncate lines={1}>{x[i]}</Truncate>
                    </li>
                );
            }
            setList(listItem);

            var y = JSON.parse(snd);
            var listItem2 = [];
            console.log(y);
            for (let i = 0; i < y.length; i++) {
                console.log(y[i]);
                listItem2.push(
                    <li className={'list-item'} key={i}>
                        <div className={'small-circle'} />

                        <Truncate lines={1}>{y[i]}</Truncate>
                    </li>
                );
            }
            setList2(listItem2);
        })
    }, [])

    return (
        <div id={'rental'}>
            <Header className="header" title={service.name} />

            <div className={'container margin-t'} >
                <div className={'row'}>
                    <div className={'col-md-6'}>
                        <img src={service.image_url1} className={'img-one'} alt="" />
                    </div>
                    <div className={'col-md-6'}>
                        <h1>{service.title1}</h1>
                        <hr />
                        <ul className={'list'}>
                            {list}
                        </ul>
                    </div>
                </div>
                <div className={'row'}>

                    <div className={'col-md-6 order-last order-md-first'}>
                        <h1>{service.title2}</h1>
                        <hr />
                        <ul className={'list'}>
                            {list2}
                        </ul>
                    </div>
                    <div className={'col-md-6'}>
                        <img src={service.image_url2} className={'img-one'} alt="" />
                    </div>
                </div>

            </div>
            <div class="row justify-content-center mt-5">
                {btn}
            </div>
        </div>
    );
}
