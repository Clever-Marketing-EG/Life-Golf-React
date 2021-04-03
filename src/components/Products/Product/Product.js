import React, { useState, useEffect } from 'react';
import './Product.scss';
import Header from '../../Shared/Header/Header';
import circle from './Assets/circle.png';
import Truncate from 'react-truncate';
import warning from './Assets/warning.png';
import Similar from '../Similar/Similar';
import Left from './Left/Left';
import Specs from './Specs/Specs';
import axios from 'axios';
import {useParams} from "react-router-dom";
import Loader from "../../Shared/Loader/Loader";
const { BASE_URL } = require('../../../config');


export default function Product() {
    const { id } = useParams();

    const [data, setData] = useState({
        points: [],
        images: []
    });

    useEffect(() => {
        let lang = localStorage.getItem('lang')

        axios.get(`${BASE_URL}/products/${id}`).then( response => {

            let dataObj = {
                id: response.data.data.id,
                category_id: response.data.data.category_id,
                image_url: response.data.data.image_url,
                images: response.data.data.images,
            }

            if(lang === 'ar') {
                dataObj = {...{
                        name: response.data.data.name_ar,
                        points: response.data.data.points_ar.replace("[", "").replace("]", "").replace(/["']/g, "").split(','),
                        description: response.data.data.description_ar,
                        features: response.data.data.features_ar
                    }, ...dataObj}
            } else {
                dataObj = {...{
                        name: response.data.data.name,
                        points: response.data.data.points.replace("[", "").replace("]", "").replace(/["']/g, "").split(','),
                        description: response.data.data.description,
                        features: response.data.data.features
                    }, ...dataObj}
            }
            setData(dataObj);
        });
    },[])

    if(!data.id)
        return <Loader />;
    else
        return (
            <div id={'single'}>
                <Header title={data.name} />
                <div  className={'container cars-position'}>
                </div>
                <div className={'container'}>
                    <div>
                        <div className={'row mg-top'}>
                            <div className={'col-md-6'}>
                                <Left images={data.images} />
                            </div>
                            <div className={'col-md-6'}>
                                <h1>{data.name}</h1>
                                <hr />
                                <ul className={'about-list'}>
                                    {
                                        data.points.map( (item, index) => (
                                            <li className={'list-item'} key={index}>
                                                <img className={'circle'} src={circle}  alt={'...'}/>{item}
                                            </li>
                                        ))
                                    }
                                </ul>
                                <p><Truncate lines={6}>{data.description}</Truncate></p>
                                <button className="btn order-button" data-bs-toggle="modal" data-bs-target="#exampleModal">Order Now</button>
                            </div>
                        </div>
                        <Specs data={data} />
                        <Similar id={data.category_id} />
                    </div>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header justify-content-center">
                                    <h5 className="modal-title" id="exampleModalLabel">Order now</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                                </div>
                                <div className="modal-body">
                                    <form >
                                        <div className={'row'}>
                                            <div className={'col-sm-6'}>
                                                <input type="text" className="form-control" placeholder="Name" />
                                            </div>
                                            <div className={'col-sm-6'}>
                                                <input type="email" className="form-control" placeholder="Email" />

                                            </div>
                                            <div className={'col-sm-12'}>
                                                <input type="text" className="form-control" placeholder="Subject" />

                                            </div>
                                        </div>
                                        <div className="form-group">
                                        <textarea
                                            className="form-control"
                                            rows="6"
                                            id="comment"
                                            placeholder="Message"
                                        />
                                        </div>
                                        <div className={"btn-container"}>
                                            <button className="btn send-btn" type="submit">
                                                Send
                                            </button>
                                        </div>
                                        <br />
                                        <div className={'pink'}>
                                            <img src={warning} alt="" className={'warn mb-3'}/>
                                            <span>One of our employee will get in touch with you soon</span>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}
