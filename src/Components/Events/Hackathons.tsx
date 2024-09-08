import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import hackathondata from "./JSON/hackathon.json";
import styles from '@/styles/event.module.scss';

const Hackathons = () => {
  return (
    <div className={styles.event_page}>
      <div className={`${styles.event_heading} ${styles.event}`}>Hackathons</div>
      <div className={styles.event_subHeading}>
        <p>&quot;Embrace Innovation, Collaborate and Celebrate&quot;</p>
      </div>

      <div className={styles.event_card_container}>
        {hackathondata.map((detail) => (
          <div className={styles.event_card} key={detail.id}>
            <Image
              src={`${detail.image_url}`}
              alt={detail.eventName}
              className={styles.event_card__image}
              layout="fill"
              objectFit="cover"
            />
            <div className={styles.event_card__overlay}>
              <Link href={`/Hackathon/${detail.id}`}>
                <button className={styles.event_card__button}>Learn More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hackathons;