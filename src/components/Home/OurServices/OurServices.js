import React from 'react';
import './OurServices.scss';

import cart from '../Assets/our-services.png';
import GreySquare from '../Assets/grey-square.jpg';
import { Link } from 'react-router-dom';


export default function OurServices({ meta }) {
    


    return (
        <div id={'our-services'} className={'container'}>
            <h1 className={'home-header'}>{meta.services_header}</h1>
            <hr className={'blue-line'} />
            <div className={'center-container'}>
                <div className={'image-container'}>
                    <img src={cart} alt={'...'} />
                    <img src={GreySquare} className={'grey-square translate-middle top-50 start-50'} alt={'...'} />
                </div>
                <div className={'tags-container justify-content-around flex-wrap'}>
                    <div className={'inner-container d-flex justify-content-around'}>
                        <a className={'tag left top-0 d-flex'} href={'#'}>
                            Competitive pricing
                            <span className={'ms-3 logo-container'}>
                                <i className="icon-electric-vehicle" />
                            </span>
                        </a>
                        <a className={'tag right top-0 d-flex'} href={'#'}>
                            <span className={'me-3 logo-container'}>
                                <i className="icon-electric-vehicle" />
                            </span>
                            Customer Service
                        </a>
                    </div>
                    <div className={'inner-container d-flex justify-content-around'}>
                        <a href="/Payment" className={'tag left top-50 translate-middle-y d-flex'}>
                            Most Flexiable Payment Plan
                            <div className={'ms-3 logo-container'}>
                                <i className="icon-electric-vehicle" />
                            </div>
                        </a>
                        <a href={'/Rental'} className={'tag right top-50 translate-middle-y d-flex'}>
                            <span className={'me-3 logo-container'}>
                                <i className="icon-electric-vehicle" />
                            </span>
                            Rental Plans
                        </a>
                    </div>

                    <div className={'inner-container d-flex justify-content-around'}>
                        <Link to={`Services/${1}`} className={'tag left bottom-0 d-flex'}>
                            Spare Parts
                            <span className={'ms-3 logo-container'}>
                                <i className="icon-electric-vehicle" />
                            </span>
                        </Link>
                        <a className={'tag right bottom-0 d-flex'} href={'#'}>
                            <span className={'me-3 logo-container'}>
                                <i className="icon-electric-vehicle" />
                            </span>
                            Products Variety
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
