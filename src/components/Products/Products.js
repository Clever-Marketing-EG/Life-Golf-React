import React, { useState, useEffect } from 'react';
import "./Products.scss";
import product from "../../assets/Products/product.png";
import icon1 from "../../assets/Products/icon-1.svg";
import icon2 from "../../assets/Products/icon-2.svg";
import icon3 from "../../assets/Products/icon-3.svg";
import Header from "../Shared/Header/Header";
import {Link} from 'react-router-dom'
import axios from 'axios'
export default function Products() {
  const { BASE_URL } = require('../../config');
  const [products, setProducts] = useState([]);
  const [cat, setCat] = useState([]);
  useEffect(() => {
    let catid = localStorage.getItem("category_id")
    axios.get(`${BASE_URL}/categories/${catid}`).then(response => {
      setCat(response.data.data);
    });
    axios.get(`${BASE_URL}/categories/${catid}/products`).then(response => {
      setProducts(response.data.data);
    });
  },[])
  return (
      <div id={"products"}>
        <Header title={cat.name} />
        <center>
        <div className="container">
        <div className="row">
       {products.map(item=>{
         return (
          <div className="col ">
          <div className="card col-card">
            <div className="head-div">
              {" "}
              <p className="tag">2016</p>
              <img src={item.image_url} className="card-img-top product-img" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="title">{item.name}</h5>
              <br />
              <br />
              <div className="mrow">
                <div className="col-4">
                  <div className="disc">
                    <img className="icon_d" src={icon1}  alt={'...'}/>
                    <p>20KM/h</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="disc">
                    <img className="icon_d"  src={icon2} />
                    <p>20KM/h</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="disc">
                    <img  className="icon_d"  src={icon3} />
                    <p>20KM/h</p>
                  </div>
                </div>
                <br />
                <br />
                <br />
                <Link onClick={()=>{
                  localStorage.setItem("product_id",item.id)
                }} to="/Product">
                <button className="btn primarybtn">See More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>  
         )
       })}
          </div>
        </div>
        </center>
      </div>
  );
}
