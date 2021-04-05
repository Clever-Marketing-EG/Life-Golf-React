import React, { useState, useEffect } from 'react';
import './Form.scss';
import {useTranslation} from "react-i18next";
import Fetch from './Fetch';

export default function Form() {
    const {t} = useTranslation();

    const [data, setData] = useState({
        categories: [],
        products: []
    });

    useEffect(()=> {
        Fetch.categories()
            .then(fetchedCategories => {
                setData({...data, ...{categories: fetchedCategories}})
            })
    }, [])

    const changeCategory = async (e) => {
        const products = await Fetch.products(e.target.value);
        setData({...data, ...{products: products}});
    }

    const changeProduct = async (e) => {
        console.log(e.target.value);
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
                                    <input type="text" className="form-control" placeholder={t('utils.last-name')}/>

                                </div>
                                <div className={'col-sm-12'}>
                                    <input type="text" className="form-control" placeholder={t('utils.phone')}/>

                                </div>
                            </div>
                            <br />
                            <h1>{t('utils.product-details')}</h1>
                            <hr/>
                            <div className={'row'}>
                                <div className={'col-sm-12'}>
                                    <select className="form-select form-control dropdown-toggle col-sm-12" name={'category'} onChange={changeCategory}>
                                        {
                                            data.categories.map( (item, index) => (
                                                <option value={item.id} key={index}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>

                            <div className={'row row-cols-2 gy-3 gx-1'}>
                                {
                                    data.products.map((item, index) => {
                                        return (
                                            <div className={'col-sm-6 justify-content-around'} key={index}>
                                                <input className="form-check-input"  type="radio" name={'products'}
                                                    id={`product_${item.id}`} value={item.id} onClick={changeProduct} />
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
                                option ? <div className={'container'}>
                                    <h1>{t('utils.number-Of-seats')}</h1>

                                    <div className={'row my-3'}>
                                        <div className={'col-md-6 mb-2'}>
                                            <input className="form-check-input" type="radio" name="no4"
                                                id="one" />
                                            <label className="form-check-label" htmlFor="one">
                                                4 {t('utils.seats')}
                                        </label>
                                        </div>
                                        <div className={'col-md-6'}>
                                            <input className="form-check-input"  type="radio" name="no4"
                                                id="two" />
                                            <label className="form-check-label" htmlFor="two">
                                                6 {t('utils.seats')}
                                        </label>
                                        </div>
                                    </div>
                                    <h1>{t('utils.color')}</h1>

                                    <div className={'row my-3'}>
                                        <div className={'col-md-6 mb-2'}>
                                            <input className="form-check-input"  type="radio" name="black"
                                                id="three" />
                                            <label className="form-check-label" htmlFor="three">
                                            {t('utils.black')}
                                        </label>
                                        </div>
                                        <div className={'col-md-6'}>
                                            <input className="form-check-input"  type="radio" name="black"
                                                id="four" />
                                            <label className="form-check-label" htmlFor="four">
                                            {t('utils.white')}
                                        </label>
                                        </div>
                                    </div>
                                    <h1>{t('utils.brand')}</h1>

                                    <div className={'row my-3'}>
                                        <div className={'col-md-6 mb-2'}>
                                            <input className="form-check-input"  type="radio" name="Brand"
                                                id="five" />
                                            <label className="form-check-label" htmlFor="five">
                                                Brand1
                                        </label>
                                        </div>
                                        <div className={'col-md-6'}>
                                            <input className="form-check-input"  type="radio" name="Brand"
                                                id="six" />
                                            <label className="form-check-label" htmlFor="six">
                                                Brand2
                                        </label>
                                        </div>
                                    </div>








                                    <h1>Number Of seats:</h1>
                                    <div className={'row my-3'}>
                                        <div className={'col-md-6 mb-2'}>
                                            <input className="form-check-input"  type="radio" name="no6"
                                                id="six" />
                                            <label className="form-check-label" htmlFor="six">
                                                4 seats
                                        </label>
                                        </div>
                                        <div className={'col-md-6'}>
                                            <input className="form-check-input"  type="radio" name="no6"
                                                id="seven" />
                                            <label className="form-check-label" htmlFor="seven">
                                                6 seats
                                        </label>
                                        </div>
                                    </div>
                                    <h1>Color:</h1>

                                    <div className={'row my-3'}>
                                        <div className={'col-md-6 mb-2'}>
                                            <input className="form-check-input"  type="radio" name="white"
                                                id="eight" />
                                            <label className="form-check-label" htmlFor="eight">
                                                Black
                                        </label>
                                        </div>
                                        <div className={'col-md-6'}>
                                            <input className="form-check-input"  type="radio" name="white"
                                                id="nine" />
                                            <label className="form-check-label" htmlFor="nine">
                                                White
                                        </label>
                                        </div>
                                    </div>
                                    <h1>Brand:</h1>

                                    <div className={'row my-3 '}>
                                        <div className={'col-md-6 mb-2'}>
                                            <input className="form-check-input"  type="radio" name="br"
                                                id="ten" />
                                            <label className="form-check-label" htmlFor="ten">
                                                Brand1
                                        </label>
                                        </div>
                                        <div className={'col-md-6'}>
                                            <input className="form-check-input"  type="radio" name="br"
                                                id="eleven" />
                                            <label className="form-check-label" htmlFor="eleven">
                                                Brand2
                                        </label>
                                        </div>
                                    </div>
                                </div>


                                    : <div/>
                            }
                        </div>


                    </div>
                </div>
            </form>

        </div>

    );
}
