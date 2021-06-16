import React, { useState, useEffect } from "react";
import './OurProducts.scss';
import Slider from './Slider';
import { useTranslation } from "react-i18next";
import axios from "axios";
const { BASE_URL } = require('../../../config');

export default function OurProducts({ categories, meta }) {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState(1);
    const [activeProducts, setActiveProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [isMobile, setIsMobile] = useState(Boolean);
    const [size, setSize] = React.useState(window.innerWidth)

    const [data, setData] = useState({
        categories: [],
        products: []
    });

    const lang = localStorage.getItem("lang")


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

    useEffect(() => {
        axios.get(`${BASE_URL}/categories/${activeCategory}/products?items=6`).then(response => {
            setProducts(response.data.data);
        });
    }, [activeCategory])
    useEffect(() => {
        const dataObj = {
            categories: [],
            products: [],
        };

        if (lang === 'ar') {
            dataObj.categories = categories.map(item => ({
                'id': item['id'],
                'name': item['name_ar'],
                'image_url': item['image_url']
            })
            )
            dataObj.products = products.map(item => ({
                'id': item['id'],
                'name': item['name_ar'],
                'image_url': item.images[0] ? item.images[0] : '',
                'category_id': item['category_id']
            }))
        } else {
            dataObj.categories = categories.map(item => ({
                'id': item['id'],
                'name': item['name'],
                'image_url': item['image_url']
            })
            )
            dataObj.products = products.map(item => ({
                'id': item['id'],
                'name': item['name'],
                'image_url': item.images[0] ? item.images[0] : '',
                'category_id': item['category_id']
            }))
        }
        setActiveProducts(dataObj.products);
        setData(dataObj);
    }, [categories, products])

    function handlClick(id) {
        setActiveCategory(id);
    }
    console.log(activeCategory);
    return (
        <div id={'our-products'} className={'container'} >
            <h1 className={'home-header'}>{meta.products_header}</h1>
            <hr className={'blue-line'} />
            <div className={'row justify-content-center'} dir={t('dir')}>
                {isMobile ?
                    <select id={'test'} className={'mb-5 mt-5'} onChange={(e) => setActiveCategory(e.target.value)}>
                        {data['categories'].map((item, index) => (
                            <option className={'option'} value={item.id}>
                                {item.name}
                            </option>
                        ))
                        }
                    </select>
                    :
                    <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                        {
                            data['categories'].map((item, index) => (
                                <CategoryButton
                                    key={index}
                                    id={item.id}
                                    title={item.name}
                                    handlClick={handlClick}
                                    dir={t('dir')}
                                />
                            ))
                        }
                    </ul>
                }
            </div>

            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <Slider products={activeProducts} dir={t('dir')} />
                </div>
            </div>
        </div>
    )
}

function CategoryButton({ id, title, handlClick }) {
    return (
        <li className="nav-item" role="presentation">
            <button onClick={() => handlClick(id)} className="category-button nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                <div className={'row'}>
                    <div className={'col-2'}>
                        <span className={'logo-container me-3'}>
                            <i className="icon-golf-cart"/>
                        </span>
                    </div>
                    <div className={'col-10 category-name'}>
                        {title}
                    </div>
                </div>
            </button>
        </li>
    )
}
