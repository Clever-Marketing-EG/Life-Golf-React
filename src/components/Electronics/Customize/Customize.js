import React from 'react';
import Truncate from 'react-truncate';
import './Customize.scss';
import pic from '../../AboutUs/Assets/about-us-3.jpg';
import Form from './Form/Form';
import Header from '../../Shared/Header/Header';
import {useTranslation} from "react-i18next";

export default function Customize({ meta }) {

    const {t} = useTranslation();

    return (
        <div id={'custom'}>
            <Header className="header" title={t('utils.customize-your-Order')} />

            <div className={'container mt'}>
                <div className={'row'}>
                    <div className={'col-md-5'}>
                        <img className={'custom-img'} src={pic} alt="" />
                    </div>
                    <div className={'col-md-6'}>
                        <h1 className={'custom-title'}>{meta.customize_title}</h1>
                        <hr />
                        <p className={'custom-p'}>
                            <Truncate lines={6}>
                                {meta.customize_content}
                            </Truncate>
                        </p>
                    </div>
                </div>
                <Form />
            </div>
        </div>
    );
}