import React from 'react';
import './Maintenance.scss';
import one from './Assets/path_146.png';
import two from './Assets/path_148.png';
import three from './Assets/path_150.png';
import Truncate from 'react-truncate';
import Header from '../../Shared/Header/Header';
import {useTranslation} from "react-i18next";

export default function Maintenance({meta}) {
    const {t} = useTranslation();

    return (
        <div id={'maintenance'}>
            <Header className="header" title={t('nav.maintenance')} />

            <div className={'container'} dir={t('dir')}>
                <div className={'row justify-content-around mrg-btm'}>
                    <div className={'col-md-5 marg-bottom'}>
                        <h1 className={'title-one'}>{meta.maintenance_header_1}</h1>
                        <hr />
                        <p><Truncate lines={6}>{meta.maintenance_content_1}</Truncate></p>
                    </div>
                    <div className={'col-md-5'}>
                        <div className={'img-container'}>
                            <img className={'img-one'} src={meta.image_1} alt="" />
                            <img className={'img-two'} src={one} alt="" />
                        </div>
                    </div>
                </div>
                <div className={'row justify-content-around mrg-btm'}>

                    <div className={'col-md-5  order-last order-md-first'}>
                        <div className={'img-container'}>
                            <img className={'img-one'} src={meta.image_2} alt="" />
                            <img className={'img-x'} src={two} alt="" />
                        </div>
                    </div>
                    <div className={'col-md-5 marg-bottom'}>
                        <h1 className={'title-one'}>{meta.maintenance_header_2}</h1>
                        <hr />
                        <p><Truncate lines={6}>{meta.maintenance_content_2}</Truncate></p>
                    </div>
                </div>
                <div className={'row justify-content-around'}>
                    <div className={'col-md-5 marg-bottom'}>
                        <h1 className={'title-one'}>{meta.maintenance_header_3}</h1>
                        <hr />
                        <p><Truncate lines={6}>{meta.maintenance_content_3}</Truncate></p>
                    </div>
                    <div className={'col-md-5'}>
                        <div className={'img-container'}>
                            <img className={'img-one'} src={meta.image_3} alt="" />
                            <img className={'img-three'} src={three} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
