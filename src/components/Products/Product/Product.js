import React, { useState, useEffect } from 'react';
import './Product.scss';
import Header from '../../Shared/Header/Header';
import circle from './Assets/circle.png';
import warning from './Assets/warning.png';
import Similar from '../Similar/Similar';
import Left from './Left/Left';
import Specs from './Specs/Specs';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Loader from "../../Shared/Loader/Loader";
import { useTranslation } from "react-i18next";
import Swal from 'sweetalert2';

const { BASE_URL } = require('../../../config');


export default function Product() {

    const { t } = useTranslation();
    const { id } = useParams();

    const [data, setData] = useState({
        points: [],
        images: []
    });


    const [formData, setFormData] = useState({
        product: '',
    });


    useEffect(() => {
        window.scrollTo(0,0)
        let lang = localStorage.getItem('lang')
        axios.get(`${BASE_URL}/products/${id}`).then(response => {

            let dataObj = {
                id: response.data.data.id,
                category_id: response.data.data.category_id,
                image_url: response.data.data.image_url,
                images: response.data.data.images,
                configuration_image_url: response.data.data.configuration_image_url,
            }

            if (lang === 'ar') {
                dataObj = {
                    ...{
                        name: response.data.data.name_ar,
                        points: response.data.data.points_ar.replace("[", "").replace("]", "").replace(/["']/g, "").split(','),
                        description: response.data.data.description_ar,
                        features: response.data.data.features_ar,
                    }, ...dataObj
                }
            } else {
                dataObj = {
                    ...{
                        name: response.data.data.name,
                        points: response.data.data.points.replace("[", "").replace("]", "").replace(/["']/g, "").split(','),
                        description: response.data.data.description,
                        features: response.data.data.features
                    }, ...dataObj
                }
            }
            setFormData({product: dataObj.name});
            setData(dataObj);
        });
    }, [])


    const handleChange = (e) => {
        setFormData({...formData,
            ...{[e.target.name]: e.target.value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${BASE_URL}/mail/order`, formData)
            .then( async (response) => {
                await Swal.fire('Thank You!', response.data.data, 'success')
            })
            .catch( async (err) => {
                await Swal.fire('An error occured!', err.response.data.message, 'error')
            })
    }


    if (!data.id)
        return <Loader />;
    else
        return (
            <div id={'single'}>
                <Header title={data.name} />
                <div className={'container cars-position'}>
                </div>
                <div className={'container'}>
                    <div dir={t('dir')}> 
                        <div className={'row mg-top'} >
                            <div className={'col-md-6'}>
                                <Left images={data.images} />
                            </div>
                            <div className={'col-md-6'} >
                                <h1>{data.name}</h1>
                                <hr />
                                <ul className={'about-list'}>
                                    {
                                        data.points.map((item, index) => (
                                            <li className={'list-item'} key={index}>
                                                <img className={'circle'} src={circle} alt={'...'} />{item}
                                            </li>
                                        ))
                                    }
                                </ul>
                                {/* <p><Truncate lines={6}>{data.description}</Truncate></p> */}
                                <button className="btn order-button mt-5" data-bs-toggle="modal" data-bs-target="#exampleModal">{t('utils.order-now')}</button>
                            </div>
                        </div>
                        <Specs data={data} />
                        <Similar id={data.category_id} />
                    </div>

                    {/* Dropdown banner*/}
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header justify-content-center">
                                    <h5 className="modal-title" id="exampleModalLabel">{t('utils.order-now')}</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <form dir={t('dir')} onSubmit={handleSubmit}>
                                        <input type={'hidden'} name={'product'} value={data.name} />
                                        <div className={'row'}>
                                            <div className={'col-sm-6'}>
                                                <input type="text" className="form-control" name={'name'} placeholder={t('utils.name')} onChange={handleChange} required />
                                            </div>
                                            <div className={'col-sm-6'}>
                                                <input type="email" className="form-control" name={'email'} placeholder={t('utils.email')} onChange={handleChange} required />

                                            </div>
                                            <div className={'col-sm-12'}>
                                                <input type="tel" className="form-control" name={'phone'} placeholder={t('utils.phone')} onChange={handleChange} required pattern="[0-9]+"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <textarea
                                                className="form-control"
                                                rows="6"
                                                id="comment"
                                                name={'additional_information'}
                                                onChange={handleChange}
                                                placeholder={t('utils.additional-info')}
                                            />
                                        </div>
                                        <div className={"btn-container"}>
                                            <button className="btn send-btn" type="submit">
                                                {t('utils.send')}
                                            </button>
                                        </div>
                                        <br/>
                                        <div className={'pink d-flex align-items-center'} dir={t('dir')} >
                                            <img src={warning} alt="" className={'warn mb-3 block'}  />
                                            <span className="block">{t('utils.one-of-our-employee-will-get-in-touch-with-you-soon')}</span>
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
