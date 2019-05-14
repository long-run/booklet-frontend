import { css, keyframes } from '@emotion/core';
import { colors } from '../../../styles/colors';

const handsUp = keyframes`
	25% {transform: rotate(20deg) scale(1.2);}
	50% {transform: rotate(-15deg) translateY(-10px) scale(1);}
	100% {transform: rotate(0deg) scale(1);}
`;

export const actionWrapper = css`
  padding: 16px;
  background: white;
`;

export const likeButton = (isLike: boolean) => css`
  color: ${isLike ? colors.coralPink_50 : colors.gray_50};
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

  &:hover,
  &.click {
    animation: ${handsUp} 1s linear 1;
  }
`;
export const likeCount = css``;
