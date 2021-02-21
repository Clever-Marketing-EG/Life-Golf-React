import React from 'react';
import './VehicleCar.scss';
import Carousel , {consts} from 'react-elastic-carousel';
import cert from './Assets/cert.png';
import arrow1 from './Assets/arrow1.png';
import arrow2 from './Assets/arrow2.png';
export default function Vehicle() {
    function myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? <img src={arrow1} className={'img-position'}/> : <img src={arrow2} className={'img-position'}/>
        return (
          <button className={'arrows btn'} onClick={onClick} disabled={isEdge}>
            {pointer}
          </button>
        )
      }
    return (
        <div id={'vehicle'}>
            <Carousel renderArrow={myArrow} itemsToShow={4} pagination={false}>
                <div className={'cert-container'}><img src={cert} class="cert-img" alt="" />
                    <p className={'cert-name'}>Vehicle name</p>
                </div>
                <div className={'cert-container'}><img src={cert} class="cert-img" alt="" />
                    <p className={'cert-name'}>Vehicle name</p>
                </div>
                <div className={'cert-container'}><img src={cert} class="cert-img" alt="" />
                    <p className={'cert-name'}>Vehicle name</p>
                </div>
                <div className={'cert-container'}><img src={cert} class="cert-img" alt="" />
                    <p className={'cert-name'}>Vehicle name</p>
                </div>
                <div className={'cert-container'}><img src={cert} class="cert-img" alt="" />
                    <p className={'cert-name'}>Cerificate name</p>
                </div>
                <div className={'cert-container'}><img src={cert} class="cert-img" alt="" />
                    <p className={'cert-name'}>Vehicle name</p>
                </div>
            </Carousel>

        </div>
    )
}
