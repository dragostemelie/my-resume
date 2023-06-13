'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import photo from './assets/resume/dragos-temelie.jpg';
import styles from './page.module.css';
import { Spinner } from './components/spinner';

export default function Home() {
  const [timing, setTiming] = useState(0);

  const startAnimating = () => {
    setTimeout(() => incrementTiming(timing + 1), 100);
  };

  const incrementTiming = (current: number) => {
    if (current < 6) {
      setTiming(current);
      setTimeout(() => incrementTiming(current + 1), 200);
    }
  };

  return (
    <main className={styles.main}>
      <div className={`${styles.picture} ${timing > 0 ? styles.animate : ''}`}>
        <Image src={photo} alt="Dragos Temelie" placeholder="blur" onLoad={startAnimating} />
      </div>
      <nav className={styles.menu}>
        <Link href="/resume" className={timing > 1 ? styles.animate : ''}>
          Resume
        </Link>
        <Link href="/resume" className={timing > 2 ? styles.animate : ''}>
          Projects
        </Link>
        <Link href="/resume" className={timing > 3 ? styles.animate : ''}>
          Feedback
        </Link>
        <Link href="/resume" className={timing > 4 ? styles.animate : ''}>
          References
        </Link>
      </nav>
    </main>
  );
}
