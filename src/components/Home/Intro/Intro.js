import React, { useState } from "react";
import './Intro.scss';
import Nav from "../../Shared/Nav/Nav";

import PinkSquare from '../Assets/pink-square.png';


export default function Intro({ meta , changelang }) {
    const [activeCategory, setActiveCategory] = useState('golf-carts');
    // console.log(meta);
    const data = {
        'golf-carts': {
            header: meta.golf_carts_header,
            content: meta.golf_carts_content,
            images: [
                meta.golf_carts_images_1, meta.golf_carts_images_2, meta.golf_carts_images_3
            ]
        },
        'electric-vehicles': {
            header: meta.electric_vehicles_header,
            content: meta.electric_vehicles_content,
            images: [
                meta.electric_vehicles_images_1, meta.electric_vehicles_images_2, meta.electric_vehicles_images_3
            ]
        },
        'cleaning-equipment': {
            header: meta.cleaning_equipment_header,
            content: meta.cleaning_equipment_content,
            images: [
                meta.cleaning_equipment_images_1, meta.cleaning_equipment_images_2, meta.cleaning_equipment_images_3
            ]
        },
        'handling-equipment': {
            header: meta.handling_equipment_header,
            content: meta.handling_equipment_content,
            images: [
                meta.handling_equipment_images_1, meta.handling_equipment_images_2, meta.handling_equipment_images_3
            ]

        },
        'orders': {
            header: meta.orders_header,
            content: meta.orders_content,
            images: [
                meta.orders_images_1, meta.orders_images_2, meta.orders_images_3
            ]
        },
        'electronics': {
            header: meta.electronics_header,
            content: meta.electronics_content,
            images: [
                meta.electronics_images_1, meta.electronics_images_2, meta.electronics_images_3
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
                <button id={'electronics'} className={'category-button'} onClick={handleClick} >
                    <i className="icon-electric_plug logo" />
                    Electronics
                </button>
            </div>
        </div>
    )
}
