import React from "react";
import Carousel, { consts } from "react-elastic-carousel";
import single from "../../assets/Products/single.png";
import arrow2 from '../../assets/Products/right.svg';
import arrow1 from '../../assets/Products/left.svg';
// import rightArrow from '../Assets/arrow-right.png';
export default function images() {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 4, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
    ];
    function myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? <img src={arrow1} className={'img-position'} /> : <img src={arrow2} className={'img-position'} />
        return (
            <button className={'arrows btn'} onClick={onClick} disabled={isEdge}>
                {pointer}
            </button>
        )
    }
    return (
        <div id="images" >
            <div>
                <Carousel renderArrow={myArrow} pagination={false} itemPadding={[10, 40]} itemsToShow={4} >
                    <img height="60px" width="80px" src={single} />
                    <img height="60px" width="80px" src={single} />
                    <img height="60px" width="80px" src={single} />
                    <img height="60px" width="80px" src={single} />
                    <img height="60px" width="80px" src={single} />
                    <img height="60px" width="80px" src={single} />
                    <img height="60px" width="80px" src={single} />


                </Carousel>
            </div>
        </div>
    )
}
