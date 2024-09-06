"use client"

import React, { useEffect, useRef } from 'react';
import Events from './events'
import Hackathons from './hackathons'
import GalleryBanner from '../GalleryBanner/GalleryBanner';
import  styles  from '@/styles/event.module.scss';

const Index = () => {
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
    <div className={styles.eventPage} ref={landingPageRef} style={{backgroundColor: '#1a1a1a'}}>
        <Hackathons/>
       {/*  <GalleryBanner/>  */}
       {/* <Events/> */}
      <div className={styles.ball1} ref={ballRef1}></div>
    </div>
  )
}

export default Index