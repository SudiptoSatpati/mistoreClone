import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = ({ cards }) => {
  return (
    <Carousel fade>
      {cards.map((item) => (
        <Carousel.Item key={item.image} id="banner" interval={2000}>
          <img className="d-block w-1000" src={item.image} alt="image" />
          <Carousel.Caption>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.source}</p>
            <u>Read more</u>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Banner;
