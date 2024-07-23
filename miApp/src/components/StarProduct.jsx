import React from "react";
import "../styles/StarProduct.css";

const StarProduct = ({ starProduct }) => {
  return (
    <div className="starProductContainer">
      <div>
        <a href={starProduct[0].url}>
          <img src={starProduct[0].image} alt="" />
        </a>
      </div>
      <div>
        <a href={starProduct[1]}>
          <img src={starProduct[1].image} alt="" />
        </a>
        <a href={starProduct[2]}>
          <img src={starProduct[2].image} alt="" />
        </a>
        <a href={starProduct[3]}>
          <img src={starProduct[3].image} alt="" />
        </a>
      </div>
    </div>
  );
};

export default StarProduct;
