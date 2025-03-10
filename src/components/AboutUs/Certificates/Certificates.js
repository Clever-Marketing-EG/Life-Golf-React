import React, { useEffect, useState } from 'react';
import './Certificates.scss';

import Carousel, { consts } from 'react-elastic-carousel';
import { useTranslation } from "react-i18next";


export default function Certifiactes({ certificates, meta }) {

    const [data, setData] = useState([]);
    const { t } = useTranslation();
    const [image, setImage] = useState(0);


    useEffect(() => {
        const lang = localStorage.getItem('lang');
        let dataArr = [];
        if (lang === 'ar') {
            certificates.forEach(item => {
                dataArr.push({
                    name: item['name_ar'],
                    image_url: item['image_url']
                })
            })
        } else {
            certificates.forEach(item => {
                dataArr.push({
                    name: item['name'],
                    image_url: item['image_url']
                })
            })
        }
        setData(dataArr);
    }, [certificates])
    const handle = (e) => {
        console.log(e.target.value);
    }


    function myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? <i className="icon-icon_ionic-ios-arrow-forward-4" /> :
            <i className="icon-icon_ionic-ios-arrow-forward-5" />;
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
                <h1 className={'cert-title'}>{meta.certificates_header}</h1>
                <div className={'navigator'} dir={t('dir')}>
                    {
                        data.length === 0 ? <div /> :
                            <Carousel breakPoints={breakPoints} renderArrow={myArrow} itemsToShow={4} pagination={false} isRTL={false}>
                                {
                                    data.map((item, index) => (
                                        <div className={'cert-container'} data-bs-toggle="modal" data-bs-target={'#test'} value={index} onClick={async () => {
                                           await setImage(index);

                                        }}>
                                            <img src={item['image_url']} className="cert-img" alt="" />
                                            <p className={'cert-name'}>{item['name']}</p>
                                        </div>

                                    ))
                                }
                            </Carousel>
                    }
                </div>

                <Image data={data[image]} />



            </div>

        </div>
    )
}
function Image({ data }) {
    return (

        <div className="modal fade" id={'test'} aria-labelledby="exampleModalLabel" tabIndex="-1" role="dialog"  data-bs-keyboard="true" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <img src={data?.image_url} alt="" className={'img-pop'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
