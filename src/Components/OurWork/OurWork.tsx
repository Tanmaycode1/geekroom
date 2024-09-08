import React from 'react';
import Image from 'next/image';
import styles from '@/styles/ourWork.module.scss';

interface WorkBoxProps {
  title: string;
  icon: string;
}

const WorkBox: React.FC<WorkBoxProps> = ({ title, icon }) => (
  <div className={styles.workBox}>
    <Image src={icon} alt={title} className={styles.icon} width={100} height={200} />
    <h3 className={styles.title}>{title}</h3>
  </div>
);

const OurWork: React.FC = () => {
  const workAreas: WorkBoxProps[] = [
    { title: 'Quality', icon: '' },
    { title: 'Mentors', icon: '' },
    { title: 'Develop', icon: '' },
    { title: 'Product', icon: '' },
  ];

  return (
    <section className={styles.ourWork}>
      <h2 className={styles.sectionTitle}>Our Work</h2>
      <div className={styles.gridContainer}>
        {workAreas.map((area, index) => (
          <WorkBox key={index} title={area.title} icon={area.icon} />
        ))}
      </div>
    </section>
  );
};

export default OurWork;