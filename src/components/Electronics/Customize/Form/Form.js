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

    const handleChange = (e) => {
        setData({data: categories[e.target.value]});
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
                                            <div className={'col-sm-6'}>
                                                <input className="form-check-input" type="radio" name="flexRadioDefault"
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
                    </div>
                </div>
            </form>

        </div>

    );
}
