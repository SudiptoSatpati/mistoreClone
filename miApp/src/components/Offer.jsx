import React from "react";

const Offer = ({ index, src, url }) => {
  return (
    <div className="offer-img">
      <img src={src} alt="offerImage" />
    </div>
  );
};

export default Offer;
