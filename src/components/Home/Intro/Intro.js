import React, { useState } from "react";
import './Intro.scss';
import Nav from "../../Shared/Nav/Nav";

import PinkSquare from '../Assets/pink-square.png';
import Cart1 from '../Assets/cart1.png';

import bus1 from '../Assets/bus1.png';
import bus2 from '../Assets/bus2.png';
import bus3 from '../Assets/bus3.png';

// import cart1 from

export default function Intro() {
    const [activeCategory, setActiveCategory] = useState('golf-carts');

    const data = {
        'golf-carts': {
            header: 'Golf cart & utility',
            content: 'Golf cart & utility content',
            images: [
                bus1, bus2, bus3
            ]
        },
        'electric-vehicles': {
            header: 'Electric Vehicle',
            content: 'Electric Vehicle content',
            images: [
                bus1, bus2, bus3
            ]
        },
        'cleaning-equipment': {
            header: 'Electric Cleaning Equipment',
            content: 'Electric Cleaning Equipment content',
            images: [
                bus1, bus2, bus3
            ]
        },
        'handling-equipment': {
            header: 'Electric Handling Equipment',
            content: 'Electric Handling Equipment content',
            images: [
                bus1, bus2, bus3
            ]

        },
        'electrics': {
            header: 'Electronics',
            content: 'Electronics content',
            images: [
                bus1, bus2, bus3
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


    return(
        <div id={'intro'}>
            <Nav />
            <div className={'container intro-container d-flex flex-wrap justify-content-around'}>
                <div className={'left-container'}>
                    <h1 className={'intro-header'}>{data[activeCategory].header}</h1>
                    <hr className={'white-line'}/>
                    <p className={'intro-paragraph'}>
                        {data[activeCategory].content}
                    </p>
                    <div className={'buttons-container d-flex justify-content-between'}>
                        <a className={'pink-button'} href={'#'}>Customize your vehicle</a>
                        <a className={'pink-button'} href={'#'}>Our Products</a>
                    </div>
                </div>
                <div className={'right-container'}>
                    <div className={'pink-square-container'}>
                        <img src={PinkSquare}  alt={''} className={'pink-square'}/>
                    </div>
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={Cart1} className="d-block w-100" alt="..." />
                            </div>
                            {data[activeCategory].images.map(image=> (
                                <div className="carousel-item">
                                    <img src={image} className="d-block w-100" alt="..." />
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                                data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"/>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                                data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"/>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>

            </div>
            <div className={'category-nav d-flex justify-content-center'}>
                <button id={'golf-carts'} className={'category-button active'} onClick={handleClick}>
                    <i className="icon-golf-cart logo"/>
                    Golf cart & utility
                </button>
                <button id={'electric-vehicles'} className={'category-button'} onClick={handleClick}>
                    <i className="icon-electric-vehicle logo"/>
                    Electric vehicle
                </button>
                <button id={'cleaning-equipment'} className={'category-button'} onClick={handleClick}>
                    <i className="icon-outline logo"/>
                    Electric cleaning equipment
                </button>
                <button id={'handling-equipment'} className={'category-button'} onClick={handleClick}>
                    <i className="icon-forklift logo"/>
                    Electric handling equipment
                </button>
                <button id={'electrics'} className={'category-button'} onClick={handleClick} >
                    <i className="icon-electric_plug logo"/>
                    Electronics
                </button>
            </div>
        </div>
    )
}
