/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import * as React from 'react';
import { ReactEventHandler } from 'react';
import { colors } from '../../../styles/colors';
import { PostStatus } from '../../Post/Summary';
import ArrowDownIcon from '../../SVG/ArrowDown.svg';
import { BookFeedStyles } from '../styles';
import * as styles from './styles';

export interface ReadingStatusProps {
  status: PostStatus;
  onClickStatus?: ReactEventHandler;
}

export const ReadingStatus: React.FunctionComponent<ReadingStatusProps> = props => (
  <div css={BookFeedStyles.wrapper}>
    <div css={BookFeedStyles.label}>Status</div>
    <div css={styles.dropdown} onClick={props.onClickStatus}>
      <span>{props.status}</span>
      <ArrowDownIcon css={styles.arrowDownIcon} fill={colors.gray_20} />
    </div>
  </div>
);
