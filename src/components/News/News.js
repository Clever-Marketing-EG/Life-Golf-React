import React from 'react';
import Truncate from 'react-truncate';
import './News.scss';
import cart from './Assets/golf-cart.png';
import plug from './Assets/electric_plug.png';
import fork from './Assets/forklift.png';
import outline from './Assets/outline.png';
import vehicle from './Assets/electric-vehicle.png';
import Blogs from './Blogs/Blogs';
import Header from '../Shared/Header/Header'
export default function News() {

    return (
        <div id={'news'}>
            <Header className="header" title={'News'} />

            <div className={'container x'}>
                <div class="d-flex flex-wrap align-items-start">
                    <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button class="nav-link filters active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                            <div className={'white-box'}>
                                <img className={'filter-img'} src={cart} alt="" />
                            </div>
                            <p className={'filter-name'}>Golf cart & utilities</p>
                        </button>
                        <button class="nav-link filters" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                            <div className={'white-box'}>
                                <img className={'filter-img'} src={vehicle} alt="" />
                            </div>
                            <p className={'filter-name'}>Electric vehicles</p>
                        </button>
                        <button class="nav-link filters" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                            <div className={'white-box'}>
                                <img className={'filter-img'} src={outline} alt="" />
                            </div>
                            <p className={'filter-name'}>Electric cleaning equipment</p>
                        </button>
                        <button class="nav-link filters" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                            <div className={'white-box'}>
                                <img className={'filter-img'} src={fork} alt="" />
                            </div>
                            <p className={'filter-name'}>Electric handling equipment</p>
                        </button>
                        <button class="nav-link filters" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-setting" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                            <div className={'white-box'}>
                                <img className={'filter-img'} src={plug} alt="" />
                            </div>
                            <p className={'filter-name'}>Electric handling equipment</p>
                        </button>
                    </div>
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><Blogs /></div>
                        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
                        <div class="tab-pane fade" id="v-pills-setting" role="tabpanel" aria-labelledby="v-pills-setting-tab">__</div>

                    </div>
                </div>


            </div>
        </div>
    );
}