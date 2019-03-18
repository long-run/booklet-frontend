import { css } from '@emotion/core';
import { BookFeedStyles } from '../styles';
import { colors } from '../../../styles/colors';

export const BookSearchStyles = {
  ...BookFeedStyles,
  searchIcon: css`
    width: 18px;
    height: 18px;
    padding: 17px 0;

    &:hover {
      fill: ${colors.gray_30};
    }
  `,
};
