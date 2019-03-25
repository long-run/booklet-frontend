import { css } from '@emotion/core';
import { lineClamp, colors } from '../../../styles';

export const summary = (backgroundImage: any) => css`
  position: relative;
  background: black url(${backgroundImage}) center no-repeat;
  background-size: cover;
  padding: 36px 0 17px 0;

  ::after {
    content: '';
    background: black;
    opacity: 0.3;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 9;
  }
`;

export const summaryWrapper = css`
  position: relative;
  z-index: 10;
`;

export const bookCoverWrapper = css`
  width: 120px;
  margin: 0 auto;
  box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.3);
  font-size: 0;
  background: rgba(0, 0, 0, 0.5);
`;
export const bookCover = css`
  width: 100%;
`;

export const metadataWrapper = css`
  margin-top: 20px;
  padding: 0 16px;
`;

export const metadataTitle = css`
  font-size: 20px;
  color: white;
  font-weight: 900;
  line-height: 1.4em;
  ${lineClamp()}
`;
export const metadataAuthor = css`
  opacity: 0.8;
  font-size: 14px;
  color: white;
  ${lineClamp(1)}
`;

export const rateAndStatusWrapper = css`
  margin-top: 12px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
`;

export const rate = css``;
export const rateIcon = css`
  width: 20px;
  height: 19px;
  fill: rgba(255, 255, 255, 0.3);
  &.active {
    fill: ${colors.coralPink_70};
  }
`;

export const statusButtonWrapper = css`
  position: relative;
`;
export const statusButton = css`
  padding: 2px 0;
  vertical-align: top;
`;
export const statusIcon = css`
  width: 12px;
  height: 12px;
  fill: white;
  margin-right: 6px;
`;
export const statusLabel = css`
  font-size: 14px;
  color: white;
  line-height: 1em;
`;
export const arrowIcon = css`
  width: 10px;
  height: 10px;
  fill: white;
  margin-left: 8px;
`;
