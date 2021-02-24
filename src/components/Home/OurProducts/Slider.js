import React from 'react';
import './OurProducts.scss';
import Carousel, { consts } from 'react-elastic-carousel';
import arrow1 from '../Assets/arrow1.png';
import arrow2 from '../Assets/arrow2.png';
import rightArrow from '../Assets/arrow-right.png';
import cart from '../Assets/cart1.png';
export default function Slider() {
    function myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? <img src={arrow1} className={'img-position1'} /> : <img src={arrow2} className={'img-position'} />
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
        <div className={'cars'}>
            <Carousel breakPoints={breakPoints} renderArrow={myArrow} itemsToShow={4} pagination={false} >
                <div className={'big-container'}>
                    <div className={'cart-container'}>
                        <img src={cart} alt="" className={'cart-img'} />
                        <div className={'snd-cont'}>
                            <p className={'cart-name'}>4 Seater Electric Golf Cart DG-C4</p>
                            <button className={'btn arrow-btn'}>
                                <img src={rightArrow} className={'arrow-position'} />
                            </button>
                        </div>

                    </div>
                </div>
                <div className={'big-container'}>
                    <div className={'cart-container'}>
                        <img src={cart} alt="" className={'cart-img'} />
                        <div className={'snd-cont'}>
                            <p className={'cart-name'}>4 Seater Electric Golf Cart DG-C4</p>
                            <button className={'btn arrow-btn'}>
                                <img src={rightArrow} className={'arrow-position'} />
                            </button>
                        </div>

                    </div>
                </div>
                <div className={'big-container'}>
                    <div className={'cart-container'}>
                        <img src={cart} alt="" className={'cart-img'} />
                        <div className={'snd-cont'}>
                            <p className={'cart-name'}>4 Seater Electric Golf Cart DG-C4</p>
                            <button className={'btn arrow-btn'}>
                                <img src={rightArrow} className={'arrow-position'} />
                            </button>
                        </div>

                    </div>
                </div>
                <div className={'big-container'}>
                    <div className={'cart-container'}>
                        <img src={cart} alt="" className={'cart-img'} />
                        <div className={'snd-cont'}>
                            <p className={'cart-name'}>4 Seater Electric Golf Cart DG-C4</p>
                            <button className={'btn arrow-btn'}>
                                <img src={rightArrow} className={'arrow-position'} />
                            </button>
                        </div>

                    </div>
                </div>
                <div className={'big-container'}>
                    <div className={'cart-container'}>
                        <img src={cart} alt="" className={'cart-img'} />
                        <div className={'snd-cont'}>
                            <p className={'cart-name'}>4 Seater Electric Golf Cart DG-C4</p>
                            <button className={'btn arrow-btn'}>
                                <img src={rightArrow} className={'arrow-position'} />
                            </button>
                        </div>

                    </div>
                </div>

            </Carousel>
        </div>
    );
}
