/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import * as React from 'react';
import { colors } from '../../../styles/colors';
import ArrowDownIcon from '../../SVG/ArrowDown.svg';
import { BookFeedStyles } from '../styles';
import * as styles from './styles';

export const ReadingStatus: React.FunctionComponent = () => (
  <div css={BookFeedStyles.wrapper}>
    <div css={BookFeedStyles.label}>Status</div>
    <div css={styles.dropdown}>
      <span>Currently Reading</span>
      <ArrowDownIcon css={styles.arrowDownIcon} fill={colors.gray_20} />
    </div>
  </div>
);
