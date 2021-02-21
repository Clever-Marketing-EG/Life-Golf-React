import React from 'react';
import './Gallery.scss';
import FactoryImg from './FactoryImg/FactoryImg';
import ProductImg from './ProductImg/ProductImg.js';
export default function Gallery() {

    return (
        <div id={'videos'}>
            <div className={'container'}>
                <h1 className={'vid-title'}>Our gallery</h1>
                <div className={'navigator'}>
                    <ul class="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-factory-img" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Factory images</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-product-img" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Product images</button>
                        </li>

                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-factory-img" role="tabpanel" aria-labelledby="pills-home-tab">
                            <FactoryImg />
                        </div>
                        <div class="tab-pane fade" id="pills-product-img" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <ProductImg />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
