import React, { useState, useEffect } from 'react';
import './LeftForm.scss';
export default function LeftForm({meta}) {
    // window.onload = function () {
    //     let btnAdd = document.querySelector('#add');
    //     let btnSubtract = document.querySelector('#subtract');
    //     let input = document.querySelector('#counter');
    //     btnAdd.addEventListener('click', () => {
    //         input.value = parseInt(input.value) + 1;
    //     });
    //     btnSubtract.addEventListener('click', () => {
    //         input.value = parseInt(input.value) - 1;
    //     });
    // };
    const [count, setCount] = useState(0);


    return (
        <div id={'left'} className={'mt-5'}>

            <form>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-md-6'}>
                            <h1>{meta.electronic_personal}</h1>
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
                            <h1>{meta.electronic_shipping}</h1>
                            <hr />
                            <div className={'row'}>
                                <div className={'col-sm-12'}>
                                    <input type="text" class="form-control" placeholder="Address" />

                                </div>
                                <div className={'col-sm-6'}>
                                    <input type="text" class="form-control" placeholder="Block" />
                                </div>
                                <div className={'col-sm-6'}>
                                    <input type="text" class="form-control" placeholder="Street" />

                                </div>
                                <div className={'col-sm-4'}>
                                    <input type="text" class="form-control" placeholder="Avenue" />
                                </div>
                                <div className={'col-sm-4'}>
                                    <input type="text" class="form-control" placeholder="house" />
                                </div>
                                <div className={'col-sm-4'}>
                                    <input type="text" class="form-control" placeholder="Flat" />
                                </div>
                                <div className={'col-sm-6'}>
                                    <select class="form-select form-control">
                                        <option selected>Country</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className={'col-sm-6'}>
                                    <input type="text" class="form-control" placeholder="Postal code" />

                                </div>

                            </div>

                        </div>
                        <div className={'col-md-6'}>
                            <h1>{meta.electronic_payment}</h1>
                            <hr />
                            <div className={'row'}>
                                {/* <div className={'col-sm-12'}>
                                    <input type="text" class="form-control" placeholder="Card number" />

                                </div>
                                <div className={'col-sm-6'}>
                                    <input type="text" class="form-control" placeholder="Card holder name" />
                                </div>
                                <div className={'col-sm-6'}>
                                    <input type="text" class="form-control" placeholder="CVV" />

                                </div> */}

                            </div>
                            <br />
                            <h1>{meta.electronic_product}</h1>
                            <hr />
                            <div className={'row'}>
                                <div class="number">
                                    <label>Number of items:</label>
                                    <button id={'subtract'} class="minus" onClick={(e) => {
                                        e.preventDefault()
                                        if (count <= 0) {
                                            setCount(0);

                                        } else {
                                            setCount(count - 1);

                                        }
                                    }}>-</button>
                                    <input id={'counter'} className={'input-fi'} type="" value={count} />
                                    <button id={'add'} class="plus" onClick={(e) => {
                                        e.preventDefault()
                                        setCount(count + 1);
                                    }}>+</button>
                                </div>
                                <br /><br />
                                <div class="form-group">
                                    <textarea
                                        class="form-control"
                                        rows="6"
                                        id="comment"
                                        placeholder="Description"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'row justify-content-center mt-5'}>
                    <button className={'btn send-btn'} type="submit">Send</button>

                </div>
            </form>

        </div>
    );
}