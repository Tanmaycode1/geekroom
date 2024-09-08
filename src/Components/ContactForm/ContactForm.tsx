import React from 'react'
import styles from '@/styles/contactForm.module.scss';
import Image from 'next/image';
import Contact_Image from '../../../public/Images/contactUsImage.jpg'

const ContactForm = () => {
  return (
    <div className={styles.contactFormContainer}>
        <div className={styles.contactFormHeading}>
          <h2>Have a Question?</h2>
          <p className={styles.aboutHeadingUnderline}>We are here to help. Send us your query and our team will get back to you as soon as possible!!</p>
        </div>
      <div className={styles.contactFormContent}>
        <div className={styles.contactform}>
          <form>
            <div className={styles.inputGroup}>
              <input type='text' id="fullName" required />
              <label htmlFor="fullName">Full Name</label>
            </div>
            <div className={styles.inputGroup}>
              <input type='email' id="email" required />
              <label htmlFor="email">Email</label>
            </div>
            <div className={styles.inputGroup}>
              <textarea id="message" rows={4} required></textarea>
              <label htmlFor="message">Message</label>
            </div>
            <button type='submit'>Send Message</button>
          </form>
        </div>
         <div className={styles.contactFormImage}>
        <Image src={Contact_Image} alt='Contact' priority />
      </div>
      </div>
    </div>
  )
}

export default ContactForm