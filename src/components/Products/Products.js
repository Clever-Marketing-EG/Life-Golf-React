import React, { useState, useEffect } from 'react';
import "./Products.scss";
import Header from "../Shared/Header/Header";
import {Link} from 'react-router-dom'
import axios from 'axios'
import Truncate from "react-truncate";


const { BASE_URL } = require('../../config');


export default function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/products`).then(response => {
            const lang = localStorage.getItem('lang');
            let dataArr;
            if (lang === 'ar') {
                dataArr = response.data.data.map( item => ({
                    id: item.id,
                    name: item.name_ar,
                    description: item.description_ar,
                    year: new Date(item.created_at).getFullYear(),
                    image_url: item.images[0] ? item.images[0].url : ''
                }))
            } else {
                dataArr = response.data.data.map( item => ({
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    year: new Date(item.created_at).getFullYear(),
                    image_url: item.images[0] ? item.images[0].url : ''
                }))
            }
            console.log(dataArr);
            setProducts(dataArr);
        });
    },[])


    return (
        <div>
            <Header title={'Products'} />
            <div>
                <div id={"products"} className="container">
                    <div className="d-flex flex-wrap justify-content-around align-items-center">
                        {
                            products.map( (item, index) => (
                                <ProductCard item={item} key={index} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}


function ProductCard( {item} ) {
    return (
        <div>
            <div className="card col-card">
                <div className="head-div position-relative">
                    <p className="tag position-absolute top-10 end-0 bg-white">{item.year}</p>
                    <img src={item.image_url} className="card-img-top product-img" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="title">{item.name}</h5>
                    <p>
                        <Truncate lines={3}>
                            {item.description}
                        </Truncate>
                    </p>
                    <br />
                    <br />
                    <div className="mrow">
                        <Link to={`/products/${item.id}`} className={'btn primarybtn block w-100'}>
                            See More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
