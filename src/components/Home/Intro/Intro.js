import React from "react";
import './Intro.scss';
import Nav from "../../Shared/Nav/Nav";

import PinkSquare from '../Assets/pink-square.png';
import Cart1 from '../Assets/cart1.png';

export default function Intro() {

    return(
        <div id={'intro'}>
            <Nav />
            <div className={'container intro-container d-flex flex-wrap justify-content-around'}>
                <div className={'left-container'}>
                    <h1 className={'home-header'}>Golf Car & Utility</h1>
                    <hr className={'white-line'}/>
                    <p className={'home-paragraph'}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                    </p>
                    <div className={'buttons-container d-flex justify-content-between'}>
                        <a className={'pink-button'} href={'#'}>Customize your vehicle</a>
                        <a className={'pink-button'} href={'#'}>Our Products</a>
                    </div>
                </div>
                <div className={'right-container'}>
                    <img src={PinkSquare}  alt={''} className={'pink-square'}/>
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={Cart1} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={Cart1} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={Cart1} className="d-block w-100" alt="..." />
                            </div>
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
        </div>
    )
}
