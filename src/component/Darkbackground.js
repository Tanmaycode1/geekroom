import React from "react";

import "./DarkBackground.css";
import IncreasingNumber from "./IncreasingNumber";
import image1 from '../images/img1.png';
import image2 from '../images/img2.png';
import image3 from '../images/img3.png'
import Carousel from "./Carousel";
import Frame from "./Frame";
import ContactForm from "./ContactForm";
import Section from "./section";
import Faq from "./Faq";
import AboutSection from "./About";
import BGSphere from "./BGSphere";
import About from "../pages/About";

const DarkBackground = () => {
  const images = [image1,image2,image3];
  return (
    <>
    <div className="dark-background">
      <div className="features-frame">
        
        <div className="text-w-image-container">
          
          <div className="display-heading">
          <p className="geek-room">GEEK ROOM</p>
      <p className="display-text">Learn. Connect. Grow.</p>
          </div>
          <BGSphere className='sphere1' width={'415px'} height={'448px'} x={'85%'} y={'60%'} color={'rgba(0, 172, 180, 0.5)'}/>
          {/* <div
            className="ellipse-shape-icon">
              <Carousel images={images} interval={2000} />
            </div> */}
            
          
        </div>
      </div>
      <BGSphere width={'300px'} height={'300px'} x={'15%'} y={'75%'} color={'rgba(241, 90, 34, 0.5)'}/>
      <div className="section-title  ">
          <div className="features-pill">
            <div className="features">
              <div className="feature">
                <b className="k"><IncreasingNumber stoppingNumber={70} speed={70} />+</b>
                <div className="team-members">
                  <p className="team">Active</p>
                  <p className="members">Members</p>
                </div>
              </div>
              <div
                className="feature-divider-icon"
                
              />
              <div className="feature">
                <b className="k"><IncreasingNumber stoppingNumber={10} speed={500} />+</b>
                <div className="team-members">
                  <p className="events">Events</p>
                  <p className="organized">Organized</p>
                </div>
              </div>
              <div
                className="feature-divider-icon"
                
              />
              <div className="feature">
                <b className="k"><IncreasingNumber stoppingNumber={200} speed={25} />+</b>
                <div className="team-members">
                  <p className="team">Team</p>
                  <p className="members">Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      <About/>
      
    </div>
    <div className="framecontainer">
    <Frame/>
    </div>
    <Faq/>
    <div className="framecontainer">    
      <ContactForm/>
    </div>
    
    </>
  );
};

export default DarkBackground;
