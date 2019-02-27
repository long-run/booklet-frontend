import { css } from '@emotion/core';
import { colors } from '../../styles/colors';

export const wrapper = css`
  display: flex;
  height: 24px;
  padding: 10px 12px;
  background-color: ${colors.coralPink_50};
  flex-direction: row;
`;

export const titleStyle = css`
  display: inline-block;
  color: white;
  font-size: 15px;
  flex: auto;
`;

export const profileImageStyle = css`
  display: inline-block;
  width: 24px;
  height: 24px;
  color: white;
  border-radius: 100px;
  cursor: pointer;
`;
