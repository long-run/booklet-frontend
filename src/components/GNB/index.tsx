/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import * as React from 'react';
import * as styles from './styles';
import Logo from '../SVG/Book.svg';
import Link from 'next/link';

type GNBProps = {};

export const GNB: React.FunctionComponent<GNBProps> = () => (
  <div css={styles.wrapper}>
    <Logo css={styles.logoStyle} fill="white" />
    <div css={styles.titleStyle}>
      <Link href="/">
        <a>Booklet</a>
      </Link>
    </div>
    <img css={styles.profileImageStyle} src="https://source.unsplash.com/random/100x100" />
  </div>
);
