import { css } from '@emotion/core';
import { colors } from '../../../styles/colors';

export const dropdown = css`
  width: 157px;
  display: flex;
  height: 100%;
  color: ${colors.gray_60};
  font-size: 16px;
  line-height: 50px;

  span {
    flex: auto;
  }
`;

export const arrowDownIcon = css`
  width: 14px;
`;
