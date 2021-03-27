import React, { useState } from "react";
import './OurProducts.scss';
import Slider from './Slider';

export default function OurProducts({ categories }) {
    const [products, setProducts] = useState([]);
    const lang = localStorage.getItem("lang")
    if (lang == "ar") {
        var items = categories.map(item => {
            return (
                <div>
                    <li className="nav-item" role="presentation">
                        <button className="category-button nav-link active" id={item.id} data-bs-toggle="pill" data-bs-target={item.id} type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                            <span className={'logo-container me-3'}>
                                <i className="icon-golf-cart" />
                            </span>

                            {item.name}
                        </button>

                    </li>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id={item.id} role="tabpanel" aria-labelledby={item.id}><Slider /></div>
                    </div>
                </div>
            );

        })
    } else {
        var items = categories.map(item => {
            return (
                <div className={'btn-center'}>
                    <button className={'category-button'} name={item.id}>
                        <span className={'logo-container me-3'}>
                            <i className="icon-golf-cart" />
                        </span>
                        {item.name}
                    </button>
                </div>
            );

        })
    }


    return (
        <div id={'our-products'} className={'container'}>
            <h1 className={'home-header'}>Our Products</h1>
            <hr className={'blue-line'} />
            <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">

                <li className="nav-item" role="presentation">
                    <button className="category-button nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"> <span className={'logo-container me-3'}>
                        <i className="icon-golf-cart" />
                    </span>
                    Golf cart & utilities</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="category-button nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"> <span className={'logo-container me-3'}>
                        <i className="icon-golf-cart" />
                    </span>
                    Golf cart & utilities</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="category-button nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                        <span className={'logo-container me-3'}>
                            <i className="icon-golf-cart" />
                        </span>
                    Golf cart & utilities
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="category-button nav-link" id="pills-4-tab" data-bs-toggle="pill" data-bs-target="#pills-4" type="button" role="tab" aria-controls="pills-4" aria-selected="false">
                        <span className={'logo-container me-3'}>
                            <i className="icon-golf-cart" />
                        </span>
                    Golf cart & utilities
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="category-button nav-link" id="pills-5-tab" data-bs-toggle="pill" data-bs-target="#pills-5" type="button" role="tab" aria-controls="pills-5" aria-selected="false">
                        <span className={'logo-container me-3'}>
                            <i className="icon-golf-cart" />
                        </span>
                    Golf cart & utilities
                    </button>
                </li>

            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><Slider /></div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
                <div className="tab-pane fade" id="pills-4" role="tabpanel" aria-labelledby="pills-4-tab">...</div>
                <div className="tab-pane fade" id="pills-5" role="tabpanel" aria-labelledby="pills-5-tab">...</div>
            </div>


                {/* {items} */}
        </div>
    )
}
