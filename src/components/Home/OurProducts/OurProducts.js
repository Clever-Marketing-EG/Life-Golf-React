import React from "react";
import './OurProducts.scss';

export default function OurProducts() {

    return(
        <div id={'our-products'} className={'container'}>
            <h1 className={'home-header'}>Our Products</h1>
            <hr className={'blue-line'}/>
            <div className={'d-flex flex-wrap'}>
                <button className={'category-button'}>
                    <span className={'logo-container'}>
                       <span className="icon-golf-cart"/>
                    </span>
                    Golf cart & utilities
                </button>

            </div>

        </div>
    )
}
