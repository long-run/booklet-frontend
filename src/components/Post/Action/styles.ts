import { css } from '@emotion/core';
import { colors } from '../../../styles/colors';

export const actionWrapper = css`
  padding: 16px;
  background: white;
`;
export const likeButton = css`
  color: ${colors.coralPink_50};
  font-size: 14px;
  height: 1em;
  line-height: 1em;
  font-weight: 900;
`;
export const likeIcon = (isLike: boolean) => css`
  width: 16px;
  height: 16px;
  vertical-align: top;
  fill: ${isLike ? colors.coralPink_50 : colors.gray_50};
  margin-right: 12px;
`;
export const likeCount = css``;
