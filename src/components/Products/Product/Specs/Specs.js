import React from 'react';
import './Specs.scss';
import Features from './Features/Features';
import Specifications from './Specifications/Specifications';
import { useTranslation } from "react-i18next";

export default function Specs({data}) {
    const { t } = useTranslation()
    console.log(data);
    return (
        <div id={'specs'} >
            <ul dir={t('dir')} className="nav nav-pills mb-3 snd-ul" id="pills-tab" role="tablist">
                <li className="nav-item snd-list" role="presentation">
                    <button className="nav-link active list-btn" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">{t('utils.features')}</button>
                </li>
                <li className="nav-item snd-list" role="presentation">
                    <button className="nav-link list-btn" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">{t('utils.specification')}</button>
                </li>

               {data.configuration_image_url? <li className="nav-item snd-list" role="presentation">
                    <button className="nav-link list-btn" id="pills-config-tab" data-bs-toggle="pill" data-bs-target="#pills-config" type="button" role="tab" aria-controls="pills-config" aria-selected="false">{t('utils.configurations')}</button>
                </li> : <div/>}
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><Features data={data} /></div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><Specifications data={data.image_url} /></div>
                <div className="tab-pane fade" id="pills-config" role="tabpanel" aria-labelledby="pills-config-tab"><Specifications data={data.configuration_image_url}  /></div>
            </div>
        </div>
    );
}
