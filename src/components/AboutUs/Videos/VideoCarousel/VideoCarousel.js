import Carousel, {consts} from "react-elastic-carousel";
import play from "../play.png";
import Truncate from "react-truncate";
import React from "react";

import './VideoCarousel.scss';

export default function VideoCarousel( {videos, handleClick} ) {


    function myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ?<i className="icon-icon_ionic-ios-arrow-forward-4"/> :
            <i className="icon-icon_ionic-ios-arrow-forward-5"/>
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

    return(

        <div id={'video-carousel'}>
            {
                videos.length === 0 ? <div />
                    : <Carousel breakPoints={breakPoints} renderArrow={myArrow}  itemsToShow={4} pagination={false} isRTL={false}>
                        {
                            videos.map( (item, index) => (
                                <div className={'fact-container'} key={index}>

                                    <img src={item.image_url} className={'img-vid'} alt="" />
                                    <img src={play} className={'play play-btn'} id={item.video_url} data-toggle="modal" data-target="#exampleModalCenter" alt="" onClick={handleClick} />

                                    <p className={'vid-name'}><Truncate lines={1}>{item.title}</Truncate></p>
                                    <p className={'vid-body'}><Truncate lines={2}>{item.description}</Truncate> </p>
                                    <p className={'vid-date'}>{item.created_at}</p>
                                </div>
                            ))
                        }
                    </Carousel>
            }
        </div>
    );
}
