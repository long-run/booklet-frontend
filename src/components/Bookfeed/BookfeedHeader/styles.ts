import { css } from '@emotion/core';
import { colors } from '../../../styles/colors';

export const BookfeedHeaderStyles = {
  wrapper: css`
    display: flex;
    width: 100%;
    height: 44px;
    background-color: ${colors.gray_10};
  `,
  arrow: css`
    display: inline-block;
    height: 15px;
    width: 10px;
    padding: 14px;
    flex-direction: row;
    cursor: pointer;
  `,
  title: css`
    display: inline-block;
    width: 100%;
    font-size: 17px;
    color: ${colors.gray_50};
    line-height: 44px;
    text-align: center;
    flex: auto;
  `,
  addButton: css`
    font-size: 17px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 44px;
    padding: 0 16px;
    letter-spacing: normal;
    color: ${colors.gray_30};
  `,
};
