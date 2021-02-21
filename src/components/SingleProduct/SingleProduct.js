import React, { useState, useEffect } from "react";
import Config from "./Configurations/Configurations";
import Features from "./Features/Features";
import Specs from "./Specifications/Specifications";
import single from "../../assets/Products/single.png";
import SimilarProducts from "./SimalarProducts/SimilarProducts";
import "./SingleProduct.scss";
import ok from "../../assets/Products/ok.svg";
export default function SingleProduct() {
  const [page, setPage] = useState(0);
  const [data, setData] = useState(<Features />);
  const pageswitch = (e) => {
    const page = e.target.name;
    setPage(page);
  };
  useEffect(() => {
    if (page == 0) {
      setData(<Features />);
    } else if (page == 1) {
      setData(<Specs />);
    } else if (page == 2) {
      setData(<Config />);
    }
  }, [pageswitch]);

  return (
    <div id={"single-product"}>
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
              <img className="s-product" src={single} />
            </div>
          </div>
          <div className="col">
            <br />
            <br />
            <br />
            <h2 className="title">Electric Shuttle Bus DN-11</h2>
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
      <br />
      <br />
      <br />
      <button onClick={pageswitch} name="0" className="btn primarybtn">
        page 1
      </button>
      <button onClick={pageswitch} name="1" className="btn primarybtn">
        page 2
      </button>
      <button onClick={pageswitch} name="2" className="btn primarybtn">
        page 3
      </button>
      {data}
      <br />
      <br />
      <SimilarProducts />
    </div>
  );
}
