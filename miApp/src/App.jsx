import React from "react";
import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./components/Slider";
import {
  banner,
  offer,
  starProduct,
  hotAccessories,
  hotAccessoriesCover,
  productReviews,
  videos,
  footer,
  miPhones,
  redmiPhones,
  tv,
  laptop,
  fitnessAndLifeStyle,
  home,
  audio,
  accessories,
} from "./data/data.json";
import Offers from "./components/Offers";
import Heading from "./components/Heading";
import StarProduct from "./components/StarProduct";
import HotAccMenu from "./components/HotAccMenu";
import HotAccessories from "./components/HotAccessories";
import ProductReviews from "./components/ProductReviews";
import Videos from "./components/Videos";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import NavOptions from "./components/NavOptions";

const App = () => {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <NavOptions
        miPhones={miPhones}
        redmiPhones={redmiPhones}
        tv={tv}
        laptop={laptop}
        fitnessAndLifeStyle={fitnessAndLifeStyle}
        home={home}
        audio={audio}
        accessories={accessories}
      />
      <Slider first={banner.start} />
      <Offers offer={offer} />
      <Heading text="STAR PRODUCT" />
      <StarProduct starProduct={starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccMenu />
      <Routes>
        <Route
          path="/music"
          element={
            <HotAccessories
              music={hotAccessories.music}
              musicCover={hotAccessoriesCover.music}
            />
          }
        />
        <Route
          path="/smartDevices"
          element={
            <HotAccessories
              smartDevice={hotAccessories.smartDevice}
              smartDeviceCover={hotAccessoriesCover.smartDevice}
            />
          }
        />
        <Route
          path="/home"
          element={
            <HotAccessories
              home={hotAccessories.home}
              homeCover={hotAccessoriesCover.home}
            />
          }
        />
        <Route
          path="/lifestyles"
          element={
            <HotAccessories
              lifestyle={hotAccessories.lifeStyle}
              lifestyleCover={hotAccessoriesCover.lifeStyle}
            />
          }
        />
        <Route
          path="/mobileAccessories"
          element={
            <HotAccessories
              mobileAccessories={hotAccessories.mobileAccessories}
              mobileAccessoriesCover={hotAccessoriesCover.mobileAccessories}
            />
          }
        />
      </Routes>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={productReviews} />
      <Heading text="VIDEOS" />
      <Videos videos={videos} />
      <Heading text="IN THE PRESS" />
      <Banner cards={banner.end} />
      <Footer footer={footer} />
    </Router>
  );
};

export default App;
