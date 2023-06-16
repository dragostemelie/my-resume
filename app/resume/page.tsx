'use client';

import React, { useState } from 'react';

import styles from './page.module.css';

import resume from '../../data/resume.json';
import { Headline } from './components/headline';
import { Capability } from './components/capability';
import { Experience } from './components/experience';

import { Header } from '../components/header';
import { Footer } from '../components/footer';

export default function Resume() {
  const [animate, setAnimate] = useState(false);

  const startAnimating = () => {
    setAnimate(true);
  };

  return (
    <>
      <Header>
        <Headline animate={animate} onLoad={startAnimating} />
      </Header>
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
      <Footer downloadLink="/docs/resume-dragos-temelie.pdf" downloadName="Resume" />
    </>
  );
}
