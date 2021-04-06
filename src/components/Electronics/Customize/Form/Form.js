import React, { useState, useEffect } from 'react';
import './Form.scss';
import { useTranslation } from "react-i18next";
import Fetch from './Fetch';

export default function Form() {
    const { t } = useTranslation();

    const [data, setData] = useState([]);
    const [toggled, setToggled] = useState(false);

    useEffect(() => {
        Fetch.products(1)
            .then(fethchedProducts => {
                setData(fethchedProducts)
            })
    }, [])


    const handleClick = () => {
        setToggled(true);
    }


    return (
        <div id={'custom-form'}>
            <form>
                <br />
                <div className={'container mt-5'}>
                    <div className={'row'}>
                        <div className={'col-md-6'} >
                            <h1 >{t('utils.personal-details')}</h1>
                            <hr />
                            <div className={'row'}>
                                <div className={'col-sm-6'}>
                                    <input type="text" className="form-control" placeholder={t('utils.first-name')} />
                                </div>
                                <div className={'col-sm-6'}>
                                    <input type="text" className="form-control" placeholder={t('utils.last-name')} />

                                </div>
                                <div className={'col-sm-12'}>
                                    <input type="text" className="form-control" placeholder={t('utils.phone')} />

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
                                                <input className="form-check-input" type="radio" name={'products'}
                                                    id={`product_${item.id}`} value={item.id} onClick={handleClick} />
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
                                            <input className="form-check-input" type="radio" name="no4"
                                                id="one" />
                                            <label className="form-check-label" htmlFor="one">
                                                2 {t('utils.seats')}
                                            </label>
                                        </div>
                                        <div className={'col-md-6'}>
                                            <input className="form-check-input" type="radio" name="no4"
                                                id="two" />
                                            <label className="form-check-label" htmlFor="two">
                                                4 {t('utils.seats')}
                                            </label>
                                        </div>
                                        <div className={'col-md-6'}>
                                            <input className="form-check-input" type="radio" name="no4"
                                                id="three" />
                                            <label className="form-check-label" htmlFor="three">
                                                6 {t('utils.seats')}
                                            </label>
                                        </div>
                                        <div className={'col-md-6'}>
                                            <input className="form-check-input" type="radio" name="no4"
                                                id="four" />
                                            <label className="form-check-label" htmlFor="four">
                                                8 {t('utils.seats')}
                                            </label>
                                        </div>
                                    </div>
                                    <h1>{t('utils.color')}</h1>

                                    <div className={'row my-3'}>
                                        <div className={'col-md-6 mb-2'}>
                                            <input className="form-check-input" type="radio" name="black"
                                                id="five" />
                                            <label className="form-check-label" htmlFor="five">
                                                {t('utils.black')}
                                            </label>
                                        </div>
                                        <div className={'col-md-6 mb-2'}>
                                            <input className="form-check-input" type="radio" name="black"
                                                id="six" />
                                            <label className="form-check-label" htmlFor="six">
                                                {t('utils.white')}
                                            </label>
                                        </div>
                                        <div className={'col-md-6 mb-2'}>
                                            <input className="form-check-input" type="radio" name="black"
                                                id="seven" />
                                            <label className="form-check-label" htmlFor="seven">
                                                {t('utils.green')}
                                            </label>
                                        </div>
                                        <div className={'col-md-6'}>
                                            <input className="form-check-input" type="radio" name="black"
                                                id="eight" />
                                            <label className="form-check-label" htmlFor="eight">
                                                {t('utils.dblue')}
                                            </label>
                                        </div>
                                        <div className={'col-md-6'}>
                                            <input className="form-check-input" type="radio" name="black"
                                                id="nine" />
                                            <label className="form-check-label" htmlFor="nine">
                                                {t('utils.lblue')}
                                            </label>
                                        </div>
                                        <div className={'col-md-6'}>
                                            <input className="form-check-input" type="radio" name="black"
                                                id="ten" />
                                            <label className="form-check-label" htmlFor="ten">
                                                {t('utils.pattern')}
                                            </label>
                                        </div>
                                    </div>
                                    <h1>{t('utils.brand')}</h1>

                                    <div className={'row my-3'}>
                                        <div className={'col-md-6 mb-2'}>
                                            <input className="form-check-input" type="radio" name="Brand"
                                                id="eleven" />
                                            <label className="form-check-label" htmlFor="eleven">
                                                20
                                        </label>
                                        </div>
                                        <div className={'col-md-6 mb-2'}>
                                            <input className="form-check-input" type="radio" name="Brand"
                                                id="twelve" />
                                            <label className="form-check-label" htmlFor="twelve">
                                                25
                                        </label>
                                        </div>
                                        <div className={'col-md-6 '}>
                                            <input className="form-check-input" type="radio" name="Brand"
                                                id="thirteen" />
                                            <label className="form-check-label" htmlFor="thirteen">
                                                30
                                        </label>
                                        </div>
                                    </div>
                                    <h1>{t('utils.type')}</h1>

                                    <div className={'row my-3'}>
                                        <div className={'col-md-6 mb-2'}>
                                            <input className="form-check-input" type="radio" name="Type"
                                                id="fourteen" />
                                            <label className="form-check-label" htmlFor="fourteen">
                                            {t('utils.lift')}
                                        </label>
                                        </div>
                                        <div className={'col-md-6 mb-2'}>
                                            <input className="form-check-input" type="radio" name="Type"
                                                id="fifteen" />
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
            </form>

        </div>

    );
}
