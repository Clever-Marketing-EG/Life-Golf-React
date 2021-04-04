import React, { useEffect, useState } from 'react';
import './Gallery.scss';
import GalleryCarousel from "./GalleryCarousel/GalleryCarousel";
import {useTranslation} from "react-i18next";

export default function Gallery({ galleries, meta }) {

    const {t} = useTranslation();
    const [data, setData] = useState({
        product: [],
        factory: []
    });

    useEffect(() => {
        const lang = localStorage.getItem('lang');
        let dataObj = {
            product: [],
            factory: []
        };

        if (lang === 'ar') {
            galleries.forEach(item => {
                const fullDate = new Date(item.created_at);
                dataObj[item.type].push({
                    image_url: item.image_url,
                    description: item.description_ar,
                    created_at: fullDate.toDateString(),
                })
            })
        } else {
            galleries.forEach(item => {
                const fullDate = new Date(item.created_at);
                dataObj[item.type].push({
                    image_url: item.image_url,
                    description: item.description,
                    created_at: fullDate.toDateString(),
                })
            })
        }
        setData(dataObj);
    }, [galleries])

    return (
        <div id={'videos'}>
            <div className={'container'}>
                <h1 className={'vid-title'}>{meta.gallery_header}</h1>
                <div className={'navigator'}>
                    <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-factory-img" type="button" role="tab" aria-controls="pills-home" aria-selected="true">{t('utils.factory-images')}</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-product-img" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">{t('utils.product-images')}</button>
                        </li>

                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-factory-img" role="tabpanel" aria-labelledby="pills-home-tab">
                            <GalleryCarousel gallery={data['factory']} />
                        </div>
                        <div className="tab-pane fade" id="pills-product-img" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <GalleryCarousel gallery={data['product']} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
