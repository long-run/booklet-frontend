/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import * as React from 'react';
import * as styles from './styles';

const ThemeType = ['Romantic', 'Mysterious', 'Colorful', 'Neutral', 'Melancholy', 'Random'];

export const PostTheme: React.FunctionComponent = () => (
  <div css={styles.wrapper}>
    <div css={styles.label}>Background Theme</div>
    <div css={styles.themeWrapper}>
      {ThemeType.map(theme => (
        <div css={styles.themeLabel}>{theme}</div>
      ))}
    </div>
  </div>
);
