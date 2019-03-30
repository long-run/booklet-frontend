import { css } from '@emotion/core';
import { colors } from '../../styles/colors';

export const ListItemstyles = {
  itemWrapper: css`
    width: 260px;
    height: 48px;
    line-height: 48px;
    color: ${colors.gray_50};
    font-size: 15px;
    border-bottom: 1px solid ${colors.gray_20};
    cursor: pointer;
    &:last-of-type {
      border-bottom: 0px;
    }
    &:hover {
      background: ${colors.gray_10};
    }
  `,
  heart: css`
    display: inline-block;
    width: 16px;
    padding: 14px 12px 16px;
    vertical-align: middle;
  `,
};
