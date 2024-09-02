"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '@/Styles/CounterCard.module.scss';

interface CounterCardProps {
  finalNumber: number;
  label: string;
  iconSrc: string;
  duration: number;
}

const CounterCard: React.FC<CounterCardProps> = ({ finalNumber, label, iconSrc, duration }) => {
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
      const increment = finalNumber / (duration / 50);
      const timer = setTimeout(() => {
        setCount(prevCount => Math.min(prevCount + increment, finalNumber));
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [count, finalNumber, isVisible, duration]);

  const displayNumber = Math.round(count);
  const formattedNumber = displayNumber >= 1000 ? `${(displayNumber / 1000).toFixed(1)}K` : displayNumber;

  return (
    <div className={styles.counterCard} ref={cardRef}>
      <div className={styles.svgIcon}>
        <Image src={iconSrc} alt={label} width={90} height={90} />
      </div>
      <div className={styles.counterNumber}>{formattedNumber}+</div>
      <div className={styles.counterLabel}>{label}</div>
    </div>
  );
};

interface HackathonDetail {
  number: number;
  name: string;
}

interface CounterCardContainerProps {
  hackathonDetails?: HackathonDetail[];
}

const CounterCardContainer: React.FC<CounterCardContainerProps> = ({ hackathonDetails }) => {
  const duration = 2000;

  const defaultCounters = [
    { finalNumber: 10, label: "Active Members", iconSrc: "/images/CounterCard1.svg" },
    { finalNumber: 20, label: "Events Organized", iconSrc: "/images/CounterCard2.svg" },
    { finalNumber: 250, label: "Team Members", iconSrc: "/images/CounterCard3.svg" }
  ];

  const counters = hackathonDetails || defaultCounters;

  return (
    <div className={styles.container}>
      {counters.map((counter, index) => (
        <CounterCard 
          key={index}
          finalNumber={counter.number || counter.finalNumber}
          label={counter.name || counter.label}
          iconSrc={counter.iconSrc || `/images/CounterCard${index + 1}.svg`}
          duration={duration}
        />
      ))}
    </div>
  );
};

export default CounterCardContainer;