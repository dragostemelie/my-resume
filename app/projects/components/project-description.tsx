import React from 'react';
import Image, { StaticImageData } from 'next/image';

import { TECH } from '@/app/consts/technologies';
import styles from './project-description.module.css';

interface Props {
  name: string;
  about: string;
  technologies: string[];
  link: string;
  involvement: string;
  phoneImage: StaticImageData;
}

export const ProjectDescription = ({
  name,
  technologies,
  link,
  involvement,
  phoneImage,
}: Props) => {
  return (
    <div className={styles.project}>
      <div className={styles.description}>
        <h2>Technologies </h2>
        <div className={styles.technologies}>
          {technologies.map(tech => {
            const item = TECH[tech as keyof typeof TECH];
            return (
              <div key={item.name} className={styles.technology}>
                <Image src={item.image} alt={item.name} placeholder="empty" />
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
        <a href={link} className={styles.link} target="_blank" rel="noreferrer">
          {link}
        </a>
        <h2>Involvement </h2>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;{involvement}</p>
      </div>
      <div className={styles.phone}>
        <Image src={phoneImage} alt={name} placeholder="empty" />
      </div>
    </div>
  );
};
