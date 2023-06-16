'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import photo from './assets/resume/dragos-temelie.jpg';
import styles from './page.module.css';
import { Spinner } from './components/spinner';

export default function Home() {
  const [animate, setAnimate] = useState(false);

  const startAnimating = () => {
    setAnimate(true);
  };

  return (
    <main className={`${styles.main} ${animate ? styles.animate : ''}`}>
      <div className={styles.picture}>
        <Image src={photo} alt="Dragos Temelie" placeholder="blur" onLoad={startAnimating} />
      </div>
      <nav className={styles.menu}>
        <Link href="/resume">Resume</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/resume">Feedback</Link>
        <Link href="/resume">References</Link>
      </nav>
    </main>
  );
}
