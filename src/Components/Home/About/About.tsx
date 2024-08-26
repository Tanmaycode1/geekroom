import React from 'react'
import styles from '@/Styles/About.module.scss';
import Image from 'next/image';
import About_Animation from '../../../../public/Images/About_Animation.gif';
import GeekRoomLogo from '../../../../public/Images/GeekRoomLogo.svg';


const About = () => {
  return (
    <div className={styles.About}>
      <div className={styles.aboutContainer}>
          <h2>What is <span style={{color: '#00ACB4'}}>Geek Room?</span></h2>
      <div className={styles.aboutContent}>
        <div className={styles.aboutContentText}>
          <p>Geek Room is a widespread coding community with over 7500+ active coders nationwide. It was started by three 1st year coding enthusiasts with the main objective to create a transparent community where sharing of ideas and helping other people is the main goal . Geek Room boasts of various hackathon winning teams , 6 independent institutes with Geek Room chapters and so much more.</p>
          <p>Our vast connections, a widespread community of over 7500+ coders nationwide, conduction of successful hackathons and events , boasting multi hackathon winning teams comprised purely of Geek Room members , a philosophy of a community of the coders , for the coders and by the coders and a transparent community where anyone can start coding easily , Geek Room is a unique trendsetter that is built for the upliftment of the Indian coding community</p>
        </div>
      </div>

      <div className={styles.aboutContent}>
        <div className={styles.aboutContentText}>
          <h2 className={styles.aboutHeadingUnderline} style={{fontSize: '30px'}}>What makes Geek Room unique?</h2>
          <p>Geek Room stands out as a unique, community-driven platform that fosters growth, learning, and collaboration in the world of technology. What makes it truly special is its combination of hands-on learning opportunities, diverse tech events, and community-led initiatives. From hackathons to coding challenges like Code Kshetra, TechMinds, Geek Insights, Cupid AI, Code Cubicle, and many more. Geek Room offers a wide array of experiences that allow members to apply their skills in real-world scenarios. By bringing together enthusiasts from various backgrounds, Geek Room creates a vibrant network for connection and collaboration.</p>
        </div>
        <Image src={GeekRoomLogo} alt='About_Image' />
      </div>
      </div>
    </div>
  )
}

export default About