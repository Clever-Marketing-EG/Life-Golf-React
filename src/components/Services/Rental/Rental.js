import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import './Rental.scss';
import Header from '../../Shared/Header/Header';
import Truncate from 'react-truncate';
import axios from 'axios';
const { BASE_URL } = require('../../../config');

export default function Rental() {
    const [service, setService] = useState([]);
    const [list, setList] = useState([]);
    const [list2, setList2] = useState([]);
    const params = useParams();

    useEffect(() => {
        const service_id = params.id;
        const lang = localStorage.getItem('lang');

        axios.get(`${BASE_URL}/services/${service_id}`).then(response => {
            setService(response.data.data)
            if (lang === 'ar') {
                var test = response.data.data.points_ar;
                var snd = response.data.data.points_2_ar;

                var dataObject = {
                    name: response.data.data.name_ar,
                    title1: response.data.data.title1_ar,
                    title2: response.data.data.title2_ar,
                    image_url1: response.data.data.image_url1,
                    image_url2: response.data.data.image_url2
                }
            } else {
                var test = response.data.data.points;
                var snd = response.data.data.points_2;
                var dataObject = {
                    name: response.data.data.name,
                    title1: response.data.data.title1,
                    title2: response.data.data.title2,
                    image_url1: response.data.data.image_url1,
                    image_url2: response.data.data.image_url2
                }
            }

            setService(dataObject);

            const x = JSON.parse(test);
            const listItem = [];
            console.log(x);
            for (let i = 0; i < x.length; i++) {
                console.log(x[i]);
                listItem.push(
                    <li className={'list-item'} key={i}>
                        <div className={'small-circle'}/>

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
                        <div className={'small-circle'}/>

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

            <div className={'container margin-t'}>
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
        </div>
    );
}
