import React from "react";
import "./Frame.css";
import { NavLink } from "react-router-dom";


const Frame = () => {
  return (
    <div className="frame_container">

      <div className="frame_header ">
        {/* Your content for the header frame*/}
        <div className="join-us-for2">Join us for exciting</div>
        <div className="eventBtn">
          <div>
            <NavLink exact to="/events" className="about-us7" style={{'textDecoration':'none'}}>
              EVENTS
            </NavLink>
            <div className="underline"></div>
          </div>
          <div className="arrow-right-solid-1-icon2" loading="lazy" alt="">
            <i class="fa-solid fa-arrow-right-long"></i>
          </div>
        </div>
      </div>

      <div className="frame_header">
        <article className="grid-gallery">
           <img src={require("../images/img1.jpeg")} alt="description of picture 1" />
          <img src={require("../images/img12.JPG")} alt="description of picture 2" />
          <img src={require("../images/img5.jpeg")} alt="description of picture 3" />
          <img src={require("../images/img16.JPG")} alt="description of picture 4" />
          <img src={require("../images/img13.jpg")} alt="description of picture 5" />
          <img src={require("../images/img6.jpeg")} alt="description of picture 6" />
          <img src={require("../images/img17.JPG")} alt="description of picture 7" />
          <img src={require("../images/img14.jpg")} alt="description of picture 8" />
          {/* <img className="img9" src={require("../images/img1.png")} alt="description of picture 9" />
          
            Too add more image comment it out :)
          
          <img className="img10" src={require("../images/img1.png")} alt="description of picture 10" />
          <img className="img11" src={require("../images/img1.png")} alt="description of picture 11" />
          <img className="img12" src={require("../images/img1.png")} alt="description of picture 12" />
           */}
        </article>
      </div>
    </div>
  );
};


export default Frame;
