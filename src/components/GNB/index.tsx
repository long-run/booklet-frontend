/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import * as React from 'react';
import * as styles from './styles';
import Logo from '../SVG/Logo-sharp.svg';
import Booklet from '../SVG/Booklet.svg';
import Link from 'next/link';

type GNBProps = {};

export const GNB: React.FunctionComponent<GNBProps> = () => (
  <div css={styles.wrapper}>
    <h1 css={styles.titleStyle}>
      <Link href="/">
        <a>
          <span className="a11y">Booklet</span>
          <Logo css={styles.symbolStyle} fill="white" />
          <div css={styles.logoWrapper}>
            <Booklet css={styles.logoStyle} fill="white" />
          </div>
        </a>
      </Link>
    </h1>
    <img
      css={styles.profileImageStyle}
      src="https://ca.slack-edge.com/T024T5ZGE-U2RQ7MBQR-d0387fc4fb6c-1024"
    />
  </div>
);
