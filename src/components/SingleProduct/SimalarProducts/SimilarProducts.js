import React, { useState, useEffect } from "react";
import product from "../../../assets/Products/product.png";
import Carousel from "react-elastic-carousel";
export default function SimilarProducts() {
  const [data, setData] = useState([{ id: 1, title: "item #1", img: product }]);
  setData([
    { id: 1, title: "item #1", img: product },
    { id: 2, title: "item #2", img: product },
    { id: 3, title: "item #3", img: product },
    { id: 4, title: "item #4", img: product },
    { id: 5, title: "item #5", img: product },
  ]);
  return (
    <div>
      <Carousel>
        {data.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </Carousel>
    </div>
  );
}
