import React from 'react';
import styles from '@/Styles/Locations.module.scss';
import Image from 'next/image';

const collegeList = [
  { name: 'Maharaja Surajmal Institute of Technology', logo: '/Locations/msit.png' },
  { name: 'Jagan Institute of Management Studies', logo: '/Locations/JIMS.png' },
  { name: 'Institute of Information Technology & Management', logo: '/Locations/IITMJanakpuri.png' },
  { name: 'Bennett University', logo: '/Locations/Bennet.png' },

];

const sponsorList = [
  { name: 'Orkes', logo: '/Sponsors/Orkes.png' },
  { name: 'Coding Blocks', logo: '/Sponsors/CodingBlocks.jpg' },
  { name: 'Polygon', logo: '/Sponsors/Polygon.png' },
  { name: 'LazerCrazer', logo: '/Sponsors/LazerCrazer.png' },
  { name: 'Github', logo: '/Sponsors/Github.png' },
  { name: 'TechCanvas', logo: '/Sponsors/TechCanvas.png' },
  { name: 'JetBrain', logo: '/Sponsors/JetBrains.png' },
  { name: 'Replit', logo: '/Sponsors/Replit.png' },
  { name: 'Devfolio', logo: '/Sponsors/Devfolio.png' },
  { name: 'Ox.Day', logo: '/Sponsors/OxDay.png' },
  { name: 'Coding Ninja', logo: '/Sponsors/CodingNinja.png' },
  { name: 'ETH India', logo: '/Sponsors/ETHIndia.png' },

];

const Locations = () => {
  return (
    <div className={styles.Locations}>
      <div className={styles.LocationsHeading}>
      <h1>Geek Room Goes Global!!</h1>
      <p>Experience the Geek Room revolution at these prestigious institutions.</p>
      </div>
      <div className={styles.collegeGrid}>
        {collegeList.map((college, index) => (
          <div key={index} className={styles.collegeItem}>
            <Image 
              src={college.logo} 
              alt={`${college.name} logo`}
              width={100}
              height={100}
            />
            <p>{college.name}</p>
          </div>
        ))}
      </div>

       <div className={styles.LocationsHeading}>
      <h1>Powering Innovation Together</h1>
      <p>We&apos;re proud to partner with industry leaders who share our vision for a tech-empowered future.</p>
      </div>
      <div className={styles.collegeGrid}>
        {sponsorList.map((college, index) => (
          <div key={index} className={styles.collegeItem}>
            <Image 
              src={college.logo} 
              alt={`${college.name} logo`}
              width={100}
              height={100}
            />
            <p>{college.name}</p>
          </div>
        ))}
      </div>
      <div>
        And Many More...
      </div>
    </div>
  )
}

export default Locations