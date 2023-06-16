'use client';

import React, { useEffect, useState } from 'react';

import styles from './page.module.css';

import endafunLogo from './assets/endafun-logo.png';
import jdacLogo from './assets/jdac-logo.png';
import endavibeLogo from './assets/endavibe-logo.png';
import itschoolLogo from './assets/itschool-logo.png';
import tmsLogo from './assets/tms-logo.png';
import projects from '../../data/projects.json';

import { Header } from '../components/header';
import { Footer } from '../components/footer';
import Image from 'next/image';

const LOGOS = {
  endafun: endafunLogo,
  jdac: jdacLogo,
  endavibe: endavibeLogo,
  itschool: itschoolLogo,
  tms: tmsLogo,
};

export default function Projects() {
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
          <h1>Projects</h1>
        </div>
      </Header>
      <main className={`${styles.main} ${animate ? styles.animate : ''}`}>
        <div className={styles.grid}>
          {projects.map(project => {
            const { name, slug, about } = project;
            const logo = LOGOS[slug as keyof typeof LOGOS];

            return (
              <div key={slug} className={styles.cell}>
                <Image src={logo} alt={slug} placeholder="empty" />
                <div className={styles.title}>{name}</div>
                <div className={styles.description}>{about}</div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer downloadLink="/docs/projects-dragos-temelie.pdf" downloadName="Projects" />
    </>
  );
}
