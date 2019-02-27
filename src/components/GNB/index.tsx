/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import * as React from 'react';
import * as styles from './styles';

type GNBProps = {};

export const GNB: React.FunctionComponent<GNBProps> = () => (
  <div css={styles.wrapper}>
    <div css={styles.titleStyle}>Booklet</div>
    <img css={styles.profileImageStyle} src="https://source.unsplash.com/random/100x100" />
  </div>
);
