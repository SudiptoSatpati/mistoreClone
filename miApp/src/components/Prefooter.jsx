import React from "react";
import "../styles/PreFooter.css";

const Prefooter = ({ icons }) => {
  return (
    <div className="PreFooter">
      {icons.map((item) => (
        <div key={item.para1}>
          {item.icon}
          <p>
            {" "}
            <b>{item.para1}</b> <br />
            {item.para2}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Prefooter;
