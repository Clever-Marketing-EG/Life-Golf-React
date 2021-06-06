import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './News.scss';
import cart from './Assets/golf-cart.png';
import plug from './Assets/electric_plug.png';
import fork from './Assets/forklift.png';
import outline from './Assets/outline.png';
import vehicle from './Assets/electric-vehicle.png';
import Blogs from './Blogs/Blogs';
import Header from '../Shared/Header/Header'
import { useTranslation } from "react-i18next";

const { BASE_URL } = require('../../config');


export default function News() {

    const { t } = useTranslation();


    const [data, setData] = useState([]
        // 1: [], 2: [], 3: [], 4: [], 5: []
    );

    const [pagination, setPagination] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect( async () => {
        window.scrollTo(0, 0);
        await axios.get(`${BASE_URL}/articles?page=${currentPage}`).then(response => {
            // let dataObj = {
            //     1: [], 2: [], 3: [], 4: [], 5: []
            // };

            // response.data.data.forEach(item => {
            //     dataObj[item.category_id].push(item);
            // })
            // setData(dataObj);
            setData(response.data.data);
            
            let dataArr = [];
            for (let i = 0; i < response.data.last_page; i++) {
                dataArr.push(
                    <li class="page-item"><a class="page-link" href="#page" id={i + 1} onClick={changePage}>{i + 1}</a></li>
                )
            }
            setPagination(dataArr);
        });
    }, [currentPage])

    const changePage = (e) => {
        setCurrentPage(e.target.id);
    }



    return (
        <div id={'page'}>
            <Header className="header" title={t('nav.news')} />
            <div id={'news'} className={'container'} dir={t('dir')} >
                <div className="d-flex justify-content-around flex-wrap align-items-start">
                    {/* <div className="nav flex-column nav-pills mx-2" id="v-pills-tab" role="tablist" aria-orientation="vertical"> */}

                        {/* <div class="search-container">
                        <form dir={t('dir')} action="/action_page.php" class="search-form">
                            <input type="text" placeholder={t('utils.search')} name="search" />
                            <button type="submit" dir={t('dir')} className={"pink-circle btn"}></button>
                            <img src={search} dir={t('dir')} className={"path"} alt="" />
                        </form>
                    </div> */}
                        {/* <button name="golf-car" className="nav-link filters active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                            <div className={'white-box'}>
                                <img className={'filter-img'} src={cart} alt="" />
                            </div>
                            <p className={'filter-name'}>{t('categories.golf-carts-and-utilities')}</p>
                        </button >
                        <button name="electric" className="nav-link filters" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                            <div className={'white-box'}>
                                <img className={'filter-img'} src={vehicle} alt="" />
                            </div>
                            <p className={'filter-name'}>{t('categories.electric-vehicles')}</p>
                        </button>
                        <button name="golf-car" className="nav-link filters" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                            <div className={'white-box'}>
                                <img className={'filter-img'} src={outline} alt="" />
                            </div>
                            <p className={'filter-name'}>{t('categories.electric-cleaning-equipments')}</p>
                        </button>
                        <button name="golf-car" className="nav-link filters" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                            <div className={'white-box'}>
                                <img className={'filter-img'} src={fork} alt="" />
                            </div>
                            <p className={'filter-name'}>{t('categories.electric-handling-equipments')}</p>
                        </button>
                        <button name="golf-car" className="nav-link filters" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-setting" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                            <div className={'white-box'}>
                                <img className={'filter-img'} src={plug} alt="" />
                            </div>
                            <p className={'filter-name'}>{t('categories.electronics')}</p>
                        </button>
                    </div> */}

                    <div className="tab-content" id="v-pills-tabContent" dir="ltr">
                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><Blogs articles={data} /></div>
                        {/* <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"><Blogs articles={data[2]} /></div>
                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"><Blogs articles={data[3]} /></div>
                        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab"><Blogs articles={data[4]} /></div>
                        <div className="tab-pane fade" id="v-pills-setting" role="tabpanel" aria-labelledby="v-pills-setting-tab"><Blogs articles={data[5]} /></div> */}
                    </div>

                </div>

                <nav className={'d-flex justify-content-center'} aria-label="Page navigation example">
                    <ul class="pagination">
                        {pagination}
                    </ul>
                </nav>

            </div>
        </div>
    );
}
