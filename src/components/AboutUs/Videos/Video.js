import React, { useEffect, useState } from 'react';
import './video.scss';
import { useTranslation } from "react-i18next";
import $ from 'jquery';
import Carousel, { consts } from "react-elastic-carousel";
import play from "./play.png";
import Truncate from "react-truncate";



export default function Videos({ videos, meta }) {

    const { t } = useTranslation();
    const [data, setData] = useState([]);

    const [activeVideo, setActiveVideo] = useState('src');

    useEffect(() => {
        const lang = localStorage.getItem('lang');
        let dataObj = [];

        if (lang === 'ar') {
            videos.forEach(item => {
                const fullDate = new Date(item.created_at);
                dataObj.push({
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
                dataObj.push({
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
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
    ]


    $(function () {

        $('#exampleModalCenter').click('hide.bs.modal', function (e) {
            $("iframe").each(function () {
                var src = $(this).attr('src');
                $(this).attr('src', src);
            });
        })
    });


    return (
        <div id={'videos'}>
            <div className={'container'}>
                <h1 className={'vid-title'}>{meta.video_header}</h1>
                <div className={'navigator'} dir={t('dir')}>
                    {
                        data.length === 0 ? <div /> : <Carousel
                            isRTL={false}
                            pagination={false}
                            itemsToShow={4}
                            renderArrow={myArrow}
                            breakPoints={breakPoints}
                            itemPadding={[25, 24]}
                        >
                            {
                                data.map((item, index) => (
                                    <div>
                                        <div className={'fact-container'} key={index}>
                                            <img src={item.image_url} className={'img-vid'} alt="" />
                                            <img src={play} className={'play play-btn'} id={item.video_url} data-toggle="modal" data-target="#exampleModalCenter" alt="" onClick={handleClick} />
                                            <p className={'vid-name'}><Truncate lines={1}>{item.title}</Truncate></p>
                                            <p className={'vid-body'}><Truncate lines={2}>{item.description}</Truncate> </p>
                                            <p className={'vid-date'}>{item.created_at}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </Carousel>
                    }
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
    )
}


