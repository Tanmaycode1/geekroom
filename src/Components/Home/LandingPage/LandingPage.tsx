"use client"

import React, { useEffect, useRef } from 'react';
import styles from '@/styles/landingPage.module.scss';

const LandingPage = () => {
  const landingPageRef = useRef<HTMLDivElement>(null);
  const ballRef1 = useRef<HTMLDivElement>(null);
  const ballRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (landingPageRef.current && ballRef1.current && ballRef2.current) {
        const { width, height } = landingPageRef.current.getBoundingClientRect();
        const x = e.clientX / width - 0.5;
        const y = e.clientY / height - 0.5;
        
        ballRef1.current.style.transform = `translate(${-x * 500}px, ${-y * 500}px)`;
        ballRef2.current.style.transform = `translate(${-x * 700}px, ${-y * 700}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.landingPage} ref={landingPageRef}>
      <div className={styles.content}>
        <div className={styles.word}><h1>learn<span>.</span></h1></div>
        <div className={styles.word}><h1>connect<span>.</span></h1></div>
        <div className={styles.word}><h1>grow<span>.</span></h1></div>
      </div>
      <div className={styles.ball1} ref={ballRef1}></div>
      <div className={styles.ball2} ref={ballRef2}></div>
    </div>
  );
};

export default LandingPage;