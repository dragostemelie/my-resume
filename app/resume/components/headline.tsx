import React from 'react';
import Image from 'next/image';

import styles from './headline.module.css';
import resume from '../../../data/resume.json';
import photo from '../../assets/resume/dragos-temelie.jpg';

interface Props {
  animate: boolean;
  onLoad: () => void;
}

export const Headline = ({ animate, onLoad }: Props) => {
  return (
    <>
      <div className={`${styles.container} ${animate ? styles.animate : ''}`}>
        <div className={styles.title}>
          <h1>{resume.name}</h1>
          <span>{resume.position}</span>
        </div>
        <div className={styles.picture}>
          <Image src={photo} alt="Dragos Temelie" placeholder="blur" onLoad={onLoad} />
        </div>
        <div className={styles.quote}>
          {resume['about-me'].split('\n').map((str, idx) => (
            <span key={'about' + idx}>{str}</span>
          ))}
        </div>
      </div>
    </>
  );
};
