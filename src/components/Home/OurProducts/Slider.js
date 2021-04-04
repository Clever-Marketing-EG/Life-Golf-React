import React, {useEffect, useState} from 'react';
import './OurProducts.scss';
import Carousel, { consts } from 'react-elastic-carousel';
import arrow1 from '../Assets/arrow1.png';
import arrow2 from '../Assets/arrow2.png';
import rightArrow from '../Assets/arrow-right.png';

export default function Slider( {products} ) {
    const [data, setData] = useState([]);

    useEffect( () => {
        setData(products);
    }, [products])

    function myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? <img src={arrow1} className={'img-position1'}  alt={'...'}/>
            :<img src={arrow2} className={'img-position'}  alt={'...'}/>
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
            {
                data.length === 0 ? <div />
                    :<Carousel breakPoints={breakPoints} renderArrow={myArrow} itemsToShow={4} pagination={false} isRTL={false}>
                        {
                            data.map( (item, index) => (
                                <ProductCard name={item.name} image_url={item.image_url} key={index} />
                            ))
                        }
                    </Carousel>
            }
        </div>
    );
}


function ProductCard({name, image_url}) {
    return(
        <div className={'big-container'}>
            <div className={'cart-container d-flex flex-column-reverse'}>
                <img src={image_url} alt="" className={'cart-img'} />
                <div className={'snd-cont'}>
                    <p className={'cart-name'}>{name}</p>
                    <button className={'btn arrow-btn'}>
                        <img src={rightArrow} className={'arrow-position'}  alt={'...'}/>
                    </button>
                </div>

            </div>
        </div>
    );
}
