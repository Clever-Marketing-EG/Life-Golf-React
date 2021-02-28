import React from 'react';
import './Rental.scss';
import pic from '../../AboutUs/Assets/about-us-3.jpg';
import Header from '../../Shared/Header/Header';
import Truncate from 'react-truncate';
export default function Rental() {
    return (
        <div id={'rental'}>
            <Header className="header" title={'Rental Service'} />

            <div className={'container margin-t'}>
                <div className={'row'}>
                    <div className={'col-md-6'}>
                        <img src={pic} className={'img-one'} alt="" />
                    </div>
                    <div className={'col-md-6'}>
                        <h1>Get to know our rental service terms & conditions</h1>
                        <hr />
                        <ul className={'list'}>
                            <li className={'list-item'}>
                                <div className={'small-circle'}></div>
                                <Truncate lines={1}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Truncate>
                            </li>
                            <li className={'list-item'}>
                                <div className={'small-circle'}></div>
                                <Truncate lines={1}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Truncate>
                            </li>
                            <li className={'list-item'}>
                                <div className={'small-circle'}></div>
                                <Truncate lines={1}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Truncate>
                            </li>
                            <li className={'list-item'}>
                                <div className={'small-circle'}></div>
                                <Truncate lines={1}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Truncate>
                            </li>
                            <li className={'list-item'}>
                                <div className={'small-circle'}></div>
                                <Truncate lines={1}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Truncate>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={'row'}>

                    <div className={'col-md-6'}>
                        <h1>Requirments for rental sercice</h1>
                        <hr />
                        <ul className={'list'}>
                            <li className={'list-item'}>
                                <div className={'small-circle'}></div>
                                <Truncate lines={1}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Truncate>
                            </li>
                            <li className={'list-item'}>
                                <div className={'small-circle'}></div>
                                <Truncate lines={1}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Truncate>
                            </li>
                            <li className={'list-item'}>
                                <div className={'small-circle'}></div>
                                <Truncate lines={1}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Truncate>
                            </li>
                            <li className={'list-item'}>
                                <div className={'small-circle'}></div>
                                <Truncate lines={1}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Truncate>
                            </li>
                            <li className={'list-item'}>
                                <div className={'small-circle'}></div>
                                <Truncate lines={1}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Truncate>
                            </li>
                        </ul>
                    </div>
                    <div className={'col-md-6'}>
                        <img src={pic} className={'img-one'} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}