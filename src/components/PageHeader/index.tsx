/** @jsx jsx */
jsx;
import { jsx } from '@emotion/core';
import Link from 'next/link';
import * as React from 'react';
import { colors } from '../../styles/colors';
import ArrowIcon from '../SVG/Arrow.svg';
import { pageHeaderStyles } from './styles';

export interface PageHeaderState {
  headerTitle: string;
  returnUrl: string;
  actionButtonLabel?: string;
  isActionButtonActive?: boolean;
  onClickActionButton?: any;
}

export const PageHeader: React.FunctionComponent<PageHeaderState> = props => {
  const {
    headerTitle,
    returnUrl,
    actionButtonLabel,
    isActionButtonActive,
    onClickActionButton,
  } = props;
  return (
    <div css={pageHeaderStyles.wrapper}>
      <Link href={returnUrl || '/'}>
        <a css={pageHeaderStyles.arrow}>
          <ArrowIcon css={pageHeaderStyles.arrowIcon} fill={colors.gray_30} />
        </a>
      </Link>
      <div css={pageHeaderStyles.title}>{headerTitle}</div>
      {actionButtonLabel && (
        <button
          css={pageHeaderStyles.actionButton}
          className={isActionButtonActive ? 'active' : undefined}
          onClick={onClickActionButton}
        >
          {actionButtonLabel}
        </button>
      )}
    </div>
  );
};
