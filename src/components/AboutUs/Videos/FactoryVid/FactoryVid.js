import React from 'react';
import './Factory.scss';
import Carousel, { consts } from 'react-elastic-carousel';
import arrow1 from './Assets/arrow1.png';
import arrow2 from './Assets/arrow2.png';
import Truncate from 'react-truncate';
import vid from '../../Assets/about-us-3.jpg';
import play from '../play.png'
export default function FactoryVid(props) {
    function myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? <img src={arrow1} className={'img-position'} alt={'...'} /> : <img src={arrow2} className={'img-position'} alt={'...'} />
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
            <Carousel breakPoints={breakPoints} renderArrow={myArrow} itemsToShow={4} pagination={false} isRTL={false}>
                <div className={'fact-container'}>

                    <img src={vid} className={'img-vid'} alt="" />
                    <img src={play} className={'play play-btn'} data-toggle="modal" data-target="#exampleModalCenter" alt="" />

                    <p className={'vid-name'}>Amazing factory tour</p>
                    <p className={'vid-body'}><Truncate lines={2}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed </Truncate> </p>
                    <p className={'vid-date'}>150 view - 18 aug 2020</p>
                </div>
                <div className={'fact-container'}>

                    <img src={vid} className={'img-vid'} alt="" />
                    <img src={play} className={'play play-btn'} data-toggle="modal" data-target="#exampleModalCenter" alt="" />

                    <p className={'vid-name'}>Amazing factory tour</p>
                    <p className={'vid-body'}><Truncate lines={2}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed </Truncate> </p>
                    <p className={'vid-date'}>150 view - 18 aug 2020</p>
                </div>
                <div className={'fact-container'}>

                    <img src={vid} className={'img-vid'} alt="" />
                    <img src={play} className={'play play-btn'} data-toggle="modal" data-target="#exampleModalCenter" alt="" />

                    <p className={'vid-name'}>Amazing factory tour</p>
                    <p className={'vid-body'}><Truncate lines={2}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed </Truncate> </p>
                    <p className={'vid-date'}>150 view - 18 aug 2020</p>
                </div>
                <div className={'fact-container'}>

                    <img src={vid} className={'img-vid'} alt="" />
                    <img src={play} className={'play play-btn'} data-toggle="modal" data-target="#exampleModalCenter" alt="" />

                    <p className={'vid-name'}>Amazing factory tour</p>
                    <p className={'vid-body'}><Truncate lines={2}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed </Truncate> </p>
                    <p className={'vid-date'}>150 view - 18 aug 2020</p>
                </div>
                <div className={'fact-container'}>

                    <img src={vid} className={'img-vid'} alt="" />
                    <img src={play} className={'play play-btn'} data-toggle="modal" data-target="#exampleModalCenter" alt="" />

                    <p className={'vid-name'}>Amazing factory tour</p>
                    <p className={'vid-body'}><Truncate lines={2}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed </Truncate> </p>
                    <p className={'vid-date'}>150 view - 18 aug 2020</p>
                </div>
                <div className={'fact-container'}>

                    <img src={vid} className={'img-vid'} alt="" />
                    <img src={play} className={'play play-btn'} data-toggle="modal" data-target="#exampleModalCenter" alt="" />

                    <p className={'vid-name'}>Amazing factory tour</p>
                    <p className={'vid-body'}><Truncate lines={2}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed </Truncate> </p>
                    <p className={'vid-date'}>150 view - 18 aug 2020</p>
                </div>
            </Carousel>

            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">

                        <div className="modal-body">
                            {/* <video className={'video'} controls autoPlay loop>

                                <source
                                    src="https://player.vimeo.com/video/16259135"
                                    type="video/mp4"></source>

                            </video> */}
                            <iframe className={'video'} src="https://www.youtube.com/embed/tgbNymZ7vqY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen/>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
