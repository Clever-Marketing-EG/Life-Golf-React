import React, { useState } from 'react';
import './Product.scss';
import Header from '../../Shared/Header/Header';
import Carousel, { consts } from 'react-elastic-carousel';
import arrow1 from '../../Home/Assets/arrow1.png';
import arrow2 from '../../Home/Assets/arrow2.png';
import circle from './Assets/circle.png';
import Truncate from 'react-truncate';
import rightArrow from '../../Home/Assets/arrow-right.png';
import warning from './Assets/warning.png';
import Similar from '../Similar/Similar';
import Left from './Left/Left';
import Specs from './Specs/Specs';
export default function Product() {
    function myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? <img src={arrow1} className={'img-position1'} /> : <img src={arrow2} className={'img-position'} />
        return (
            <button className={'arrows btn'} onClick={onClick} disabled={isEdge}>
                {pointer}
            </button>
        )
    }

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 7 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
    ]
    const [state, setState] = useState(false);
    function handleClick() {
        console.log('The link was clicked.');
        setState(true);
    }
    return (
        <div id={'Single'}>
            <Header className="header" title={'Single Product'} />
            <div className={'container cars-position'}>
                <Carousel className={'test'} breakPoints={breakPoints} itemsToShow={7} pagination={false} renderArrow={myArrow} >
                    <button className={'cats btn active'} onClick={handleClick}>Shuttle Bus</button>
                    <button className={'cats btn'}>Shuttle Bus</button>
                    <button className={'cats btn'}>Shuttle Bus</button>
                    <button className={'cats btn'}>Shuttle Bus</button>
                    <button className={'cats btn'}>Shuttle Bus</button>
                    <button className={'cats btn'}>Shuttle Bus</button>
                    <button className={'cats btn'}>Shuttle Bus</button>
                    <button className={'cats btn'}>Shuttle Bus</button>
                </Carousel>
            </div>
            <div className={'container'}>
                {state ?
                    <div>

                        <div className={'row mg-top'}>
                            <div className={'col-md-6'}>
                                <Left />

                            </div>
                            <div className={'col-md-6'}>
                                <h1>Electric Shuttle Bus DN-11</h1>
                                <hr />
                                <ul className={'about-list'}>
                                    <li className={'list-item'}>
                                        <img className={'circle'} src={circle} /> Smart steering system
                                    </li>
                                    <li className={'list-item'}>
                                        <img className={'circle'} src={circle} /> Rustproof body structure
                                    </li>
                                    <li className={'list-item'}>
                                        <img className={'circle'} src={circle} /> Consistent and efficient electric drive-train
                                    </li>
                                    <li className={'list-item'}>
                                        <img className={'circle'} src={circle} /> Brochure Sightseeing Bus
                                     </li>
                                </ul>
                                <p><Truncate lines={6}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.</Truncate></p>
                                <button className="btn order-button" data-bs-toggle="modal" data-bs-target="#exampleModal">Order Now</button>

                            </div>

                        </div>
                        <Specs />
                        <Similar />
                    </div>
                    : <div></div>}

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header justify-content-center">
                                <h5 class="modal-title" id="exampleModalLabel">Order now</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <from >
                                    <div className={'row'}>
                                        <div className={'col-sm-6'}>
                                            <input type="text" class="form-control" placeholder="Name" />
                                        </div>
                                        <div className={'col-sm-6'}>
                                            <input type="email" class="form-control" placeholder="Email" />

                                        </div>
                                        <div className={'col-sm-12'}>
                                            <input type="text" class="form-control" placeholder="Subject" />

                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <textarea
                                            class="form-control"
                                            rows="6"
                                            id="comment"
                                            placeholder="Message"
                                        ></textarea>
                                    </div>
                                    <div className={"btn-container"}>
                                        <button class="btn send-btn" type="submit">
                                            Send
                                        </button>
                                    </div>
                                    <br />
                                    <div className={'pink'}>
                                        <img src={warning} alt="" className={'warn mb-3'}/>
                                        <span>One of our employee will get in touch with you soon</span>
                                    </div>
                                </from>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}