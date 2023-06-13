import React from 'react';
import styles from './spinner.module.css';

export const Spinner = () => (
  <div className={styles.wrapper}>
    <span className={styles.loader}></span>
  </div>
);
