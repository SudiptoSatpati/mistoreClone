import React from "react";
import HotCards from "./HotCards";
import "../styles/HotAccessories.css";

const HotAccessories = ({
  music,
  musicCover,
  smartDevice,
  smartDeviceCover,
  home,
  homeCover,
  lifestyle,
  lifestyleCover,
  mobileAccessories,
  mobileAccessoriesCover,
}) => {
  return (
    <div className="hotAccessories">
      <div>
        <img
          src={
            musicCover ||
            smartDeviceCover ||
            homeCover ||
            lifestyleCover ||
            mobileAccessoriesCover
          }
          alt="coverImage"
        />
      </div>

      <div>
        {music &&
          music.map((item, index) => (
            <HotCards
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        {smartDevice &&
          smartDevice.map((item, index) => (
            <HotCards
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        {home &&
          home.map((item, index) => (
            <HotCards
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        {lifestyle &&
          lifestyle.map((item, index) => (
            <HotCards
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        {mobileAccessories &&
          mobileAccessories.map((item, index) => (
            <HotCards
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}

        <HotCards image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
      </div>
    </div>
  );
};

export default HotAccessories;
