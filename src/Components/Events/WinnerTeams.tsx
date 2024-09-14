import React from 'react';
import Image from 'next/image';
import styles from '../../styles/winnerTeams.module.scss';


interface Winner {
  medal: string;
  teamName: string;
  project: string;
  members: string[];
}

interface WinnerTeamsProps {
  winners: Winner[];
}

const WinnerTeams: React.FC<WinnerTeamsProps> = ({ winners }) => {
  return (
    <div className={styles.winnerTeams}>
      <div className={styles.container}>
        <div className={styles.title}>
        <h1>WINNERS</h1>
        <p>Encourage readers to appreciate the winners accomplishments.</p>
        </div>
        <div className={styles.winnerGrid}>
          {winners.map((winner:any, index:number) => (
            <div key={index} className={styles.winnerCard}>
                <div className={styles.winnerMedal}>
                    <Image src={winner.medal} alt={'Medal'} width={60} height={60}/>
                </div>
             {/* <h3>{winner.position} Place</h3> */}
             <div className={styles.winnerDetails}>
              <h3>{winner.teamName}</h3>
              <h6>{winner.project}</h6>
              <p><span style={{color: 'gold'}}>Team Members:</span> {winner.members.join(' | ')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WinnerTeams;