import React from 'react';
import './Exchange.scss';
import pic from '../../AboutUs/Assets/about-us-3.jpg';
import Header from '../../Shared/Header/Header';
import Truncate from 'react-truncate';
export default function Exchange() {
    return (
        <div id={'exchange'}>
            <Header className="header" title={'Exchange cars'} />

            <div className={'container margin-t'}>
                <div className={'row'}>
                    <div className={'col-md-6'}>
                        <img src={pic} className={'img-one'} alt="" />
                    </div>
                    <div className={'col-md-6'}>
                        <h1>Get to know our exchange car service</h1>
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

                    <div className={'col-md-6 order-last order-md-first'}>
                        <h1>How to exchange your car with new one</h1>
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