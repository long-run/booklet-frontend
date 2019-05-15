import { css } from '@emotion/core';
import { colors } from '../../../styles/colors';

export const searchBoxStyles = {
  searchBox: css`
    background: ${colors.gray_10};
    border-radius: 30px;
    position: relative;
    padding: 11px 20px 11px 44px;
    height: 18px;
  `,
  searchIcon: css`
    position: absolute;
    left: 18px;
    top: 50%;
    width: 14px;
    height: 14px;
    transform: translate3d(0, -50%, 0);
    fill: ${colors.gray_50};
  `,
  searchInput: css`
    display: block;
    width: 100%;
    font-size: 14px;
    height: 18px;
    line-height: 18px;
    color: ${colors.gray_50};
    vertical-align: top;
  `,
};
