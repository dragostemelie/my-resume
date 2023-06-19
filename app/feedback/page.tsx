'use client';
import React, { useEffect, useState } from 'react';

import { Header } from '@/app/components/header';
import { Footer } from '@/app/components/footer';
import styles from './page.module.css';

import feedback from '../../data/feedback.json';
import { AVATARS } from '@/app/consts/avatars';
import Image from 'next/image';

export default function Feedback() {
  const [animate, setAnimate] = useState(false);

  const startAnimating = () => {
    setAnimate(true);
  };

  useEffect(() => {
    startAnimating();
  }, []);
  return (
    <>
      <Header>
        <div className={`${styles.header} ${animate ? styles.animate : ''}`}>
          <h1>Feedback</h1>
        </div>
      </Header>
      <main className={`${styles.main} ${animate ? styles.animate : ''}`}>
        <div className={styles.wrapper}>
          {feedback.map(item => {
            const { from, content } = item;
            const image = AVATARS[from as keyof typeof AVATARS];

            return (
              <div key={from} className={styles.feedback}>
                <div className={styles.avatar}>
                  <Image src={image} alt={from} placeholder="empty" />
                </div>
                <div className={styles.content}>
                  {content.split('\n').map((str, idx) => (
                    <span key={'content-' + idx}>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      {str}
                    </span>
                  ))}
                  <p>{from}</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer downloadLink="/docs/resume-dragos-temelie.pdf" downloadName="Resume" />
    </>
  );
}
