import { css } from '@emotion/core';
import { colors } from '../../../styles/colors';

const imageSize = '40px';

export const header = css`
  background: white;
  display: flex;
`;

export const profileImageWrapper = css`
  width: ${imageSize};
  height: ${imageSize};
  border-radius: ${imageSize};
  overflow: hidden;
`;

export const profileImage = css`
  width: 100%;
`;

export const postMetadata = css``;

export const userName = css`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.gray_80};
`;

export const modifiedDate = css`
  font-size: 14px;
  color: ${colors.gray_50};
`;

export const postEditWrapper = css``;

export const editButton = css``;

export const editModal = css``;
