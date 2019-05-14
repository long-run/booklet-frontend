import { css } from '@emotion/core';
import { colors } from '../../styles/colors';
import { lineClamp } from '../../styles';

export const dim = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 900;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const shapeWrapper = css`
  width: 260px;
  padding: 4px 0;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  z-index: 910;
`;
