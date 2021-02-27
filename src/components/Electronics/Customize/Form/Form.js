import React, { useState, useEffect } from 'react';
import './Form.scss';

export default function Form() {

    const categories = {
        electricVehicle: [
            {
                "name": "Shuttle bus"
            },
            {
                "name": "Vintage car"
            },
            {
                "name": "Hunting cart"
            }
        ],
        two: [
            {
                "name": "Oil and gas field"
            }
        ],
        three: [],
    }

    const [data, setData] = useState({
        "data": []
    })
    const [option, setOption] = useState(false);
    const handleChange = (e) => {
        setData({ data: categories[e.target.value] });
    }
    const hadnleOption = () => {
        setOption(true);
        console.log(option);

    }

    return (
        <div id={'custom-form'}>
            <form>
                <br />
                <div className={'container mt-5'}>
                    <div className={'row'}>
                        <div className={'col-md-6'}>
                            <h1>Personal details</h1>
                            <hr />
                            <div className={'row'}>
                                <div className={'col-sm-6'}>
                                    <input type="text" className="form-control" placeholder="First name" />
                                </div>
                                <div className={'col-sm-6'}>
                                    <input type="text" className="form-control" placeholder="Last name" />

                                </div>
                                <div className={'col-sm-12'}>
                                    <input type="text" className="form-control" placeholder="Phone" />

                                </div>
                            </div>
                            <br />
                            <h1>Product details</h1>
                            <hr />
                            <div className={'row'}>
                                <div className={'col-sm-12'}>
                                    <select onChange={handleChange} defaultValue={'default'} className="form-select form-control">
                                        <option name={'default'} disabled value="default">Category</option>
                                        <option name="electricVehicle" value="electricVehicle">Electric Vehicle</option>
                                        <option name="two" value="two">Two</option>
                                        <option name="three" value="three">Three</option>
                                    </select>
                                </div>

                            </div>

                            <div className={'row row-cols-2 gy-3 gx-1'}>
                                {
                                    data.data.map(item => {
                                        return (
                                            <div className={'col-sm-6 justify-content-around'}>
                                                <input className="form-check-input" onClick={hadnleOption} type="radio" name="flexRadioDefault"
                                                    id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
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
                                    <h1>Number Of seats:</h1>

                                    <div className={'row my-3'}>
                                        <div className={'col-md-6 mb-2'}>
                                            <input className="form-check-input" onClick={hadnleOption} type="radio" name="no4"
                                                id="one" />
                                            <label className="form-check-label" htmlFor="one">
                                                4 seats
                                        </label>
                                        </div>
                                        <div className={'col-md-6'}>
                                            <input className="form-check-input" onClick={hadnleOption} type="radio" name="no4"
                                                id="two" />
                                            <label className="form-check-label" htmlFor="two">
                                                6 seats
                                        </label>
                                        </div>
                                    </div>
                                    <h1>Color:</h1>

                                    <div className={'row my-3'}>
                                        <div className={'col-md-6 mb-2'}>
                                            <input className="form-check-input" onClick={hadnleOption} type="radio" name="black"
                                                id="two" />
                                            <label className="form-check-label" htmlFor="two">
                                                Black
                                        </label>
                                        </div>
                                        <div className={'col-md-6'}>
                                            <input className="form-check-input" onClick={hadnleOption} type="radio" name="black"
                                                id="three" />
                                            <label className="form-check-label" htmlFor="three">
                                                White
                                        </label>
                                        </div>
                                    </div>
                                    <h1>Brand:</h1>

                                    <div className={'row my-3'}>
                                        <div className={'col-md-6 mb-2'}>
                                            <input className="form-check-input" onClick={hadnleOption} type="radio" name="Brand"
                                                id="four" />
                                            <label className="form-check-label" htmlFor="four">
                                                Brand1
                                        </label>
                                        </div>
                                        <div className={'col-md-6'}>
                                            <input className="form-check-input" onClick={hadnleOption} type="radio" name="Brand"
                                                id="five" />
                                            <label className="form-check-label" htmlFor="five">
                                                Brand2
                                        </label>
                                        </div>
                                    </div>
                                    <h1>Number Of seats:</h1>
                                    <div className={'row my-3'}>
                                        <div className={'col-md-6 mb-2'}>
                                            <input className="form-check-input" onClick={hadnleOption} type="radio" name="no6"
                                                id="six" />
                                            <label className="form-check-label" htmlFor="six">
                                                4 seats
                                        </label>
                                        </div>
                                        <div className={'col-md-6'}>
                                            <input className="form-check-input" onClick={hadnleOption} type="radio" name="no6"
                                                id="seven" />
                                            <label className="form-check-label" htmlFor="seven">
                                                6 seats
                                        </label>
                                        </div>
                                    </div>
                                    <h1>Color:</h1>

                                    <div className={'row my-3'}>
                                        <div className={'col-md-6 mb-2'}>
                                            <input className="form-check-input" onClick={hadnleOption} type="radio" name="white"
                                                id="eight" />
                                            <label className="form-check-label" htmlFor="eight">
                                                Black
                                        </label>
                                        </div>
                                        <div className={'col-md-6'}>
                                            <input className="form-check-input" onClick={hadnleOption} type="radio" name="white"
                                                id="nine" />
                                            <label className="form-check-label" htmlFor="nine">
                                                White
                                        </label>
                                        </div>
                                    </div>
                                    <h1>Brand:</h1>

                                    <div className={'row my-3 '}>
                                        <div className={'col-md-6 mb-2'}>
                                            <input className="form-check-input" onClick={hadnleOption} type="radio" name="br"
                                                id="ten" />
                                            <label className="form-check-label" htmlFor="ten">
                                                Brand1
                                        </label>
                                        </div>
                                        <div className={'col-md-6'}>
                                            <input className="form-check-input" onClick={hadnleOption} type="radio" name="br"
                                                id="eleven" />
                                            <label className="form-check-label" htmlFor="eleven">
                                                Brand2
                                        </label>
                                        </div>
                                    </div>
                                </div>


                                    : <div></div>
                            }
                        </div>


                    </div>
                </div>
            </form>

        </div>

    );
}
