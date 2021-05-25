import React from "react";
import Config from "./Configurations/Configurations";
import Features from "./Features/Features";
import Specs from "./Specifications/Specifications";
import single from "../../assets/Products/single.png";
import Products from "../Home/OurProducts/OurProducts";
import "./SingleProduct.scss";
import ok from "../../assets/Products/ok.svg";
import Header from '../Shared/Header/Header'
import Images from './images'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
export default function SingleProduct() {

  return (
      <div id={"single-product"}>
        <Header className="header" title={'Product'}  />
        <div className="container">
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="row">
            <div className="col">
              <br />
              <br />
              <br />
              <div className="product">
                <div className="pinkbg"></div>
                <img className="s-product" src={single} /><br /><br /><br /><br /><br />
                <Images />
              </div>
            </div>
            <div className="col">
              <br />
              <br />
              <br />
              <h2 className="ptitle">Electric Shuttle Bus DN-11</h2>
              <hr className="underline" />
              <ul className="myul">
                <li>
                  <img src={ok} /> Smart steering system
                </li>
                <li>
                  <img src={ok} /> Rustproof body structure
                </li>
                <li>
                  <img src={ok} /> Consistent and efficient electric drive-train
                </li>
                <li>
                  <img src={ok} /> Brochure Sightseeing Bus
                </li>
              </ul>
              <p className="parg">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et.
              </p>
              <br />
              <br />
              <br />
              <button className="btn primarybtn">Order Now</button>
            </div>
          </div>
        </div>
        <br/>
        <div className="container">
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Features">
              <Features />
            </Tab>
            <Tab eventKey="profile" title="Config">
              <Config />
            </Tab>
            <Tab eventKey="contact" title="Specification">
              <Specs />
            </Tab>
          </Tabs>
        </div>

        <br />
        <Products />
        <br />
        <br />
      </div>
  );
}
