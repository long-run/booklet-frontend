import { css } from '@emotion/core';
import { colors } from '../../../styles/colors';
import { lineClamp } from '../../../styles';

const imageSize = '40px';

export const header = css`
  background: white;
  display: flex;
  justify-content: space-between;
  padding: 12px 0 12px 12px;
`;

// image
export const profileImageWrapper = css`
  width: ${imageSize};
  height: ${imageSize};
  border-radius: ${imageSize};
  overflow: hidden;
  flex: 1 0 auto;
`;

export const profileImage = css`
  width: 100%;
`;

// meta
export const postMetadata = css`
  width: 100%;
  padding-left: 12px;
  flex: auto;
`;

export const userName = css`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.gray_80};
  ${lineClamp(1)}
`;

export const modifiedDate = css`
  font-size: 14px;
  color: ${colors.gray_50};
`;

// button
export const postEditWrapper = css`
  flex: 1 0 auto;
  position: relative;
`;

export const editButton = css`
  width: 16px;
  height: 16px;
  padding: 12px;
  box-sizing: content-box;
`;

export const threeDotIcon = css`
  width: 16px;
  height: 16px;
  fill: ${colors.gray_40};
`;

export const editModal = css`
  display: none;
  position: absolute;
  left: 50%;
  top: 20px;
  transform: translate3d(-50%, 0, 0);
`;
