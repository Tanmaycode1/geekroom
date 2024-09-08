"use client"

import React, { useEffect, useRef } from 'react';
import styles from '@/styles/aboutLanding.module.scss';
import Image from 'next/image';

interface CardProps {
  imageUrl: string;
  alt: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, alt }) => (
  <div className={styles.card}>
    <Image src={imageUrl} alt={alt} width={200} height={200} />
  </div>
);

interface InfiniteCardsProps {
  cards: CardProps[];
  speed: number;
  direction: 'left' | 'right';
}

const InfiniteCards: React.FC<InfiniteCardsProps> = ({ cards, speed, direction }) => {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const moveCards = () => {
      if (direction === 'left') {
        if (row.scrollLeft >= row.scrollWidth / 2) {
          row.scrollLeft = 0;
        } else {
          row.scrollLeft += speed;
        }
      } else {
        if (row.scrollLeft <= 0) {
          row.scrollLeft = row.scrollWidth / 2;
        } else {
          row.scrollLeft -= speed;
        }
      }
    };

    const intervalId = setInterval(moveCards, 50);
    return () => clearInterval(intervalId);
  }, [speed, direction]);

  return (
    <div className={styles.infiniteCardsRow} ref={rowRef}>
      {cards.concat(cards).map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

const AboutLanding: React.FC = () => {
  const cardsRow1 = [
    { imageUrl: '/About/About1.jpg', alt: 'Image 1' },
    { imageUrl: '/About/About2.jpg', alt: 'Image 2' },
    { imageUrl: '/About/About3.jpg', alt: 'Image 2' },
    { imageUrl: '/About/About4.jpg', alt: 'Image 2' },
    { imageUrl: '/About/About5.jpg', alt: 'Image 2' },
    { imageUrl: '/About/About6.jpg', alt: 'Image 2' },
    { imageUrl: '/About/About7.jpg', alt: 'Image 2' },
    { imageUrl: '/About/About8.jpg', alt: 'Image 2' },

  ];

  const cardsRow2 = [
    { imageUrl: '/About/About9.jpg', alt: 'Image 3' },
    { imageUrl: '/About/About10.jpg', alt: 'Image 2' },
    { imageUrl: '/About/About11.jpg', alt: 'Image 2' },
    { imageUrl: '/About/About12.jpg', alt: 'Image 4' },
    { imageUrl: '/About/About13.jpg', alt: 'Image 4' },
    { imageUrl: '/About/About14.jpg', alt: 'Image 4' },
    { imageUrl: '/About/About15.jpg', alt: 'Image 2' },
    { imageUrl: '/About/About16.jpg', alt: 'Image 2' },


  ];

  const cardsRow3 = [
    { imageUrl: '/About/About5.jpg', alt: 'Image 5' },
    { imageUrl: '/About/About10.jpg', alt: 'Image 5' },
    { imageUrl: '/About/About11.jpg', alt: 'Image 5' },
    { imageUrl: '/About/About2.jpg', alt: 'Image 5' },
    { imageUrl: '/About/About1.jpg', alt: 'Image 5' },
    { imageUrl: '/About/About8.jpg', alt: 'Image 6' },
    { imageUrl: '/About/About16.jpg', alt: 'Image 6' },
    { imageUrl: '/About/About15.jpg', alt: 'Image 6' },

  ];

  return (
    <div className={styles.aboutPage}>
      <InfiniteCards cards={cardsRow1} speed={1} direction="left" />
      <InfiniteCards cards={cardsRow2} speed={1.5} direction="right" />
      <InfiniteCards cards={cardsRow3} speed={2} direction="left" />
    </div>
  );
};

export default AboutLanding;