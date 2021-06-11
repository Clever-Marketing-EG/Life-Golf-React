import React, { useRef, useState, useEffect } from 'react';
import './OurPartners.scss';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-elastic-carousel';
import axios from 'axios';
const { BASE_URL } = require('../../../config');
export default function OurPartner(meta) {

    const inputEl = useRef(null);


    const [data, setData] = useState();
    const { t } = useTranslation();

    useEffect(() => {
        axios.get(`${BASE_URL}/partners`)
            .then((response) => {
                const lang = localStorage.getItem('lang');
                let dataArr;
                if (lang === 'ar') {
                    dataArr = response.data.data.map(item => ({
                        id: item.id,
                        name: item.name_ar,
                        image_url: item.image_url
                    }))
                } else {
                    dataArr = response.data.data.map(item => ({
                        id: item.id,
                        name: item.name,
                        image_url: item.image_url

                    }))
                }
                setData(dataArr)
            })
    }, [])




    const slidePrev = () => {
        inputEl.current.slidePrev();
    };
    const slideNext = () => {
        inputEl.current.slideNext();
    };

    const breakPoints = [
        { width: 1, itemsToShow: 3 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
    ]


    return (
        <div id={'our-partners'}>
            <div className={'position-relative d-flex justify-content-center'}>
                <div style={{ backgroundImage: "linear-gradient(100deg, #00000000, #001c77c0 , #001c77ea ), url( " + meta?.partner_img + ")" }} className={'image-container position-relative'}>
                    <div className={'right-container'}>
                        <h1 className={'home-header'}>
                            {t('utils.partners')}
                        </h1>
                        <hr className={'blue-line'} />
                        <div className={'row mt-5'}>
                            {
                                !data? <div /> :
                                    <Carousel ref={inputEl} itemsToShow={3} pagination={false} className={'position-relative'}
                                        breakPoints={breakPoints} showArrows={false} itemPadding={[10, 0]}>
                                        {
                                            data?.map((item, index) =>
                                                <div key={index} className={'logo-container'}>
                                                    <img className={'mt-3'} src={item.image_url} alt="" />
                                                    <h6>{item.name}</h6>
                                                </div>
                                            )
                                        }
                                    </Carousel>
                            }
                            <div className={'buttons'} dir={'ltr'}>
                                <button onClick={slidePrev} className={'btn carousel-btn cherry-button'}><i className="icon-icon_ionic-ios-arrow-forward-4" /></button>
                                <button onClick={slideNext} className={'btn carousel-btn cherry-button'}><i className="icon-icon_ionic-ios-arrow-forward-5" /></button>
                            </div>
                        </div>
                    </div>
                    {/* <img className={'group'} src={Group} alt="" /> */}
                </div>
            </div>
        </div >
    );
}