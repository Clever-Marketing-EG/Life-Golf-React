import React from 'react';
import Truncate from 'react-truncate';
import './Electronics.scss';
import pic from '../AboutUs/Assets/about-us-3.jpg';
import LeftForm from './LeftForm/LeftForm';
import Header from '../Shared/Header/Header';
import {useTranslation} from "react-i18next";

export default function Electronics({meta}) {
    const {t} = useTranslation();

    return (
        <div id={'electronics'}>
            <Header className="header" title={t('utils.electronics-order')} />

            <div className={'container mt'}>
                <div className={'row'}>
                    <div className={'col-md-5'}>
                        <img className={'electronic-img'} src={pic} alt="" />
                    </div>
                    <div className={'col-md-6'}>
                        <h1 className={'electronic-title'}>{meta.electronic_title}</h1>
                        <hr />
                        <p className={'electronic-p'}>
                            <Truncate lines={6}>
                            {meta.electronic_content}
                            </Truncate>
                        </p>
                    </div>
                </div>

                <LeftForm meta={meta} />
            </div>
        </div>
    );
}