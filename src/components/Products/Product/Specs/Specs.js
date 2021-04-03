import React from 'react';
import './Specs.scss';
import Features from './Features/Features';
import Specifications from './Specifications/Specifications';
import Configurations from './Configurations/Configurations';
export default function Specs({data}) {
    return (
        <div id={'specs'}>
            <ul className="nav nav-pills mb-3 snd-ul" id="pills-tab" role="tablist">
                <li className="nav-item snd-list" role="presentation">
                    <button className="nav-link active list-btn" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Features</button>
                </li>
                <li className="nav-item snd-list" role="presentation">
                    <button className="nav-link list-btn" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Specification</button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><Features data={data} /></div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><Specifications data={data} /></div>
            </div>
        </div>
    );
}
