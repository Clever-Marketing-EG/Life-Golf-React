import React, { useEffect, useState } from 'react';
import './NewGallery.scss';
import GalleryCarousel from "./GalleryCarousel/GalleryCarousel";
import { useTranslation } from "react-i18next";
import Carousel, { consts } from "react-elastic-carousel";

export default function Gallery({ galleries, meta }) {

    const { t } = useTranslation();
    const [data, setData] = useState([]);
    useEffect(() => {
        const lang = localStorage.getItem('lang');
        let dataObj = [];
        if (lang === 'ar') {
            galleries.forEach(item => {
                const fullDate = new Date(item.created_at);
                dataObj.push({
                    image_url: item.image_url,
                    description: item.description_ar,
                    created_at: fullDate.toDateString(),
                })
            })
        } else {
            galleries.forEach(item => {
                const fullDate = new Date(item.created_at);
                dataObj.push({
                    image_url: item.image_url,
                    description: item.description,
                    created_at: fullDate.toDateString(),
                })
            })
        }
        setData(dataObj);

    }, [galleries])



    function myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? <i className="icon-icon_ionic-ios-arrow-forward-4" /> :
            <i className="icon-icon_ionic-ios-arrow-forward-5" />
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
        { width: 1450, itemsToShow: 5, itemsToScroll: 4 },
        { width: 1750, itemsToShow: 6 },
    ]





    console.log(data);
    return (
        <div id={'gallery'}>
            <div className={'container'}>
                <h1 className={'vid-title'}>{meta.gallery_header}</h1>
                <div className={'navigator'} dir={t('dir')}>
                    {
                        data.length === 0 ? <div /> :
                            <Carousel
                                isRTL={false}
                                pagination={false}
                                itemsToShow={4}
                                renderArrow={myArrow}
                                breakPoints={breakPoints}
                                itemPadding={[25, 24]}
                            >

                                {
                                    data.map((item, index) => (
                                        <div className={''} key={index}>
                                            <img src={item.image_url} className={'img-vid'} alt="" />
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
