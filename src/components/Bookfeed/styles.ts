import { css } from '@emotion/core';
import { colors } from '../../styles/colors';

export const body = css`
  background: white;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

export const selectedBookList = css`
  padding: 16px;
  border-bottom: solid 1px ${colors.gray_10};
`;

export const BookFeedStyles = {
  wrapper: css`
    display: flex;
    width: auto;
    height: 50px;
    border-bottom: solid 1px ${colors.gray_10};
    cursor: pointer;
    padding: 0 17px;
    background-color: white;
  `,
  label: css`
    flex: auto;
    line-height: 50px;
    color: ${colors.gray_60};
    font-size: 16px;
  `,
};
