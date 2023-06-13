'use client';

import React, { useEffect, useState } from 'react';

import styles from './page.module.css';

import resume from '../../data/resume.json';
import { Header } from './components/header';
import { Capability } from './components/capability';
import { Experience } from './components/experience';
import { Footer } from './components/footer';

export default function Resume() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <aside>
          <section>
            <h4>Certificates</h4>
            {resume.certificates.map((cert, idx) => (
              <Capability key={'cert' + idx} {...cert} />
            ))}
          </section>
          <section>
            <h4>Education</h4>
            {resume.education.map((edu, idx) => (
              <Capability key={'edu' + idx} {...edu} />
            ))}
          </section>
          <section>
            <h4>Skills & capabilities</h4>
            {resume.skills.map((skill, idx) => (
              <Capability key={'edu' + idx} {...skill} />
            ))}
          </section>
        </aside>
        <article>
          <h2>Work experience</h2>
          {resume['work-experience'].map((exp, idx) => (
            <Experience key={'exp' + idx} {...exp} />
          ))}
        </article>
      </main>
      <Footer />
    </>
  );
}
