import React, { useState } from "react";
import './Intro.scss';
import Nav from "../../Shared/Nav/Nav";

import PinkSquare from '../Assets/pink-square.png';

import bus1 from '../Assets/bus1.png';
import bus2 from '../Assets/bus2.png';
import bus3 from '../Assets/bus3.png';

import cart1 from '../Assets/cart1.png';
import cart2 from '../Assets/cart2.png';
import cart3 from '../Assets/cart3.png';

import cleaning1 from '../Assets/cleaning1.png';
import cleaning2 from '../Assets/cleaning2.png';
import cleaning3 from '../Assets/cleaning3.png';

import handling1 from '../Assets/handling1.png';
import handling2 from '../Assets/handling2.png';
import handling3 from '../Assets/handling3.png';

import order1 from '../Assets/electronic1.png';
import order2 from '../Assets/electronic2.png';
import order3 from '../Assets/electronic3.png';

import electronic1 from '../Assets/electronic1.png';
import electronic2 from '../Assets/electronic2.png';
import electronic3 from '../Assets/electronic3.png';

export default function Intro({ meta , changelang }) {
    const [activeCategory, setActiveCategory] = useState('golf-carts');
    const data = {
        'golf-carts': {
            header: meta.home_header_1,
            content: meta.home_paragraph_1,
            images: [
                meta.home_header_1_image_1, meta.home_header_1_image_2, meta.home_header_1_image_3
            ]
        },
        'electric-vehicles': {
            header: meta.home_header_2,
            content: meta.home_paragraph_2,
            images: [
                meta.home_header_2_image_1, meta.home_header_2_image_2, meta.home_header_2_image_3
            ]
        },
        'cleaning-equipment': {
            header: meta.home_header_3,
            content: meta.home_paragraph_3,
            images: [
                meta.home_header_3_image_1, meta.home_header_3_image_2, meta.home_header_3_image_3
            ]
        },
        'handling-equipment': {
            header: meta.home_header_4,
            content: meta.home_paragraph_4,
            images: [
                meta.home_header_4_image_1, meta.home_header_4_image_2, meta.home_header_4_image_3
            ]

        },
        'orders': {
            header: meta.home_header_5,
            content: meta.home_paragraph_5,
            images: [
                meta.home_header_5_image_1, meta.home_header_5_image_2, meta.home_header_5_image_3
            ]
        },
        'electrics': {
            header: meta.home_header_6,
            content: meta.home_paragraph_6,
            images: [
                meta.home_header_6_image_1, meta.home_header_6_image_2, meta.home_header_6_image_3
            ]
        },
    }

    function handleClick(e) {
        const categoriesButtons = document.querySelectorAll('.category-nav .category-button')
        categoriesButtons.forEach(button => {
            button.classList.remove('active');
        })
        e.currentTarget.classList.add('active');
        setActiveCategory(e.currentTarget.id);
    }


    return (
        <div id={'intro'}>
            <Nav changelang={changelang} />
            <div className={'container intro-container d-flex flex-xxl-nowrap flex-xl-nowrap flex-lg-nowrap flex-wrap justify-content-around'}>
                <div className={'left-container'}>
                    <h1 className={'intro-header'}>{data[activeCategory].header}</h1>
                    <hr className={'white-line'} />
                    <p className={'intro-paragraph'}>
                        {data[activeCategory].content}
                    </p>
                    <div className={'buttons-container d-flex justify-content-between'}>
                        <a className={'pink-button'} href={'/Customize'}>Customize your vehicle</a>
                        <a lang="ar" onClick={changelang} className={'pink-button'} href={'#'}>Our Products</a>
                    </div>
                </div>
                <div className={'right-container'}>
                    <div className={'pink-square-container'}>
                        <img src={PinkSquare} alt={''} className={'pink-square'} />
                    </div>
                    <div id="FadeCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {data[activeCategory].images.map((image, index) => {
                                if (index === 0) {
                                    return (
                                        <div className="carousel-item active" key={index + 1}>
                                            <img src={image} className="d-block w-100" alt="..." />
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div className="carousel-item" key={index + 1}>
                                            <img src={image} className="d-block w-100" alt="..." />
                                        </div>
                                    )
                                }
                            })}

                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#FadeCarousel"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#FadeCarousel"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>

            </div>
            <div className={'category-nav d-flex flex-wrap justify-content-center'}>
                <button id={'golf-carts'} className={'category-button active'} onClick={handleClick}>
                    <i className="icon-golf-cart logo" />
                    Golf cart & utility
                </button>
                <button id={'electric-vehicles'} className={'category-button'} onClick={handleClick}>
                    <i className="icon-electric-vehicle logo" />
                    Electric vehicle
                </button>
                <button id={'cleaning-equipment'} className={'category-button'} onClick={handleClick}>
                    <i className="icon-outline logo" />
                    Electric cleaning equipment
                </button>
                <button id={'handling-equipment'} className={'category-button'} onClick={handleClick}>
                    <i className="icon-forklift logo" />
                    Electric handling equipment
                </button>
                <button id={'orders'} className={'category-button'} onClick={handleClick} >
                    <i className="icon-electric_plug logo" />
                    By Order
                </button>
                <button id={'electrics'} className={'category-button'} onClick={handleClick} >
                    <i className="icon-electric_plug logo" />
                    Electronics
                </button>
            </div>
        </div>
    )
}
