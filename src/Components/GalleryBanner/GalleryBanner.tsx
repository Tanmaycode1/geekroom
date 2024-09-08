import React from 'react'
import styles from '@/styles/galleryBanner.module.scss';

const GalleryBanner = () => {
  return (
    <div className={styles.GalleryBanner}>
      <div className={styles.parallaxContainer}>
        <div className={styles.parallaxBg}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.GalleryBannerHeading}>
          <h1></h1>
          <p></p>
        </div>
        <div className={styles.GalleryBannerButtons}>
          
        </div>
      </div>
    </div>
  )
}

export default GalleryBanner