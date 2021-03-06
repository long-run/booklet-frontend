/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import * as React from 'react';
import BookIcon from '../SVG/Book.svg';
import * as styles from './styles';
import { colors } from '../../styles/colors';
import Link from 'next/link';

type AddPostProps = {};

export const AddPost: React.FunctionComponent<AddPostProps> = () => (
  <Link href="/bookfeed">
    <div css={styles.wrapper}>
      <div css={styles.buttonStyle}>
        <BookIcon css={styles.logoStyle} fill={colors.gray_50} />
        <div css={styles.textStyle}>What book did you read today?</div>
      </div>
    </div>
  </Link>
);
