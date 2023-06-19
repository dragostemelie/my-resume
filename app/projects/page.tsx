'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { Header } from '../components/header';
import { Footer } from '../components/footer';

import { LOGOS } from '../consts/logos';
import projects from '../../data/projects.json';
import styles from './page.module.css';

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
              <a key={slug} className={styles.cell} href={`/projects/${project.slug}`}>
                <Image src={logo} alt={slug} placeholder="empty" />
                <div className={styles.title}>{name}</div>
                <div className={styles.description}>&nbsp;&nbsp;&nbsp;&nbsp;{about}</div>
              </a>
            );
          })}
        </div>
      </main>
      <Footer downloadLink="/docs/projects-dragos-temelie.pdf" downloadName="Projects" />
    </>
  );
}
