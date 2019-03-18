import { css } from '@emotion/core';
import { colors } from '../../../styles/colors';

const imageSize = '40px';

export const ProfileStyles = {
  wrapper: css`
    display: flex;
    width: 100%;
    height: 64px;
    border-bottom: solid 1px ${colors.gray_10};
  `,
  profileImage: css`
    width: ${imageSize};
    height: ${imageSize};
    border-radius: ${imageSize};
    overflow: hidden;
  `,
  profileImageWrapper: css`
    padding: 12px;
  `,
  userName: css`
    line-height: 64px;
    color: ${colors.gray_80};
    font-size: 14px;
    font-weight: bold;
  `,
};
