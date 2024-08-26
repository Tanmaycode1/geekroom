// components/OurWork.tsx
import React from 'react';
import styles from '@/Styles/OurWork.module.scss';

interface WorkBoxProps {
  title: string;
  icon: string;
}

const WorkBox: React.FC<WorkBoxProps> = ({ title, icon }) => (
  <div className={styles.workBox}>
    <img src={icon} alt={title} className={styles.icon} />
    <h3 className={styles.title}>{title}</h3>
  </div>
);

const OurWork: React.FC = () => {
  const workAreas: WorkBoxProps[] = [
    { title: 'Quality', icon: 'https://cdn-icons-png.flaticon.com/512/10435/10435120.png' },
    { title: 'Mentors', icon: 'https://cdn-icons-png.flaticon.com/512/10870/10870228.png' },
    { title: 'Develop', icon: 'https://cdn-icons-png.flaticon.com/512/3263/3263182.png' },
    { title: 'Product', icon: 'https://cdn-icons-png.flaticon.com/512/10939/10939134.png' },
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