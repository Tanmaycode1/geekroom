"use client"

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '@/Styles/CounterCard.module.scss';

interface CounterCardProps {
  finalNumber: number;
  label: string;
  iconSrc: string;
}

const CounterCard: React.FC<CounterCardProps> = ({ finalNumber, label, iconSrc }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && count < finalNumber) {
      const timer = setTimeout(() => setCount(count + 1), 50);
      return () => clearTimeout(timer);
    }
  }, [count, finalNumber, isVisible]);

  return (
    <div className={styles.counterCard} ref={cardRef}>
      <div className={styles.svgIcon}>
        <Image src={iconSrc} alt={label} width={90} height={90} />
      </div>
      <div className={styles.counterNumber}>{count}+</div>
      <div className={styles.counterLabel}>{label}</div>
    </div>
  );
};

const CounterCardContainer: React.FC = () => {
  return (
    <div className={styles.container}>
      <CounterCard 
        finalNumber={8} 
        label="Active Members" 
        iconSrc="/images/CounterCard1.svg"
      />
      <CounterCard 
        finalNumber={20} 
        label="Events Organized" 
        iconSrc="/images/CounterCard2.svg"
      />
      <CounterCard 
        finalNumber={250} 
        label="Team Members" 
        iconSrc="/images/CounterCard3.svg"
      />
    </div>
  );
};

export default CounterCardContainer;