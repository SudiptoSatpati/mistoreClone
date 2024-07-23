import React from "react";
import "../styles/Cards.css";

const HotCards = ({ name, price, image }) => {
  return (
    <div className="cards">
      <img src={image} alt="cardimage" />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  );
};

export default HotCards;
