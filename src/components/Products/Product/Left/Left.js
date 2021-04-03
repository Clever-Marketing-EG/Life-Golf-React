import React from 'react';
import forward from '../Assets/forward.png';
import backward from '../Assets/backward.png';
import Carousel, { consts } from 'react-elastic-carousel';
import prod from '../Assets/44.png';
import './Left.scss'
import Loader from "../../../Shared/Loader/Loader";
export default function Left( {images} ) {

    console.log(images)
    function myArrows({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? <img src={backward} className={'img-position1'} /> : <img src={forward} className={'img-position'} />
        return (
            <button className={'arrow btn'} onClick={onClick} disabled={isEdge}>
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
        <div id={'left-prod'}>
            <div className={'product-container'}>
                {
                    images.length === 0? <div />
                    : <img src={images[0].url} className={'prod-img'} alt={'...'}/>
                }
                <div className={'pink-container'}/>
            </div>
            <Carousel
                className={'mb-5'}
                renderArrow={myArrows}
                pagination={false}
                itemPadding={[10, 45]}
                itemsToShow={4}
                isRTL={false}
                // children={}
            >
                <img className={'car-im'} src={prod}  alt={'...'}/>
                <img className={'car-im'} src={prod}  alt={'...'}/>
                <img className={'car-im'} src={prod}  alt={'...'}/>
                <img className={'car-im'} src={prod}  alt={'...'}/>
            </Carousel>

        </div>
    );
}
