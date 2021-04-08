import React, {useState} from 'react';
import './Left.scss'
import forward from '../Assets/forward.png';
import backward from '../Assets/backward.png';
import Carousel, { consts } from 'react-elastic-carousel';


export default function Left( {images} ) {

    const [activeImage, setActiveImage] = useState(0);

    function myArrows({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? <img src={backward} className={'img-position1'}  alt={'...'}/> : <img src={forward} className={'img-position'} alt={'...'} />
        return (
            <button className={'arrow btn'} onClick={onClick} disabled={isEdge}>
                {pointer}
            </button>
        )
    }


    const handleClick = (e) => {
        setActiveImage(e.target.id);
    }

    const items = images.map( (item, index) => (
        <button className='btn' key={index} onClick={handleClick} >
            <img className={'car-im'} src={item.url} key={index}  alt={'...'} id={index}/>
        </button>
    ))

    return (
        <div id={'left-prod'}>
            <div className={'product-container'}>
                {
                    images[activeImage] ?
                        <img src={images[activeImage].url} className={'prod-img'} alt={'...'}/>
                        : <div />
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
                children={items}
            />
        </div>
    );
}
