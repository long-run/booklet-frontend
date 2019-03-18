import { css } from '@emotion/core';
import { colors } from '../../styles/colors';

export const BookFeedStyles = {
  wrapper: css`
    display: flex;
    width: auto;
    height: 50px;
    border-bottom: solid 1px ${colors.gray_10};
    cursor: pointer;
    padding: 0 17px;
  `,
  label: css`
    flex: auto;
    line-height: 50px;
    color: ${colors.gray_60};
    font-size: 16px;
  `,
};
