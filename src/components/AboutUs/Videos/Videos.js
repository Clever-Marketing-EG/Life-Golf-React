import React, { useEffect, useState } from 'react';
import './Videos.scss';
import VideoCarousel from './VideoCarousel/VideoCarousel';
import {useTranslation} from "react-i18next";

export default function Videos({ videos, meta }) {

    const {t} = useTranslation();
    const [data, setData] = useState({
        product: [],
        factory: []
    });

    const [activeVideo, setActiveVideo] = useState('src');

    useEffect(() => {
        const lang = localStorage.getItem('lang');
        let dataObj = {
            product: [],
            factory: []
        };

        if (lang === 'ar') {
            videos.forEach(item => {
                const fullDate = new Date(item.created_at);
                dataObj[item.type].push({
                    title: item.title_ar,
                    description: item.description_ar,
                    image_url: item.image_url,
                    video_url: item.video_url,
                    created_at: fullDate.toDateString(),
                })
            })
        } else {
            videos.forEach(item => {
                const fullDate = new Date(item.created_at);
                dataObj[item.type].push({
                    title: item.title,
                    description: item.description,
                    image_url: item.image_url,
                    video_url: item.video_url,
                    created_at: fullDate.toDateString(),
                })
            })
        }
        setData(dataObj);
    }, [videos])

    const handleClick = (e) => {
        setActiveVideo(e.target.id);
    }


    return (
        <div id={'videos'}>
            <div className={'container'}>
                <h1 className={'vid-title '}>{meta.video_header}</h1>
                <div className={'navigator'} dir={t('dir')}>
                    <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-factory" type="button" role="tab" aria-controls="pills-home" aria-selected="true">{t('utils.factory-videos')}</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-product" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">{t('utils.product-videos')}</button>
                        </li>

                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-factory" role="tabpanel" aria-labelledby="pills-home-tab">
                            <VideoCarousel videos={data['factory']} handleClick={handleClick} />
                        </div>
                        <div className="tab-pane fade" id="pills-product" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <VideoCarousel videos={data['product']} handleClick={handleClick} />
                        </div>
                        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <iframe className={'video'} src={activeVideo} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}


