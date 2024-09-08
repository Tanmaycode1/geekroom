import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
import hackathonData from '@/Components/Events/JSON/hackathon.json';
import styles from '@/styles/hackathonDetail.module.scss';
import Navbar from '@/Components/Navbar/Navbar';
import Footer from '@/Components/Footer/Footer';
import DevfolioLogo from '../../../public/Sponsors/devfolioWhite.png';
import WinnerTeams from '@/Components/Events/winnerTeams';  
import CounterCardContainer from '@/Components/CounterCard/CounterCard';

const HackathonDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const hackathon = hackathonData.find(h => h.id === Number(id));

  if (!hackathon) {
    return <div>Hackathon not found</div>;
  }

  return (
    <>
      <Head>
        <title>Geek Room | {hackathon.eventName}</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/Favicon.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/Favicon.svg" />
      </Head>
      <Navbar />
      <div className={styles.hackathonDetail}>
        <div className={styles.hero}>
          <Image 
            src={hackathon.bannerImage}
            alt={hackathon.eventName}
            layout="fill"
            objectFit="cover"
          />
          <div className={styles.heroContent}>
            <p>{hackathon.location}</p>
            <h1>{hackathon.eventName}</h1>
            <p>{hackathon.date}</p>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.imageGrid}>
            <Image 
              src={hackathon.images}
              alt={`${hackathon.eventName}`}
              width={900}
              height={400}
            />
          </div>
          <div className={styles.aboutMeetup}>
            <h2>ABOUT EVENT</h2>
            <h3>WELCOME TO THE {hackathon.eventName.toUpperCase()}</h3>
            <p>{hackathon.description}</p>
            <a href={hackathon.link} target="_blank" rel="noopener noreferrer">
              <button className={styles.learnMore}>
                <label><Image src={DevfolioLogo} alt='DevfolioLogo' /></label>
                LEARN MORE
              </button>
            </a>
          </div>
        </div>
        {hackathon.winners && <WinnerTeams winners={hackathon.winners} />}
        <CounterCardContainer hackathonDetails={hackathon.details} />
      </div>
      <Footer />
    </>
  );
};

export default HackathonDetail;