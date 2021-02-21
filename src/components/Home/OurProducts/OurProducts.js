import React from "react";
import './OurProducts.scss';

export default function OurProducts() {

    return(
        <div id={'our-products'} className={'container'}>
            <h1 className={'home-header'}>Our Products</h1>
            <hr className={'blue-line'}/>
            <div className={'categories-container d-flex flex-wrap justify-content-around'}>
                <button className={'category-button'}>
                    <span className={'logo-container me-3'}>
                        <i className="icon-golf-cart"/>
                    </span>
                    Golf cart & utilities
                </button>
                <button className={'category-button'}>
                    <span className={'logo-container me-3'}>
                        <i className="icon-golf-cart"/>
                    </span>
                    Golf cart & utilities
                </button>
                <button className={'category-button'}>
                    <span className={'logo-container me-3'}>
                        <i className="icon-golf-cart"/>
                    </span>
                    Golf cart & utilities
                </button>
                <button className={'category-button'}>
                    <span className={'logo-container me-3'}>
                        <i className="icon-golf-cart"/>
                    </span>
                    Golf cart & utilities
                </button>
                <button className={'category-button'}>
                    <span className={'logo-container me-3'}>
                        <i className="icon-golf-cart"/>
                    </span>
                    Golf cart & utilities
                </button>

            </div>

        </div>
    )
}
