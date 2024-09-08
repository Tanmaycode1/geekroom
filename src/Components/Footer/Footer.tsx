import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/footer.module.scss';
import GeekRoomLogo from '../../../public/Images/GeekRoomLogo.svg';
import Instagram from '../../../public/Images/Instagram.svg';
import Linkedin from '../../../public/Images/Linkedin.svg';
import Twiiter from '../../../public/Images/Twitter.svg';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoSection}>
          <Image src={GeekRoomLogo} alt="Footer Logo" width={120} height={120} />
          <p className={styles.tagline}>LEARN. CONNECT. GROW.</p>
        </div>
        <div className={styles.linksSection}>
          <div className={styles.linkColumn}>
            <h3>Links</h3>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/events">Events</Link>
            <Link href="/team">Our Team</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className={styles.Socials}>
            <h3>Socials</h3>
            <div className={styles.SocialsLinks}>
            <Link href="https://www.instagram.com/_geek.room/"><Image src={Instagram} alt='Instagram' /></Link>
            <Link href="https://www.linkedin.com/company/geekr00m/mycompany/"><Image src={Linkedin} alt='Linkedin' /></Link>
            <Link href="https://x.com/geek__room_"><Image src={Twiiter} alt='Twitter' /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>&copy; 2024 Geek Room. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;