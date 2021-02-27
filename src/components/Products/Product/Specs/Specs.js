import React from 'react';
import './Specs.scss';
import Features from './Features/Features';
export default function Specs() {
    return (
        <div id={'specs'}>
            <ul class="nav nav-pills mb-3 snd-ul" id="pills-tab" role="tablist">
                <li class="nav-item snd-list" role="presentation">
                    <button class="nav-link active list-btn" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Features</button>
                </li>
                <li class="nav-item snd-list" role="presentation">
                    <button class="nav-link list-btn" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Specification</button>
                </li>
                <li class="nav-item snd-list" role="presentation">
                    <button class="nav-link list-btn" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Configurations</button>
                </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><Features /></div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
            </div>
        </div>
    );
}