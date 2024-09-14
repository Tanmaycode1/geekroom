"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '@/styles/counter.module.scss';

interface CounterCardProps {
  finalNumber: number;
  label: string;
  iconSrc: string;
  duration: number;
  isDefaultCounter: boolean;
}

const CounterCard: React.FC<CounterCardProps> = ({ finalNumber, label, iconSrc, duration, isDefaultCounter }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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
        setCount((prevCount) => Math.min(prevCount + increment, finalNumber));
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [count, finalNumber, isVisible, duration]);

  const displayNumber = Math.round(count);
  let formattedNumber: string | number = displayNumber;

  if (isDefaultCounter && finalNumber === 15) {
    formattedNumber = `${displayNumber}K`;
  } else if (displayNumber >= 1000) {
    formattedNumber = `${(displayNumber / 1000).toFixed(1)}K`;
  }

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
  number?: number;
  name?: string;
  finalNumber?: number;
  label?: string;
  iconSrc?: string;
}

interface CounterCardContainerProps {
  hackathonDetails?: HackathonDetail[];
}

const CounterCardContainer: React.FC<CounterCardContainerProps> = ({ hackathonDetails }) => {
  const duration = 2000;

  const defaultCounters = [
    { finalNumber: 15, label: "Active Members", iconSrc: "/images/CounterCard1.svg" },
    { finalNumber: 20, label: "Events Organized", iconSrc: "/images/CounterCard2.svg" },
    { finalNumber: 250, label: "Team Members", iconSrc: "/images/CounterCard3.svg" }
  ];

  // Merge details provided in props with default counters
  const counters = (hackathonDetails ?? []).map((counter, index) => {
    return {
      finalNumber: counter.finalNumber ?? counter.number ?? defaultCounters[index]?.finalNumber ?? 0,
      label: counter.label ?? counter.name ?? defaultCounters[index]?.label ?? '',
      iconSrc: counter.iconSrc ?? defaultCounters[index]?.iconSrc ?? '',
    };
  });

  const finalCounters = counters.length > 0 ? counters : defaultCounters;

  return (
    <div className={styles.container}>
      {finalCounters.map((counter, index) => (
        <CounterCard
          key={index}
          finalNumber={counter.finalNumber}
          label={counter.label}
          iconSrc={counter.iconSrc}
          duration={duration}
          isDefaultCounter={counters.length === 0}
        />
      ))}
    </div>
  );
};

export default CounterCardContainer;