"use client"

import React, { useState, useEffect } from 'react';
import styles from '@/styles/testimonials.module.scss';

const testimonials = [
  {
    id: 1,
    date: "5 March",
    title: "Code Kshetra",
    text: "\"It's hard to point out a flaw in the hackathon. If I was a critique, I would be pulling my hair out right now.\"",
    author: "Kumar Utkarsh",
    rating: 5
  },
  {
    id: 2,
    date: "5 March",
    title: "Code Cubicle",
    text: "I loved the experience, even though I couldn't make it to the offline round, this gave me potential insight on what things I need to focus on.",
    author: "Kumar Utkarsh",
    rating: 5
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  const renderStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className={styles.testimonials}>
      <div className={styles.testimonialsHeading}>
        <h1>Look what people say about us!!</h1>
        <p> Don&apos;t just take our word for it — hear from the brilliant minds who&apos;ve experienced our events firsthand.<br/>See why our tech events are creating waves in the developer community!</p>
      </div>
      <div className={styles.carousel}>
        {testimonials.map((testimonial, index) => (
          <div 
            key={testimonial.id} 
            className={`${styles.testimonial} ${index === currentIndex ? styles.active : ''}`}
          >
            <div className={styles.date}>{testimonial.date}</div>
            <h2 className={styles.title}>{testimonial.title}</h2>
            <p className={styles.text}>{testimonial.text}</p>
            <div className={styles.rating}>{renderStars(testimonial.rating)}</div>
            <p className={styles.author}>~ {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;