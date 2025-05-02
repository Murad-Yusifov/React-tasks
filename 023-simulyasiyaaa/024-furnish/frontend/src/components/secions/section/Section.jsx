import React from "react";
import "./Section.scss";

const Section = () => {
  return (
    <div className="background">
      <div className="text">
        <div className="texture">
        <p className="best">
          Best Design of <b>Furniture Collections</b>{" "}
        </p>
        <p className="small">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
        <button className="btn">DISCOVER</button>
        </div>
      </div>

      <div className="img">
        <img
          src="https://preview.colorlib.com/theme/furnish/images/bg_2.jpg.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default Section;
