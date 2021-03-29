import React, { useState, useEffect } from "react";
import './OurProducts.scss';
import Slider from './Slider';

export default function OurProducts({ categories, products }) {

    const [data, setData] = useState({
        categories: [],
        products: []
    });

    const lang = localStorage.getItem("lang")

    useEffect( () => {
        const dataObj = {
            categories: [],
            products: [],
        };

        if( lang === 'ar') {
            categories.forEach( item => {
                const obj = {
                    'name': item['name_ar'],
                    'image_url': item['image_url']
                }
                dataObj['categories'].push(obj);
            })
            products.forEach( item => {
                const obj = {
                    'name': item['name_ar'],
                    'image_url': item['image_url']
                }
                dataObj['products'].push(obj);
            })
        } else {
            categories.forEach( item => {
                const obj = {
                    'name': item['name'],
                    'image_url': item['image_url']
                }
                dataObj['categories'].push(obj);
            })
            products.forEach( item => {
                const obj = {
                    'name': item['name'],
                    'image_url': item['image_url']
                }
                dataObj['products'].push(obj);
            })
        }
        console.log(dataObj);
        setData(dataObj);
    }, [categories, products])


    return (
        <div id={'our-products'} className={'container'}>
            <h1 className={'home-header'}>Our Products</h1>
            <hr className={'blue-line'} />
            <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                {
                    data['categories'].map( (item, index) => (
                        <CategoryButton title={item.name} key={index}/>
                    ))
                }

            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    {
                        data['products'].length === 0 ? <div /> :
                            <Slider products={data['products']} />
                    }
                </div>
            </div>
        </div>
    )
}

function CategoryButton({title}) {
    return(
        <li className="nav-item" role="presentation">
            <button className="category-button nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                <span className={'logo-container me-3'}>
                    <i className="icon-golf-cart" />
                </span>
                {title}
            </button>
        </li>
    )
}
