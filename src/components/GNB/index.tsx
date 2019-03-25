/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import * as React from 'react';
import * as styles from './styles';
import Logo from '../SVG/Logo-sharp.svg';
import Link from 'next/link';

type GNBProps = {};

export const GNB: React.FunctionComponent<GNBProps> = () => (
  <div css={styles.wrapper}>
    <h1 css={styles.titleStyle}>
      <Link href="/">
        <a>
          <span className="a11y">Booklet</span>
          <Logo css={styles.logoStyle} fill="white" />
        </a>
      </Link>
    </h1>
    <img css={styles.profileImageStyle} src="https://source.unsplash.com/random/100x100" />
  </div>
);
