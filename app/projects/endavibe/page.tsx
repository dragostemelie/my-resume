'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { Header } from '../../components/header';
import { Footer } from '../../components/footer';

import techScreen from '../../assets/screens/endavibe-screen2.png';
import notebookScreen from '../../assets/screens/endavibe-screen1.png';

import projects from '../../../data/projects.json';
import styles from '../components/layout.module.css';

const { name, about, technologies, link, involvement } = projects[2];

export default function Endavibe() {
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
        <div className={`${styles.header} ${animate ? 'animate' : ''}`}>
          <h1>{name}</h1>
          <div className={styles.quote}>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;{about}</span>
          </div>
        </div>
      </Header>
      <main className={`${styles.main} ${animate ? styles.animate : ''}`}>
        <div className={styles.wrapper} style={{ marginTop: -10 }}>
          <h2>Technologies </h2>
          <div style={{ height: '2.4rem' }} />
          <Image src={techScreen} alt={name} placeholder="blur" />
          <div style={{ height: '2.4rem' }} />
          <h2>Involvement </h2>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;{involvement}</p>
          <div style={{ height: '2.4rem' }} />
          <Image src={notebookScreen} alt={name} placeholder="blur" />
        </div>
      </main>
      <Footer downloadLink="/docs/projects-dragos-temelie.pdf" downloadName="Projects" />
    </>
  );
}
