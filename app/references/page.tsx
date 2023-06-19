'use client';
import React, { useEffect, useState } from 'react';

import { Header } from '@/app/components/header';
import { Footer } from '@/app/components/footer';
import styles from './page.module.css';

import references from '../../data/references.json';
import { AVATARS } from '@/app/consts/avatars';
import Image from 'next/image';

export default function References() {
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
          <h1>References</h1>
        </div>
      </Header>
      <main className={`${styles.main} ${animate ? styles.animate : ''}`}>
        <div className={styles.wrapper}>
          {references.map(item => {
            const { name, title, email } = item;
            const image = AVATARS[name as keyof typeof AVATARS];

            return (
              <div key={name} className={styles.references}>
                <div className={styles.avatar}>
                  <Image src={image} alt={name} placeholder="empty" />
                </div>
                <div className={styles.content}>
                  <p className={styles.name}>{name}</p>
                  <p className={styles.title}>{title}</p>
                  <p className={styles.email}>{email}</p>
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
