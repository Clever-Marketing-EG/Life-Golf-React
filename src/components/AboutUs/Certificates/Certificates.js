import React, {useEffect, useState} from 'react';
import './Certificates.scss';
import ProductCar from '../ProductsCar/ProductCar'
import VehicleCar from '../VehicleCar/VehicleCar'

import Carousel , {consts} from 'react-elastic-carousel';

import cert from './Assets/cert.png';
import arrow1 from "../Videos/FactoryVid/Assets/arrow1.png";
import arrow2 from "../Videos/FactoryVid/Assets/arrow2.png";

export default function Certifiactes( {certificates} ) {

    const [data, setData] = useState([]);

    useEffect( () => {
        const lang = localStorage.getItem('lang');
        let dataArr = [];
        if(lang === 'ar') {
            certificates.forEach( item => {
                dataArr.push({
                    name: item['name_ar'],
                    image_url: item['image_url']
                })
            })
        } else {
            certificates.forEach( item => {
                dataArr.push({
                    name: item['name'],
                    image_url: item['image_url']
                })
            })
        }
        setData(dataArr);
    }, [certificates])

    function myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? <img src={arrow1} className={'img-position'} alt={'...'} /> : <img src={arrow2} className={'img-position'} alt={'...'} />
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

    return (
        <div id={'cert'}>
            <div className={'container'}>
                <h1 className={'cert-title'}>Our honors and certificate</h1>
                <div className={'navigator'}>
                    {
                        data.length === 0 ? <div /> :
                            <Carousel breakPoints={breakPoints} renderArrow={myArrow} itemsToShow={4} pagination={false} isRTL={false}>
                                {
                                    data.map( (item, index) => (
                                        <div className={'cert-container'}><img src={item['image_url']} className="cert-img" alt="" key={index}/>
                                            <p className={'cert-name'}>{item['name']}</p>
                                        </div>
                                    ))
                                }
                            </Carousel>
                    }

                </div>
            </div>

        </div>
    )
}
