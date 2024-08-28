import React from 'react'
import styles from '@/Styles/GalleryBanner.module.scss';

const GalleryBanner = () => {
  return (
    <div className={styles.GalleryBanner}>
      <div className={styles.parallaxContainer}>
        <div className={styles.parallaxBg}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.GalleryBannerHeading}>
          <h1>Our Tech Events & Hackathon Showcase</h1>
          <p>Browse through snapshots of our groundbreaking events and intense hackathons where ideas come to life.</p>
        </div>
        <div className={styles.GalleryBannerButtons}>
          <button>Event Images</button>
          <button>Hackathon Images</button>
        </div>
      </div>
    </div>
  )
}

export default GalleryBanner