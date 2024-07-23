import React from "react";
import "../styles/ReviewCard.css";

const ReviewCard = ({ image, name, review, price, index }) => {
  return (
    <div className="ProductReviewCard">
      <img src={image} alt={`${index} no image`} />
      <h5>{review}</h5>
      <span>{name}</span>
      <b>{price}</b>
    </div>
  );
};

export default ReviewCard;
