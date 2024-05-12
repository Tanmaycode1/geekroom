import React from "react";
import CircleComponent from "./CircleComponent.jsx";
import "./section.css";

const Section = () => {
  return (
    <div className="MySection">
      <div className="Container">
        <h3 className="headTag">We see what others don’t.</h3>
        <div className="CircleSection">
          <CircleComponent text="Quality" />
          <CircleComponent text="Mentors" />
          <CircleComponent text="Develop" />
          <CircleComponent text="Product" />
        </div>
      </div>
    </div>
  );
};

export default Section;
