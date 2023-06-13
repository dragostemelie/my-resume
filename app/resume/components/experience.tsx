import React from 'react';

import styles from './experience.module.css';

interface Props {
  period: string;
  role: string;
  company: string;
  description: string;
}
export const Experience = ({ period, role, company, description }: Props) => {
  return (
    <section className={styles.experience}>
      <p className={styles.period}>{period}</p>
      <h3 className={styles.role}>{role}</h3>
      <p className={styles.company}>{company}</p>
      <p className={styles.description}>
        {description.split('\n').map((text, idx) => (
          <React.Fragment key={'text' + idx}>
            {text} <br />
          </React.Fragment>
        ))}
      </p>
    </section>
  );
};
