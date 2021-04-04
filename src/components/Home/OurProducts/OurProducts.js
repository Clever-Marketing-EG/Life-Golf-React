import React, { useState, useEffect } from "react";
import './OurProducts.scss';
import Slider from './Slider';

export default function OurProducts({ categories, products, meta }) {

    const [activeCategory, setActiveCategory] = useState(1);
    const [activeProducts, setActiveProducts] = useState([]);

    const [data, setData] = useState({
        categories: [],
        products: []
    });

    const lang = localStorage.getItem("lang")

    useEffect( () => {
        const newProductsData = data['products'].filter( item =>
            item['category_id'] === activeCategory
        )
        setActiveProducts(newProductsData);
    }, [activeCategory])

    useEffect( () => {
        const dataObj = {
            categories: [],
            products: [],
        };

        if( lang === 'ar') {
            dataObj.categories = categories.map(item => ({
                    'id': item['id'],
                    'name': item['name_ar'],
                    'image_url': item['image_url']
                })
            )
            dataObj.products = products.map( item => ({
                'name': item['name_ar'],
                'image_url': item['image_url'],
                'category_id': item['category_id']
            }))
        } else {
            dataObj.categories = categories.map(item => ({
                    'id': item['id'],
                    'name': item['name'],
                    'image_url': item['image_url']
                })
            )
            dataObj.products = products.map( item => ({
                'name': item['name'],
                'image_url': item['image_url'],
                'category_id': item['category_id']
            }))
        }
        setActiveProducts(dataObj.products);
        setData(dataObj);
    }, [categories, products])

    function handlClick(id) {
        setActiveCategory(id);
    }

    return (
        <div id={'our-products'} className={'container'}>
            <h1 className={'home-header'}>{meta.products_header}</h1>
            <hr className={'blue-line'} />
            <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                {
                    data['categories'].map( (item, index) => (
                        <CategoryButton
                            key={index}
                            id={item.id}
                            title={item.name}
                            handlClick={handlClick}
                        />
                    ))
                }

            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <Slider products={activeProducts} />
                </div>
            </div>
        </div>
    )
}

function CategoryButton({ id, title, handlClick }) {
    return(
        <li className="nav-item" role="presentation">
            <button onClick={() => handlClick(id)} className="category-button nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                <span className={'logo-container me-3'}>
                    <i className="icon-golf-cart" />
                </span>
                {title}
            </button>
        </li>
    )
}
