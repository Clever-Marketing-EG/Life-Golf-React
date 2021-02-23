import React from 'react';
import './ProductCar.scss';
import Carousel , {consts} from 'react-elastic-carousel';
import cert from './Assets/cert.png';
import arrow1 from './Assets/arrow1.png';
import arrow2 from './Assets/arrow2.png';
export default function ProductCar(props) {
    function myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? <img src={arrow1} className={'img-position'} alt={'...'}/> : <img src={arrow2} className={'img-position'} alt={'...'}/>
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
        <div id={'prod'}>
            <Carousel breakPoints={breakPoints} renderArrow={myArrow} itemsToShow={4} pagination={false} isRTL={false}>
                <div className={'cert-container'}><img src={cert} className="cert-img" alt="" />
                    <p className={'cert-name'}>Cerificate name</p>
                </div>
                <div className={'cert-container'}><img src={cert} className="cert-img" alt="" />
                    <p className={'cert-name'}>Cerificate name</p>
                </div>
                <div className={'cert-container'}><img src={cert} className="cert-img" alt="" />
                    <p className={'cert-name'}>Cerificate name</p>
                </div>
                <div className={'cert-container'}><img src={cert} className="cert-img" alt="" />
                    <p className={'cert-name'}>Cerificate name</p>
                </div>
                <div className={'cert-container'}><img src={cert} className="cert-img" alt="" />
                    <p className={'cert-name'}>Cerificate name</p>
                </div>
                <div className={'cert-container'}><img src={cert} className="cert-img" alt="" />
                    <p className={'cert-name'}>Cerificate name</p>
                </div>
            </Carousel>

        </div>
    )
}
