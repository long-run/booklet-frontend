import { css } from '@emotion/core';
import * as _colors from './colors';

export const lineClamp = (lineNum: number = 2) => css`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
  word-break: break-all;
  word-wrap: break-word;
  line-height: 1.4em;
  text-overflow: ellipsis;
  -webkit-line-clamp: ${lineNum};
  max-height: ${lineNum * 1.4}em;
`;

export const colors = _colors;
