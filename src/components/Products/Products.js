import React, { useState, useEffect } from 'react';
import "./Products.scss";
import Header from "../Shared/Header/Header";
import { Link } from 'react-router-dom'
import axios from 'axios'
import Truncate from "react-truncate";
import { useTranslation } from "react-i18next";
import Loader from '../Shared/Loader/Loader';
import { useParams } from 'react-router-dom';
import cart from '../News/Assets/golf-cart.png';
import plug from '../News/Assets/electric_plug.png';
import fork from '../News/Assets/forklift.png';
import outline from '../News/Assets/outline.png';
import vehicle from '../News/Assets/electric-vehicle.png';
import testImg from './Product/Assets/test.jpg'
const { BASE_URL } = require('../../config');


export default function Products() {

    const { t } = useTranslation();
    const [subCategory, setSubCategory] = useState([0, 0, 0, 0]);
    const [products, setProducts] = useState([]);
    // const [activeCategory, setActiveCategory] = useState();
    const [isMobile, setIsMobile] = useState(Boolean);
    const [size, setSize] = React.useState(window.innerWidth)

    let { id } = useParams();

    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        if (size <= 800) {
            setIsMobile(true);
        }
        else {
            setIsMobile(false);
        }
        return () => window.removeEventListener("resize", updateWidth);
    }, [size])

    const updateWidth = () => {
        setSize(window.innerWidth)
    }

    useEffect(() => {
        const lang = localStorage.getItem('lang');
        axios.get(`${BASE_URL}/products`).then(response => {
            // let dataObj = {
            //     1: [], 2: [], 3: [], 4: [], 5: []
            // };

            // response.data.data.forEach(item => {
            //     dataObj[item.category_id].push(item);
            // })
            // setData(dataObj);

            let dataArr;
            if (lang === 'ar') {
                dataArr = response.data.data.map(item => ({
                    id: item.id,
                    name: item.name_ar,
                    description: item.description_ar,
                    year: new Date(item.created_at).getFullYear(),
                    image_url: item.image_url,
                    images: item.images[0] ? item.images[0].url : ''
                }))
            } else {
                dataArr = response.data.data.map(item => ({
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    image_url: item.image_url,
                    year: new Date(item.created_at).getFullYear(),
                    images: item.images[0] ? item.images[0].url : ''
                }))
            }
            setProducts(dataArr);
        });
        //     axios.get(`${BASE_URL}/categories/${id}`)
        //         .then( response => {
        //             if(lang==='ar') {
        //                 setActiveCategory(response.data.data.name_ar);
        //             } else {
        //                 setActiveCategory(response.data.data.name);
        //             }
        //         })
    }, [id])

    if (products.length === 0)
        return <Loader />
    else
        return (
            <div>
                <Header title={"Products"} />
                <div>
                    <div id={"products"} className="container">
                        <div className={'row justify-content-center'} dir={t('dir')}>
                            {isMobile ?
                                <select className={'mb-5'} name="cars" id="cars">
                                    <option className={'option'} value={``}>
                                        {t('categories.golf-carts-and-utilities')}
                                    </option>
                                </select>
                                :
                                <div className="col-md-3 sidebar" >
                                    <button name="golf-car" className="filters active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
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
                                </div>
                            }
                            <div className={"col-md-9"}>
                                <div className={'row justify-content-center'}>
                                    <div className={'row mb-2 justify-content-around'}>
                                        {
                                            subCategory.map((item, index) => (
                                                <button className={'filter-btn'}>
                                                    <div className={'row'}>
                                                        <img className={'sub-filter-img'} src={testImg} alt={'...'} />
                                                        <div>On road</div>
                                                    </div>
                                                </button>
                                            ))}
                                        {/* <button className={' filter-btn'}>
                                            <div className={'row'}>
                                                <div className={''}>
                                                    <img className={'sub-filter-img'} src={testImg} alt={'...'} />
                                                </div>
                                                <div className={''}>
                                                    <div>Off road</div>
                                                </div>
                                            </div>
                                        </button> */}
                                    </div>
                                    <div className={'mb-3 d-flex justify-content-center'}>
                                        <hr />
                                    </div>

                                    <div className={'row justify-content-around'} >
                                        {
                                            products.map((item, index) => (
                                                <ProductCard item={item} key={index} />
                                            ))
                                        }
                                    </div>

                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        );
}


function ProductCard({ item }) {
    const { t } = useTranslation();
    return (
        <div className="card col-card">
            <Link to={`/product/${item.id}`}>
                <div className="head-div position-relative">
                    {/* <p className="tag position-absolute top-10 end-0 bg-white">{item.year}</p> */}
                    <img src={item.image_url} className="card-img-top product-img" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="title">{item.name}</h5>
                    <p>
                        <Truncate lines={4}>
                            {item.description}
                        </Truncate>
                    </p>
                    <br />
                    <br />

                </div>
            </Link>
        </div>

    )
}
