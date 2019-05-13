import { css } from '@emotion/core';
import { colors } from '../../styles/colors';

export const ListItemStyles = {
  itemWrapper: css`
    position: relative;
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
    &.active {
      color: ${colors.coralPink_50};
    }
  `,
  icon: css`
    display: inline-block;
    width: 16px;
    padding: 14px 12px 16px;
    vertical-align: middle;
    fill: ${colors.gray_50};
    .active & {
      fill: ${colors.coralPink_50};
    }
  `,
  checked: css`
    position: absolute;
    right: 12px;
    display: inline-block;
    width: 20px;
    padding: 14px 0px 14px 12px;
    vertical-align: middle;
    fill: ${colors.coralPink_50};
  `,
};
