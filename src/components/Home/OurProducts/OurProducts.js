import React from "react";
import './OurProducts.scss';
import Slider from './Slider';

export default function OurProducts() {


    return (
        <div id={'our-products'} className={'container'}>
            <h1 className={'home-header'}>Our Products</h1>
            <hr className={'blue-line'} />
            {/* <div className={'categories-container d-flex flex-wrap justify-content-around'}>
                <button className={'category-button'}>
                    <span className={'logo-container me-3'}>
                        <i className="icon-golf-cart" />
                    </span>
                    Golf cart & utilities
                </button>
                <button className={'category-button'}>
                    <span className={'logo-container me-3'}>
                        <i className="icon-golf-cart" />
                    </span>
                    Golf cart & utilities
                </button>
                <button className={'category-button'}>
                    <span className={'logo-container me-3'}>
                        <i className="icon-golf-cart" />
                    </span>
                    Golf cart & utilities
                </button>
                <button className={'category-button'}>
                    <span className={'logo-container me-3'}>
                        <i className="icon-golf-cart" />
                    </span>
                    Golf cart & utilities
                </button>
                <button className={'category-button'}>
                    <span className={'logo-container me-3'}>
                        <i className="icon-golf-cart" />
                    </span>
                    Golf cart & utilities
                </button>
            </div> */}

            <ul class="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="category-button nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"> <span className={'logo-container me-3'}>
                        <i className="icon-golf-cart" />
                    </span>
                    Golf cart & utilities</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="category-button nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"> <span className={'logo-container me-3'}>
                        <i className="icon-golf-cart" />
                    </span>
                    Golf cart & utilities</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="category-button nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                        <span className={'logo-container me-3'}>
                            <i className="icon-golf-cart" />
                        </span>
                    Golf cart & utilities
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="category-button nav-link" id="pills-4-tab" data-bs-toggle="pill" data-bs-target="#pills-4" type="button" role="tab" aria-controls="pills-4" aria-selected="false">
                        <span className={'logo-container me-3'}>
                            <i className="icon-golf-cart" />
                        </span>
                    Golf cart & utilities
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="category-button nav-link" id="pills-5-tab" data-bs-toggle="pill" data-bs-target="#pills-5" type="button" role="tab" aria-controls="pills-5" aria-selected="false">
                        <span className={'logo-container me-3'}>
                            <i className="icon-golf-cart" />
                        </span>
                    Golf cart & utilities
                    </button>
                </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><Slider /></div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
                <div class="tab-pane fade" id="pills-4" role="tabpanel" aria-labelledby="pills-4-tab">...</div>
                <div class="tab-pane fade" id="pills-5" role="tabpanel" aria-labelledby="pills-5-tab">...</div>
            </div>
            <div>
            </div>

        </div>
    )
}
