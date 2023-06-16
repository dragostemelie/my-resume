import React, { useState } from 'react';

import styles from './footer.module.css';
import { usePathname, useRouter } from 'next/navigation';

interface Props {
  downloadName: string;
  downloadLink: string;
}

const MENU = ['Resume', 'Projects', 'Feedback', 'References'];

export const Footer = ({ downloadName, downloadLink }: Props) => {
  const [animateOut, setAnimateOut] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const handleAnchorClick = (e: any) => {
    e.preventDefault();
    setAnimateOut(true);
    setTimeout(() => {
      router.push(e.target.href as string);
    }, 300);
  };

  return (
    <footer className={`${styles.footer} ${animateOut ? styles.animate : ''}`}>
      <div className={styles.wrapper}>
        <nav>
          <a href="/" onClick={handleAnchorClick}>
            Home
          </a>
          {MENU.map(item => (
            <a
              key={'menu-' + item}
              href={'/' + item.toLowerCase()}
              className={pathname === '/' + item.toLowerCase() ? 'active' : ''}
              onClick={handleAnchorClick}
            >
              {item}
            </a>
          ))}
        </nav>
        <a href={downloadLink} className={styles.button} target="_blank" rel="noreferrer">
          {downloadName}
        </a>
      </div>
      <p>©2023 • Dragos Temelie</p>
    </footer>
  );
};
