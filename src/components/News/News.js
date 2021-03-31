import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Truncate from 'react-truncate';
import './News.scss';
import cart from './Assets/golf-cart.png';
import plug from './Assets/electric_plug.png';
import fork from './Assets/forklift.png';
import outline from './Assets/outline.png';
import vehicle from './Assets/electric-vehicle.png';
import Blogs from './Blogs/Blogs';
import Header from '../Shared/Header/Header'

const { BASE_URL } = require('../../config');


export default function News() {

    const changeblog= (e) => {
        let mblog = e.target.name
        setBlogcat(mblog)
        console.log(mblog);
    }

    const [blogcat, setBlogcat] = useState("golf-car");
    const [data, setData] = useState({
        1: [],
        2: [],
        3: [],
        4: [],
        5: []
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/articles`).then(response => {
            let dataObj = {
                1: [],
                2: [],
                3: [],
                4: [],
                5: []
            };
            response.data.data.forEach( item => {
                dataObj[item.category_id].push(item);
            })
            setData(dataObj);
        });
    },[blogcat])

    return (
        <div>
            <Header className="header" title={'News'} />
            <div id={'news'} className={'container'}>
                <div className="d-flex flex-wrap align-items-start">
                    <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button name="golf-car" onClick={changeblog} className="nav-link filters active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                            <div className={'white-box'}>
                                <img className={'filter-img'} src={cart} alt="" />
                            </div>
                            <p className={'filter-name'}>Golf cart & utilities</p>
                        </button >
                        <button  name="electric" onClick={changeblog} className="nav-link filters" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                            <div className={'white-box'}>
                                <img className={'filter-img'} src={vehicle} alt="" />
                            </div>
                            <p className={'filter-name'}>Electric vehicles</p>
                        </button>
                        <button name="golf-car" onClick={changeblog} className="nav-link filters" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                            <div className={'white-box'}>
                                <img className={'filter-img'} src={outline} alt="" />
                            </div>
                            <p className={'filter-name'}>Electric cleaning equipment</p>
                        </button>
                        <button name="golf-car" onClick={changeblog} className="nav-link filters" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                            <div className={'white-box'}>
                                <img className={'filter-img'} src={fork} alt="" />
                            </div>
                            <p className={'filter-name'}>Electric handling equipment</p>
                        </button>
                        <button name="golf-car" onClick={changeblog} className="nav-link filters" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-setting" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                            <div className={'white-box'}>
                                <img className={'filter-img'} src={plug} alt="" />
                            </div>
                            <p className={'filter-name'}>Electric handling equipment</p>
                        </button>
                    </div>

                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><Blogs  articles={data[1]} /></div>
                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"><Blogs articles={data[2]} /></div>
                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"><Blogs articles={data[3]} /></div>
                        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab"><Blogs articles={data[4]} /></div>
                        <div className="tab-pane fade" id="v-pills-setting" role="tabpanel" aria-labelledby="v-pills-setting-tab"><Blogs articles={data[5]} /></div>
                    </div>

                </div>
            </div>
        </div>
    );
}
