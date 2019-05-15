/** @jsx jsx */
jsx;
import { jsx } from '@emotion/core';
import * as React from 'react';
import { colors } from '../../styles/colors';
import ArrowIcon from '../SVG/Arrow.svg';
import { pageHeaderStyles } from './styles';
import Router from 'next/router';

export interface PageHeaderState {
  headerTitle: string;
  actionButtonLabel?: string;
  isActionButtonActive?: boolean;
  onClickActionButton?: any;
}

export const PageHeader: React.FunctionComponent<PageHeaderState> = props => {
  const { headerTitle, actionButtonLabel, isActionButtonActive, onClickActionButton } = props;
  return (
    <div css={pageHeaderStyles.wrapper}>
      <button css={pageHeaderStyles.arrow} onClick={() => Router.back()}>
        <ArrowIcon css={pageHeaderStyles.arrowIcon} fill={colors.gray_30} />
      </button>
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
