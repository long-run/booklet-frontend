import { css } from '@emotion/core';
import { colors } from '../../styles/colors';

export const wrapper = css`
  display: flex;
  height: 40px;
  padding: 8px;
  background-color: white;
  flex-direction: row;
  cursor: pointer;
`;

export const buttonStyle = css`
  display: flex;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  background-color: ${colors.gray_10};
`;

export const textStyle = css`
  display: inline-block;
  width: 100%;
  line-height: 40px;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: ${colors.gray_50};
`;

export const profileImageStyle = css`
  display: inline-block;
  width: 24px;
  height: 24px;
  color: white;
  border-radius: 100px;
  cursor: pointer;
`;

export const logoStyle = css`
  display: inline-block;
  width: 16px;
  height: 16px;
  padding: 12px 12px 12px 16px;
  color: white;
  cursor: pointer;
`;
