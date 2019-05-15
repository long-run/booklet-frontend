import { css } from '@emotion/core';
import { colors } from '../../styles/colors';

const thumbnailHeight = 90;

export const bookListStyle = {
  wrapper: css`
    position: relative;
    display: flex;
    min-height: ${thumbnailHeight}px;
    margin-top: 16px;
    &:first-of-type {
      margin-top: 0;
    }
  `,
  thumbnail: css`
    flex: 0 1 auto;
    width: 60px;
    height: ${thumbnailHeight}px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  `,
  metaData: css`
    flex: 1 0 0;
    padding-left: 16px;
  `,
  title: css`
    width: 100%;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.4em;
    color: ${colors.gray_80};
    margin-top: 20px;
  `,
  author: css`
    width: 100%;
    font-size: 12px;
    line-height: 1.4em;
    color: ${colors.gray_50};
  `,
  fullButton: css`
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    font-size: 0;
    color: transparent;
  `,
};
