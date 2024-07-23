import React, { useEffect, useState } from "react";
import NavCard from "./NavCard";
import "../styles/NavOptions.css";

const NavOptions = ({
  miPhones,
  redmiPhones,
  tv,
  laptop,
  fitnessAndLifeStyle,
  home,
  audio,
  accessories,
}) => {
  const [miPhonesToggle, setMiPhonesToggle] = useState(false);
  const [redmiPhonesToggle, setredmiPhonesToggle] = useState(false);
  const [tvToggle, setTvToggle] = useState(false);
  const [laptopToggle, setlaptopToggle] = useState(false);
  const [fitnessAndLifeStyleToggle, setlifeStyleToggle] = useState(false);
  const [homeToggle, sethomeToggle] = useState(false);
  const [audioToggle, setAudioToggle] = useState(false);
  const [accessoriesToggle, setAccessoriesToggle] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/miphones") {
      return setMiPhonesToggle(true);
    }
    if (window.location.pathname === "/laptop") {
      return setlaptopToggle(true);
    }
    if (window.location.pathname === "/lifestyle") {
      return setlifeStyleToggle(true);
    }
    if (window.location.pathname === "/redmiphones") {
      return setredmiPhonesToggle(true);
    }
    if (window.location.pathname === "/tv") {
      return setTvToggle(true);
    }
    if (window.location.pathname === "/home") {
      return sethomeToggle(true);
    }
    if (window.location.pathname === "/audio") {
      return setAudioToggle(true);
    }
    if (window.location.pathname === "/accessories") {
      return setAccessoriesToggle(true);
    }
  }, []);
  return (
    <div className="navOptions">
      {miPhonesToggle
        ? miPhones.map((item, index) => (
            <NavCard
              key={item.image}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))
        : null}{" "}
      {tvToggle
        ? tv.map((item, index) => (
            <NavCard
              key={item.image}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))
        : null}{" "}
      {laptopToggle
        ? laptop.map((item, index) => (
            <NavCard
              key={item.image}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))
        : null}{" "}
      {fitnessAndLifeStyleToggle
        ? fitnessAndLifeStyle.map((item, index) => (
            <NavCard
              key={item.image}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))
        : null}{" "}
      {redmiPhonesToggle
        ? redmiPhones.map((item, index) => (
            <NavCard
              key={item.image}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))
        : null}{" "}
      {homeToggle
        ? home.map((item, index) => (
            <NavCard
              key={item.image}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))
        : null}{" "}
      {audioToggle
        ? audio.map((item, index) => (
            <NavCard
              key={item.image}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))
        : null}{" "}
      {accessoriesToggle
        ? accessories.map((item, index) => (
            <NavCard
              key={item.image}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))
        : null}{" "}
    </div>
  );
};

export default NavOptions;
