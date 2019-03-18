/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import * as React from 'react';
import * as styles from './styles';

export const PostDescription: React.FunctionComponent = () => (
  <div css={styles.wrapper}>
    <textarea css={styles.text} placeholder="Description (optional)" />
  </div>
);
