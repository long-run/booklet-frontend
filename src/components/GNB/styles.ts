import { css } from '@emotion/core';
import { colors } from '../../styles/colors';

export const wrapper = css`
  display: flex;
  height: 24px;
  padding: 18px 20px;
  background-color: ${colors.coralPink_50};
  flex-direction: row;
`;

export const symbolStyle = css`
  display: inline-block;
  width: 20px;
  height: 24px;
  color: white;
  cursor: pointer;
  fill: white;
`;

export const logoStyle = css`
  display: inline-block;
  padding-left: 10px;
  margin-bottom: 5px;
  height: 14px;
  color: white;
  cursor: pointer;
  fill: white;
`;

export const logoWrapper = css`
  display: inline-block;
  margin-left: 10px;
  &::before {
    position: absolute;
    top: 24px;
    width: 1px;
    height: 12px;
    opacity: 0.5;
    background: white;
    content: '';
  }
`;

export const titleStyle = css`
  display: inline-block;
  color: white;
  font-size: 15px;
  flex: auto;
`;

export const profileImageStyle = css`
  display: inline-block;
  margin-top: -2px;
  width: 28px;
  height: 28px;
  color: white;
  border-radius: 100px;
  cursor: pointer;
`;
