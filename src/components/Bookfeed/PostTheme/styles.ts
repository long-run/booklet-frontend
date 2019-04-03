import { css } from '@emotion/core';
import { colors } from '../../../styles/colors';

export const wrapper = css`
  display: block;
  height: 86px;
  border-bottom: solid 1px ${colors.gray_10};
  padding: 0 17px;
  background-color: white;
`;

export const label = css`
  line-height: 48px;
  color: ${colors.gray_60};
  font-size: 16px;
`;

export const themeWrapper = css`
  display: block;
  width: 100%;
`;

export const themeLabel = css`
  display: inline-block;
  width: fit-content;
  height: inherit;
  border-radius: 30px;
  color: ${colors.gray_20};
  font-size: 14px;
  line-height: 1;
  margin-right: 8px;
  padding: 5px 8px 7px 8px;
  box-shadow: 0 0 0 1px ${colors.gray_20};

  &:hover {
    color: white;
    background-color: ${colors.coralPink_50};
    box-shadow: 0 0 0 1px white;
  }
`;
