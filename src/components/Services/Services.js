import React from 'react';
import './Services.scss';
import Header from '../Shared/Header/Header';
import pic from '../AboutUs/Assets/about-us-3.jpg';
import Truncate from 'react-truncate';
import arrow from '../News/Blogs/Assets/arrow.png';

export default function Services({ meta, changelang }) {
    return (
        <div id={'services'}>
            <Header className="header" title={'Services'} changelang={changelang} />
            <div className={'container margin-cont'}>
                <div className={'row'}>
                    <div className={'col-md-4'}>
                        <div className={'service-container'}>
                            <img src={meta.rental_service_img} className={'service-img'} alt="" />
                            <div className={'service-body'}>
                                <h1><Truncate lines={1}>{meta.rental_service_title}</Truncate></h1>
                                <p><Truncate lines={3}>{meta.rental_service}</Truncate></p>
                                <a className={'read'} href="/Rental" >
                                    Read More
                        <img className={'arrow'} src={arrow} alt="" />
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className={'col-md-4'}>
                        <div className={'service-container'}>
                            <img src={meta.spare_parts_img} className={'service-img'} alt="" />
                            <div className={'service-body'}>
                                <h1><Truncate lines={1}>{meta.spare_parts_title}</Truncate></h1>
                                <p><Truncate lines={3}>{meta.spare_parts}</Truncate></p>
                                <a className={'read'} href="/Spare" meta={meta}>
                                    Read More
                        <img className={'arrow'} src={arrow} alt="" />
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className={'col-md-4'}>
                        <div className={'service-container'}>
                            <img src={meta.payment_plans_img} className={'service-img'} alt="" />
                            <div className={'service-body'}>
                                <h1><Truncate lines={1}>{meta.payment_plans_title}</Truncate></h1>
                                <p><Truncate lines={3}>{meta.payment_plans}</Truncate></p>
                                <a className={'read'} href="/Payment" meta={meta}>
                                    Read More
                        <img className={'arrow'} src={arrow} alt="" />
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className={'col-md-4'}>
                        <div className={'service-container'}>
                            <img src={meta.exchange_img} className={'service-img'} alt="" />
                            <div className={'service-body'}>
                                <h1><Truncate lines={1}>{meta.exchange_title}</Truncate></h1>
                                <p><Truncate lines={3}>{meta.exchange}</Truncate></p>
                                <a className={'read'} href="/Exchange" meta={meta}>
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