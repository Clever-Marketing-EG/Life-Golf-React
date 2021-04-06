import React, { useState, useEffect } from 'react';
import './Form.scss';
import { useTranslation } from "react-i18next";
import Fetch from './Fetch';
import axios from "axios";
import Swal from "sweetalert2";

const { BASE_URL } = require('../../../../config');
export default function Form() {
    const { t } = useTranslation();

    const [data, setData] = useState([]);
    const [toggled, setToggled] = useState(false);
    const [checked, setChecked] = useState([]);
    useEffect(() => {
        Fetch.products(1)
            .then(fethchedProducts => {
                setData(fethchedProducts)
            })
    }, [])


    const handleClick = (e) => {
        setToggled(true);
        const newData = {
            [e.target.name]: e.target.value
        }
        setChecked({ ...checked, ...newData });
    }

    const handleChange = (e) => {
        const newValues = {
            [e.target.name]: e.target.value
        }
        setChecked({ ...checked, ...newValues });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post(`${BASE_URL}/mail/customize`, checked)
            .then(async (response) => {
                await Swal.fire('Thank You!', response.data.data, 'success')
            })
            .catch(async (err) => {
                await Swal.fire('An error occured!', err.response.data.message, 'error')
            })
    }


    return (
        <div id={'custom-form'}>
            <form onSubmit={handleSubmit}>
                <br />
                <div className={'container mt-5'}>
                    <div className={'row'}>
                        <div className={'col-md-6'} >
                            <h1 >{t('utils.personal-details')}</h1>
                            <hr />
                            <div className={'row'}>
                                <div className={'col-sm-6'}>
                                    <input type="text" className="form-control" placeholder={t('utils.first-name')}
                                        name={'first_name'} onChange={handleChange} required/>
                                </div>
                                <div className={'col-sm-6'}>
                                    <input type="text" className="form-control" placeholder={t('utils.last-name')}
                                        name={'last_name'} onChange={handleChange} required/>

                                </div>
                                <div className={'col-sm-12'}>
                                    <input type="text" className="form-control" placeholder={t('utils.email')}
                                        name={'email'} onChange={handleChange} required/>

                                </div>
                                <div className={'col-sm-12'}>
                                    <input type="text" className="form-control" placeholder={t('utils.phone')}
                                        name={'phone'} onChange={handleChange} required/>

                                </div>
                            </div>
                            <br />
                            <h1>{t('utils.golf')}</h1>
                            <hr />


                            <div className={'row row-cols-2 gy-3 gx-1'}>
                                {
                                    data.map((item, index) => {
                                        return (
                                            <div className={'col-sm-6 justify-content-around'} key={index}>
                                                <input className="form-check-input" type="radio" name={'cart'}
                                                    id={`product_${item.id}`} value={item.name} onClick={handleClick} />
                                                <label className="form-check-label" htmlFor={`product_${item.id}`}>
                                                    {item.name}
                                                </label>
                                            </div>
                                        );
                                    })
                                }
                            </div>

                        </div>

                        <div className={'col-md-6'}>
                            {
                                toggled ? <div className={'container'}>
                                    <h1>{t('utils.number-Of-seats')}</h1>

                                    <div className={'row my-3'}>
                                        <div className={'col-md-6 mb-2'}>
                                            <input className="form-check-input" type="radio" name="seats"
                                                id="one" value="2" onChange={handleChange} />
                                            <label className="form-check-label" htmlFor="one">
                                                2 {t('utils.seats')}
                                            </label>
                                        </div>
                                        <div className={'col-md-6'}>
                                            <input className="form-check-input" type="radio" name="seats"
                                                id="two" value="4" onChange={handleChange} />
                                            <label className="form-check-label" htmlFor="two">
                                                4 {t('utils.seats')}
                                            </label>
                                        </div>
                                        <div className={'col-md-6'}>
                                            <input className="form-check-input" type="radio" name="seats"
                                                id="three" value="6" onChange={handleChange} />
                                            <label className="form-check-label" htmlFor="three">
                                                6 {t('utils.seats')}
                                            </label>
                                        </div>
                                        <div className={'col-md-6'}>
                                            <input className="form-check-input" type="radio" name="seats"
                                                id="four" value="8" onChange={handleChange} />
                                            <label className="form-check-label" htmlFor="four">
                                                8 {t('utils.seats')}
                                            </label>
                                        </div>
                                    </div>
                                    <h1>{t('utils.color')}</h1>

                                    <div className={'row my-3'}>
                                        <div className={'col-md-6 mb-2'}>
                                            <input className="form-check-input" type="radio" name="color"
                                                id="five" value="black" onChange={handleChange} />
                                            <label className="form-check-label" htmlFor="five">
                                                {t('utils.black')}
                                            </label>
                                        </div>
                                        <div className={'col-md-6 mb-2'}>
                                            <input className="form-check-input" type="radio" name="color"
                                                id="six" value="white" onChange={handleChange} />
                                            <label className="form-check-label" htmlFor="six">
                                                {t('utils.white')}
                                            </label>
                                        </div>
                                        <div className={'col-md-6 mb-2'}>
                                            <input className="form-check-input" type="radio" name="color"
                                                id="seven" value="green" onChange={handleChange} />
                                            <label className="form-check-label" htmlFor="seven">
                                                {t('utils.green')}
                                            </label>
                                        </div>
                                        <div className={'col-md-6'}>
                                            <input className="form-check-input" type="radio" name="color"
                                                id="eight" value="dark blue" onChange={handleChange} />
                                            <label className="form-check-label" htmlFor="eight">
                                                {t('utils.dblue')}
                                            </label>
                                        </div>
                                        <div className={'col-md-6'}>
                                            <input className="form-check-input" type="radio" name="color"
                                                id="nine" value="light blue" onChange={handleChange} />
                                            <label className="form-check-label" htmlFor="nine">
                                                {t('utils.lblue')}
                                            </label>
                                        </div>
                                        <div className={'col-md-6'}>
                                            <input className="form-check-input" type="radio" name="color"
                                                id="ten" value="pattern" onChange={handleChange} />
                                            <label className="form-check-label" htmlFor="ten">
                                                {t('utils.pattern')}
                                            </label>
                                        </div>
                                    </div>
                                    <h1>{t('utils.brand')}</h1>

                                    <div className={'row my-3'}>
                                        <div className={'col-md-6 mb-2'}>
                                            <input className="form-check-input" type="radio" name="speed"
                                                id="eleven" value="20" onChange={handleChange} />
                                            <label className="form-check-label" htmlFor="eleven">
                                                20km
                                        </label>
                                        </div>
                                        <div className={'col-md-6 mb-2'}>
                                            <input className="form-check-input" type="radio" name="speed"
                                                id="twelve" value="25" onChange={handleChange} />
                                            <label className="form-check-label" htmlFor="twelve">
                                                25km
                                        </label>
                                        </div>
                                        <div className={'col-md-6 '}>
                                            <input className="form-check-input" type="radio" name="speed"
                                                id="thirteen" value="30" onChange={handleChange} />
                                            <label className="form-check-label" htmlFor="thirteen">
                                                30km
                                        </label>
                                        </div>
                                    </div>
                                    <h1>{t('utils.type')}</h1>

                                    <div className={'row my-3'}>
                                        <div className={'col-md-6 mb-2'}>
                                            <input className="form-check-input" type="radio" name="type"
                                                id="fourteen" value="lifted" onChange={handleChange} />
                                            <label className="form-check-label" htmlFor="fourteen">
                                                {t('utils.lift')}
                                            </label>
                                        </div>
                                        <div className={'col-md-6 mb-2'}>
                                            <input className="form-check-input" type="radio" name="type"
                                                id="fifteen" value="regular" onChange={handleChange} />
                                            <label className="form-check-label" htmlFor="fifteen">
                                                {t('utils.reg')}
                                            </label>
                                        </div>

                                    </div>

                                </div>


                                    : <div />
                            }
                        </div>


                    </div>

                </div>
                <div className={"btn-container"}>
                    <button className="btn send-btn" type="submit">
                        {t('utils.send')}
                    </button>
                </div>
            </form>

        </div>

    );
}
