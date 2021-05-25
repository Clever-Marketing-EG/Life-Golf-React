import React, { useEffect, useState } from 'react';
import './Terms.scss';
import Header from '../../Shared/Header/Header';
import axios from 'axios';
import { useTranslation } from "react-i18next";

const { BASE_URL } = require('../../../config');

export default function Terms() {

    const { t } = useTranslation();
    const [terms, setTerms] = useState([]);
    useEffect(() => {
        axios.get(`${BASE_URL}/term`).then(response => {
            setTerms(response.data.data);
        });
    }, [])
    var items = terms.map((item, index) => {
        var lang = localStorage.getItem('lang');
        if (lang == 'ar') {
            return (
                <div class="accordion-item" dir={'rtl'}>

                    <button class="accordion-button" data-toggle="collapse" data-target={"#collapseOne" + index} dir={'rtl'}>
                        <div className={'small-circle ml-2'} />
                        <span >{item.name_ar}</span>
                    </button>

                    <div id={"collapseOne" + index} className={"collapse"}  >
                        <div class="accordion-body" dir={'rtl'}>
                            {item.desc_ar}
                        </div>
                    </div>
                </div>

            );
        } else {
            return (
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" data-toggle="collapse" data-target={"#collapseOne" + index} >
                            <div className={'small-circle'} />
                            <span>{item.name}</span>
                        </button>
                    </h2>
                    <div id={"collapseOne" + index} class="collapse" >
                        <div class="accordion-body">
                            {item.desc}
                        </div>
                    </div>
                </div>

            );

        }
    })

    return (
        <div id={'terms'} dir={t('dir')}>
            <Header className="header" title={t('nav.terms-and-conditions')} />

            <h1 class="terms-title">{t('utils.get-to-know-our-terms')}</h1>
            <div className={'container mrg-top'}>
                {items}
            </div>

        </div>
    )
}
