import React, {useEffect, useState} from 'react';

import Carousel, { consts } from 'react-elastic-carousel';
import './Similar.scss';
import arrow1 from '../../Home/Assets/arrow1.png';
import arrow2 from '../../Home/Assets/arrow2.png';
import rightArrow from '../../Home/Assets/arrow-right.png';
import axios from "axios";
import Loader from "../../Shared/Loader/Loader";
import { useTranslation } from "react-i18next";
import Truncate from 'react-truncate'
const {BASE_URL} = require('../../../config');
export default function Similar( {id} ) {
    const { t } = useTranslation();
    console.log(id);
    const [data, setData] = useState([]);

    useEffect(()=>{
        const lang = localStorage.getItem('lang');
        axios.get(`${BASE_URL}/categories/${id}/products`)
            .then( response => {
                let dataArr;
                if(lang === 'ar') {
                    dataArr = response.data.data.slice(0, 6).map( item => ({
                        id: item.id,
                        image_url: item.images[0] ? item.images[0].url : 'https://i.stack.imgur.com/y9DpT.jpg',
                        name: item.name_ar
                    }))
                } else {
                    dataArr = response.data.data.slice(0, 6).map( item => ({
                        id: item.id,
                        image_url: item.images[0] ? item.images[0].url : 'https://i.stack.imgur.com/y9DpT.jpg',
                        name: item.name
                    }))
                }
                setData(dataArr)
            })
    },[id])

    const items = data.map( (item, index) => (
        <div className={'big-container'} key={index}>
            <div className={'cart-container'}>
                <img src={item.image_url} alt="" className={'cart-img'} />
                <div className={'snd-cont start-50 translate-middle'}>
                    <p className={'cart-name'}><Truncate lines={3}>{item.name}</Truncate></p>
                    <a className={'btn arrow-btn'} href={`/products/${item.id}`} >
                        <img src={rightArrow} className={'arrow-position'}  alt={'...'}/>
                    </a>
                </div>

            </div>
        </div>
    ))



    function myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? <img src={arrow1} className={'img-position1'} /> : <img src={arrow2} className={'img-position'} />
        return (
            <button className={'arrows btn'} onClick={onClick} disabled={isEdge}>
                {pointer}
            </button>
        )
    }

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
    ]

    if(data.length === 0)
        return <Loader />
    else
        return (
            <div id={'similar-prod'}>
                <h1>{t('utils.similar-products')}</h1>
                <Carousel
                    className={'cr justify-content-center'}
                    breakPoints={breakPoints}
                    renderArrow={myArrow}
                    itemsToShow={5}
                    pagination={false}
                    isRTL={false}
                    children={items}
                />
            </div>
        );
}
