import Link from 'next/link';
import React from 'react';

export const LandingMenu = () => {
  return (
    <nav>
      <Link href="/resume">Resume</Link>
      <Link href="/resume">Projects</Link>
      <Link href="/resume">Feedback</Link>
      <Link href="/resume">References</Link>
    </nav>
  );
};
