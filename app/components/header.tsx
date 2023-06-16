import React from 'react';

import styles from './header.module.css';

interface Props {
  children: React.ReactNode;
}

export const Header = ({ children }: Props) => {
  return <header className={styles.header}>{children}</header>;
};
