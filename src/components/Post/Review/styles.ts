import { css } from '@emotion/core';
import { colors } from '../../../styles/colors';

export const reviewWrapper = css`
  padding: 12px 16px;
  border-top: 1px solid ${colors.gray_20};
`;

const maxLineNum = 5;
const fontSize = 14;
const lineHeight = 1.4;

export const foldedReviewMaxHeight = maxLineNum * fontSize * lineHeight;

export const review = css`
  display: block;
  font-size: ${fontSize}px;
  color: ${colors.gray_50};
  line-height: ${lineHeight}em;
  word-wrap: break-word;
  word-break: break-all;
  &:lang(ko) {
    word-break: keep-all;
  }
`;

export const lineClamp = css`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  max-height: ${foldedReviewMaxHeight}px;
  -webkit-line-clamp: ${maxLineNum};
`;

export const moreButton = css`
  margin-top: 10px;
  font-size: 12px;
  height: 1em;
  line-height: 1em;
  color: ${colors.coralPink_50};
  text-decoration: underline;
`;
