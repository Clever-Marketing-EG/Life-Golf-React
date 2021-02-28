import React from 'react';
import './Services.scss';
import Header from '../Shared/Header/Header';
import pic from '../AboutUs/Assets/about-us-3.jpg';
import Truncate from 'react-truncate';
import arrow from '../News/Blogs/Assets/arrow.png';

export default function Services() {
    return (
        <div id={'services'}>
            <Header className="header" title={'Services'} />
            <div className={'container margin-cont'}>
                <div className={'row'}>
                    <div className={'col-md-4'}>
                        <div className={'service-container'}>
                            <img src={pic} className={'service-img'} alt="" />
                            <div className={'service-body'}>
                                <h1><Truncate lines={1}>Rental Service</Truncate></h1>
                                <p><Truncate lines={3}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.</Truncate></p>
                                <a className={'read'} href="/Rental">
                                    Read More
                        <img className={'arrow'} src={arrow} alt="" />
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className={'col-md-4'}>
                        <div className={'service-container'}>
                            <img src={pic} className={'service-img'} alt="" />
                            <div className={'service-body'}>
                                <h1><Truncate lines={1}>Spare parts</Truncate></h1>
                                <p><Truncate lines={3}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.</Truncate></p>
                                <a className={'read'} href="/Spare">
                                    Read More
                        <img className={'arrow'} src={arrow} alt="" />
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className={'col-md-4'}>
                        <div className={'service-container'}>
                            <img src={pic} className={'service-img'} alt="" />
                            <div className={'service-body'}>
                                <h1><Truncate lines={1}>Flexable payment plan</Truncate></h1>
                                <p><Truncate lines={3}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.</Truncate></p>
                                <a className={'read'} href="/Payment">
                                    Read More
                        <img className={'arrow'} src={arrow} alt="" />
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className={'col-md-4'}>
                        <div className={'service-container'}>
                            <img src={pic} className={'service-img'} alt="" />
                            <div className={'service-body'}>
                                <h1><Truncate lines={1}>Exchange old car with new</Truncate></h1>
                                <p><Truncate lines={3}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.</Truncate></p>
                                <a className={'read'} href="/Exchange">
                                    Read More
                        <img className={'arrow'} src={arrow} alt="" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}