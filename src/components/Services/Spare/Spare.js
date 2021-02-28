import React from 'react';
import './Spare.scss';
import pic from '../../AboutUs/Assets/about-us-3.jpg';
import Header from '../../Shared/Header/Header';
import Truncate from 'react-truncate';
export default function Spare() {
    return (
        <div id={'spare'}>
            <Header className="header" title={'Spare parts'} />

            <div className={'container margin-t'}>
                <div className={'row'}>
                    <div className={'col-md-6'}>
                        <img src={pic} className={'img-one'} alt="" />
                    </div>
                    <div className={'col-md-6'}>
                        <h1>Get to know our spare parts service</h1>
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
                        <h1>How to order your needed spare parts</h1>
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