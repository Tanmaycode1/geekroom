import React from "react";
import "./CircleComponent.css";

const CircleComponent = ({ text }) => {
  return (
    <div className="outerCircle">
      <div className="innerCircle">
        <span className="circleText">{text}</span>
      </div>
    </div>
  );
};

export default CircleComponent;
