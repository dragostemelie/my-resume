import React, { useState } from 'react';
import Image from 'next/image';

import styles from './header.module.css';
import resume from '../../../data/resume.json';
import photo from '../../assets/resume/dragos-temelie.jpg';

export const Header = () => {
  const [timing, setTiming] = useState(0);

  const startAnimating = () => {
    setTimeout(() => incrementTiming(timing + 1), 100);
  };

  const incrementTiming = (current: number) => {
    if (current < 6) {
      setTiming(current);
      setTimeout(() => incrementTiming(current + 1), 150);
    }
  };

  return (
    <header className={`${styles.header} ${timing > 3 ? styles.animate : ''}`}>
      <div className={styles.wrapper}>
        <div className={`${styles.title} ${timing > 0 ? styles.animate : ''}`}>
          <h1>{resume.name}</h1>
          <span>{resume.position}</span>
        </div>
        <div className={`${styles.picture} ${timing > 1 ? styles.animate : ''}`}>
          <Image src={photo} alt="Dragos Temelie" placeholder="blur" onLoad={startAnimating} />
        </div>
        <div className={`${styles.about} ${timing > 2 ? styles.animate : ''}`}>
          {resume['about-me'].split('\n').map((str, idx) => (
            <span key={'about' + idx}>{str}</span>
          ))}
        </div>
      </div>
    </header>
  );
};
