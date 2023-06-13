import React from 'react';
import NavLink from 'next/link';

import styles from './footer.module.css';
import { usePathname } from 'next/navigation';

export const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <nav>
          <NavLink href="/" className={pathname === '/' ? 'active' : ''}>
            Home
          </NavLink>
          <NavLink href="/resume" className={pathname === '/resume' ? 'active' : ''}>
            Resume
          </NavLink>
          <NavLink href="/projects" className={pathname === '/projects' ? 'active' : ''}>
            Projects
          </NavLink>
          <NavLink href="/feedback" className={pathname === '/feedback' ? 'active' : ''}>
            Feedback
          </NavLink>
          <NavLink href="/references" className={pathname === '/references' ? 'active' : ''}>
            References
          </NavLink>
        </nav>
        <a
          href="/docs/resume-dragos-temelie.pdf"
          className={styles.button}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
      <p>©2023 • Dragos Temelie</p>
    </footer>
  );
};
