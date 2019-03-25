import { css } from '@emotion/core';
import { colors } from '../../../styles/colors';

export const reviewWrapper = css`
  padding: 12px 16px;
  border-top: 1px solid ${colors.gray_20};
`;
export const review = css`
  font-size: 14px;
  color: ${colors.gray_50};
  line-height: 1.4em;
  word-break: keep-all;
`;
export const moreButton = css`
  margin-top: 10px;
  font-size: 12px;
  height: 1em;
  line-height: 1em;
  color: ${colors.coralPink_50};
  text-decoration: underline;
`;
