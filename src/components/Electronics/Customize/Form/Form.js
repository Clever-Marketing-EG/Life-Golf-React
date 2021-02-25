import React, { useState, useEffect } from 'react';
import './Form.scss';

export default function Form() {
    const [data, setData] = useState({
        "data": []
    })
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
                                    <input type="text" class="form-control" placeholder="First name" />
                                </div>
                                <div className={'col-sm-6'}>
                                    <input type="text" class="form-control" placeholder="Last name" />

                                </div>
                                <div className={'col-sm-12'}>
                                    <input type="text" class="form-control" placeholder="Phone" />

                                </div>
                            </div>
                            <br />
                            <h1>Product details</h1>
                            <hr />
                            <div className={'row'}>

                                <div className={'col-sm-12'}>
                                    <select onChange={(e) => {
                                        let x = e.target.value
                                        if (x == "cat1") {
                                            setData({
                                                "data": [
                                                    {
                                                        "name": "Shuttle bus"

                                                    },
                                                    {
                                                        "name": "Vintage car"

                                                    },
                                                    {
                                                        "name": "Hunting cart"

                                                    },
                                                ]
                                            })
                                        } else if (x == "cat2") {
                                            setData({
                                                "data": [
                                                    {
                                                        "name": "Oil and gas field"

                                                    }]
                                            })
                                        }
                                    }} class="form-select form-control">
                                        <option selected disabled>Category</option>
                                        <option name="cat1" value="cat1">Electric Vehicle</option>
                                        <option name="cat2" value="cat2">Two</option>
                                        <option name="cat3" value="cat3">Three</option>
                                    </select>
                                </div>

                            </div>

                            {

                                data.data.map(item => {
                                    return (
                                        <div className={'row'}>
                                            <div className={'col-sm-6'}>

                                                <button class="form-check category-button">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        {item.name}
                                                       
                                                    </label>
                                                </button>


                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </form>

        </div>

    );
}