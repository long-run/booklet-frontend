/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import * as React from 'react';
import * as styles from './styles';

export const PostTheme: React.FunctionComponent = () => (
  <div css={styles.wrapper}>
    <div css={styles.label}>Background Theme</div>
    <div css={styles.themeWrapper}>
      {[...Array(5).keys()].map(() => (
        <div css={styles.themeLabel}>Black</div>
      ))}
    </div>
  </div>
);
