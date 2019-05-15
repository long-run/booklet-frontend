import { css } from '@emotion/core';
import { colors } from '../../styles/colors';

export const searchStyles = {
  page: css`
    background: white;
    min-height: 100vh;
  `,
  searchBoxWrapper: css`
    padding: 11px 8px 0 8px;
  `,
  bookLists: css`
    padding: 16px;
  `,
  bookListSectionTitle: css`
    font-size: 12px;
    font-weight: normal;
    color: ${colors.gray_50};
    padding-bottom: 19px;
  `,
};
