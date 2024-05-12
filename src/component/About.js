import "./About.css";
import logo from "../images/GR_Logo-2.png";
import Sphere from "../component/BGSphere";

function AboutSection() {
  return (
    <section className="aboutSection">
      <div className="overall">
        <div className="space">
          <div className="sphere" style={{backgroundColor: 'rgba(241, 90, 34, 0.5)'}}></div>
          <div className='head h1'>Geekroom</div>
          <div className="para para1">Founded on 13 April, 2023 by 3 college students - Manas Chopra, Pratham Batra & Arnav Gupta - striving to make a change in the coding culture of various colleges.</div>
        </div>
        <div className="space">
          <div className='head h2'>is the</div>
          <div className="para ">The founders had one goal in mind — to increase the coding culture across multiple colleges and give the students inter-college exposure.</div>
          <div className='head h3'>community</div>
        </div>
        <div className="space">
          <div className="para">In the future we hope to include students from all across the country so that coding events are accessible to all.</div>
          <div className='head h4'>you need.</div>
          <div className="sphere" style={{backgroundColor: 'rgba(0, 172, 180, 0.5)'}}></div>
          
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
