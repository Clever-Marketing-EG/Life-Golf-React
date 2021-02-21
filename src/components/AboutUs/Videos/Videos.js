import React from 'react';
import './Videos.scss';
import FactoryVid from './FactoryVid/FactoryVid';
import ProductVid from './ProductVid/ProductVid';
export default function Videos() {

    return (
        <div id={'videos'}>
            <div className={'container'}>
                <h1 className={'vid-title'}>Video presentation</h1>
                <div className={'navigator'}>
                    <ul class="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-factory" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Factory video</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-product" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Product video</button>
                        </li>

                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-factory" role="tabpanel" aria-labelledby="pills-home-tab">
                            <FactoryVid />
                        </div>
                        <div class="tab-pane fade" id="pills-product" role="tabpanel" aria-labelledby="pills-profile-tab">
                            ..
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
