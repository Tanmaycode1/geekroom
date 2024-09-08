import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import eventdata from "./JSON/eventData.json";
import styles from "@/styles/event.module.scss";

const Events = () => {
  return (
    <div className={styles.event_page}>
      <div className={`${styles.event_heading} ${styles.event}`}>Events</div>
      <div className={styles.event_subHeading}>
        <p>&quot;Embrace Innovation, Collaborate and Celebrate&quot;</p>
      </div>
      <div className={styles.event_card_container}>
        {eventdata.map((detail, index) => (
          <div className={styles.event_card} key={index}>
            <Image
              src={`/Events/${detail.image_url}`}
              alt={detail.eventName}
              className={styles.event_card__image}
              layout="fill"
              objectFit="cover"
            />
            <div className={styles.event_card__overlay}>
              <Link href={`/event/${detail.id}`}>
                <button className={styles.event_card__button}>Learn More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Events