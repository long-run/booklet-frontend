import { css } from '@emotion/core';
import { colors } from '../../../styles/colors';

export const wrapper = css`
  display: block;
  min-height: 250px;
  height: calc(100vh - 430px);
  border-bottom: solid 1px ${colors.gray_10};
  padding: 16px 17px;
  background-color: white;
`;

export const text = css`
  display: block;
  color: ${colors.gray_60};
  font-size: 16px;
  width: 100%;
  min-height: 250px;
  height: calc(100vh - 430px);
`;
