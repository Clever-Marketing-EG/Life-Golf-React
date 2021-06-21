import React, { useState, useEffect } from 'react';
import "./Products.scss";
import Header from "../Shared/Header/Header";
import { Link } from 'react-router-dom'
import axios from 'axios'
import Truncate from "react-truncate";
import { useTranslation } from "react-i18next";
import Loader from '../Shared/Loader/Loader';
import { useParams, useHistory } from 'react-router-dom';
import Select from 'react-select';


const { BASE_URL } = require('../../config');


export default function Products() {

    const { id } = useParams();
    const { t } = useTranslation();
    const [subCategory, setSubCategory] = useState([]);
    const [category, setCategory] = useState();
    const [products, setProducts] = useState([]);
    const [activeSubCategory, setactiveSubCategory] = useState();
    const [isMobile, setIsMobile] = useState(Boolean);
    const [size, setSize] = React.useState(window.innerWidth)
    const lang = localStorage.getItem('lang');
    const options = [];
    let currentCategory = [];
    let history = useHistory();



    const SelectStyle = {
        control: styles => ({ ...styles, backgroundColor: 'white' }),
        option: styles => ({ ...styles, textAlign:"initial", backgroundColor:"rgba(3, 48, 112, 0.035)", color:"black" }),
    }

    const handleChangeCategory = (e) => {
        // console.log(e)
        history.push(`/products/category/${e.value}`);
    }

    //get all categories
    useEffect(() => {
        axios.get(`${BASE_URL}/categories`)
            .then(response => {
                window.scrollTo(0, 0);
                let dataArr;
                if (lang === 'ar') {
                    if (isMobile) {
                        response.data.data.map(item => {
                            options.push({ value: item.id, label: `${item.name_ar}` })
                        });
                        currentCategory.push( { value: response.data.data[id - 1].id, label: response.data.data[id - 1].name_ar });

                        setCategory(options);
                    }
                    else {
                        dataArr = response.data.data.map(item => ({
                            id: item.id,
                            name: item.name_ar,
                            image_url: item.image_url,
                        }))
                        setCategory(dataArr);
                    }

                } else {
                    if (isMobile) {
                        response.data.data.map(item => {
                            options.push({ value: item.id, label: `${item.name}` })
                        });
                        currentCategory.push( { value: response.data.data[id - 1].id, label: response.data.data[id - 1].name });
                        setCategory(options);
                    }
                    else {
                        dataArr = response.data.data.map(item => ({
                            id: item.id,
                            name: item.name,
                            image_url: item.image_url,
                        }
                        ))
                        setCategory(dataArr);
                    }
                }
            })
    }, [isMobile, id])


    // mobile section change
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
    //get all subcategories of category 
    useEffect(() => {
        axios.get(`${BASE_URL}/categories/${id}/subcategories`)
            .then(async response => {
                await setactiveSubCategory(response.data.data[0].id);
                window.scrollTo(0, 0);
                let dataArr;
                if (lang === 'ar') {
                    dataArr = response.data.data.map(item => ({
                        id: item.id,
                        name: item.name_ar,
                        image_url: item.image_url,
                    }))
                } else {
                    dataArr = response.data.data.map(item => ({
                        id: item.id,
                        name: item.name,
                        image_url: item.image_url,
                    }))
                }
                setSubCategory(dataArr);
            })
    }, [id])

    // get products of subcategory 
    useEffect(() => {
        axios.get(`${BASE_URL}/subcategories/${activeSubCategory}/products`).then(response => {
            let dataArr;
            if (lang === 'ar') {
                dataArr = response.data.data.map(item => ({
                    id: item.id,
                    name: item.name_ar,
                    description: item.description_ar,
                    year: new Date(item.created_at).getFullYear(),
                    images: item.images[0] ? item.images[0] : ''
                }))
            } else {
                dataArr = response.data.data.map(item => ({
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    year: new Date(item.created_at).getFullYear(),
                    images: item.images[0] ? item.images[0] : ''
                }))
            }
            setProducts(dataArr);
        });

    }, [activeSubCategory])

    // if (products.length === 0)
    //     return <Loader />
    // else
    return (
        <div>
            <Header title={"Products"} />
            <div>
                <div id={"products"} className="container">
                    <div className={'row justify-content-center'} dir={t('dir')}>
                        {isMobile ?
                            <div>
                                <Select
                                    className="mb-5 test basic-single"
                                    // classNamePrefix="select"
                                    defaultValue={currentCategory}
                                    options={category}
                                    styles={SelectStyle}
                                    onChange={handleChangeCategory}
                                />
                            </div>
                            :
                            <div className="col-md-3 sidebar">
                                {category?.map((item, index) => (
                                    <Link to={`/products/category/${item.id}`}>
                                        <button
                                            name="activeCategory"
                                            id={item.id}
                                            className="filters active"
                                        >
                                            <div className={'white-box'}>
                                                <img className={'filter-img'} src={item.image_url} alt="" />
                                            </div>
                                            <p className={'filter-name'}>{item.name}</p>
                                        </button >
                                    </Link>
                                ))}
                            </div>
                        }
                        <div className={"col-md-9"}>
                            <div className={'row justify-content-center'}>
                                <div className={'row mb-2 justify-content-around'}>
                                    {
                                        subCategory?.map((item, index) => (
                                            <button
                                                className={'filter-btn'}
                                                onClick={() => { setactiveSubCategory(item.id) }}
                                            >
                                                {/* <div className={'row'}> */}
                                                <div>
                                                    <img className={'sub-filter-img'} src={item.image_url} alt={'...'} />
                                                    <p>{item.name}</p>
                                                </div>
                                                {/* </div> */}
                                            </button>
                                        ))}
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
                    <img src={item.images} className="card-img-top product-img" alt="..." />
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
