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

import electronic1 from '../Assets/electronic1.png';
import electronic2 from '../Assets/electronic2.png';
import electronic3 from '../Assets/electronic3.png';

export default function Intro() {
    const [activeCategory, setActiveCategory] = useState('golf-carts');

    const data = {
        'golf-carts': {
            header: 'Golf cart & utility',
            content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo',
            images: [
                cart1, cart2, cart3
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
                cleaning1, cleaning2, cleaning3
            ]
        },
        'handling-equipment': {
            header: 'Electric Handling Equipment',
            content: 'Electric Handling Equipment content',
            images: [
                handling1, handling2, handling3
            ]

        },
        'electrics': {
            header: 'Electronics',
            content: 'Electronics content',
            images: [
                electronic1, electronic2, electronic3
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
                            { data[activeCategory].images.map( (image,index) => {
                                if(index ===0 ) {
                                    return (
                                        <div className="carousel-item active" key={index+1}>
                                            <img src={image} className="d-block w-100" alt="..." />
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div className="carousel-item" key={index+1}>
                                            <img src={image} className="d-block w-100" alt="..." />
                                        </div>
                                    )
                                }
                            })}

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
            <div className={'category-nav d-flex flex-wrap justify-content-center'}>
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
