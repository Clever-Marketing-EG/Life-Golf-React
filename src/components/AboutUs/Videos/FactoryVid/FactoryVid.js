import React from 'react';
import './Factory.scss';
import Carousel, { consts } from 'react-elastic-carousel';
import cert from './Assets/cert.png';
import arrow1 from './Assets/arrow1.png';
import arrow2 from './Assets/arrow2.png';
import Truncate from 'react-truncate';

export default function FactoryVid(props) {
    function myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? <img src={arrow1} className={'img-position'} /> : <img src={arrow2} className={'img-position'} />
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
        <div id={'fact'}>
            <Carousel breakPoints={breakPoints} renderArrow={myArrow} itemsToShow={4} pagination={false}>
                <div className={'fact-container'}><iframe className={'videos-frame'} src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
                    <p className={'vid-name'}>Amazing factory tour</p>
                    <p className={'vid-body'}><Truncate lines={2}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed </Truncate> </p>
                    <p className={'vid-date'}>150 view - 18 aug 2020</p>
                </div>
                <div className={'fact-container'}><img src={cert} class="cert-img" alt="" />
                    <p className={'cert-name'}>Cerificate name</p>
                </div>
                <div className={'fact-container'}><img src={cert} class="cert-img" alt="" />
                    <p className={'cert-name'}>Cerificate name</p>
                </div>
                <div className={'fact-container'}><img src={cert} class="cert-img" alt="" />
                    <p className={'cert-name'}>Cerificate name</p>
                </div>
                <div className={'fact-container'}><img src={cert} class="cert-img" alt="" />
                    <p className={'cert-name'}>Cerificate name</p>
                </div>
                <div className={'fact-container'}><img src={cert} class="cert-img" alt="" />
                    <p className={'cert-name'}>Cerificate name</p>
                </div>
            </Carousel>

        </div>
    )
}
