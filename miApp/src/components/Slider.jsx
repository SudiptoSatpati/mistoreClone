import { Carousel } from "react-bootstrap";
import React from "react";

const Slider = ({ first }) => {
  return (
    <Carousel fade>
      {first.map((item) => (
        <Carousel.Item key={item}>
          <img className="d-block w-1000" src={item} alt="image" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
