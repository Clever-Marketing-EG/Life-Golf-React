import React, { useState, useEffect } from 'react';
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
import axios from 'axios';
const { BASE_URL } = require('../../../config');
export default function Product() {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        let pid = localStorage.getItem("product_id")
        axios.get(`${BASE_URL}/products/${pid}`).then(response => {
        setProduct(response.data.data);
        });
      },[])
    return (
        <div id={'Single'}>
            <Header className="header" title={product.name} />
            <div className={'container cars-position'}>
            </div>
            <div className={'container'}>
                
                    <div>

                        <div className={'row mg-top'}>
                            <div className={'col-md-6'}>
                                <Left />

                            </div>
                            <div className={'col-md-6'}>
                                <h1>{product.name}</h1>
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
                        <Specs product={product} />
                        <Similar />
                    </div>
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