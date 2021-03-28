import React, { useState, useEffect } from "react";
import './OurProducts.scss';
import Slider from './Slider';

export default function OurProducts({ categories }) {

    const [products, setProducts] = useState([]);
    const [data, setData] = useState([]);

    const lang = localStorage.getItem("lang")

    useEffect( () => {
        const dataArr = [];

        if( lang === 'ar') {
            categories.forEach( item => {
                const obj = {
                    'name': item['name_ar'],
                    'image_url': item['image_url']
                }
                dataArr.push(obj);
            })
        } else {
            categories.forEach( item => {
                const obj = {
                    'name': item['name'],
                    'image_url': item['image_url']
                }
                dataArr.push(obj);
            })
        }
        // console.log(dataArr);
    }, [categories])


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
