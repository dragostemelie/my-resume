'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { ProjectDescription } from '../components/project-description';

import notebookScreen from '../../assets/screens/jdac-screen1.png';

import { PHONES } from '@/app/consts/phones';
import projects from '../../../data/projects.json';
import styles from '../components/layout.module.css';

const { name, about, technologies, link, involvement } = projects[1];
const phoneImage = PHONES.jdac;

export default function Jdac() {
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
            <span>{about}</span>
          </div>
        </div>
      </Header>
      <main className={`${styles.main} ${animate ? styles.animate : ''}`}>
        <ProjectDescription {...{ name, about, technologies, link, involvement, phoneImage }} />

        <div className={styles.wrapper}>
          <Image src={notebookScreen} alt={name} placeholder="blur" />
        </div>
      </main>
      <Footer downloadLink="/docs/projects-dragos-temelie.pdf" downloadName="Projects" />
    </>
  );
}
