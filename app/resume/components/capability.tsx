import React from 'react';

import styles from './capability.module.css';

interface Props {
  date?: string;
  title: string;
  description: string;
}
export const Capability = ({ date, title, description }: Props) => {
  return (
    <div className={styles.capability}>
      {date && <p className={styles.date}>{date}</p>}
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>
        {description.split('\n').map((text, idx) => (
          <React.Fragment key={'text' + idx}>
            {text} <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};
