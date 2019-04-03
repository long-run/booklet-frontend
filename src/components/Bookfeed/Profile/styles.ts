import { css } from '@emotion/core';
import { colors } from '../../../styles/colors';

const imageSize = '40px';

export const ProfileStyles = {
  wrapper: css`
    display: flex;
    width: 100%;
    height: 64px;
    border-bottom: solid 1px ${colors.gray_10};
    background-color: white;
  `,
  profileImage: css`
    width: 100%;
  `,
  profileImageWrapper: css`
    margin: 12px;
    border-radius: ${imageSize};
    width: ${imageSize};
    height: ${imageSize};
    overflow: hidden;
  `,
  userName: css`
    line-height: 64px;
    color: ${colors.gray_80};
    font-size: 14px;
    font-weight: bold;
  `,
};
