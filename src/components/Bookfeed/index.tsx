/** @jsx jsx */ jsx;
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import ArrowIcon from '../SVG/Arrow.svg';
// import * as styles from './styles';
import { colors } from '../../styles/colors';
import Link from 'next/link';
import { HeaderProps, Header } from '../Post/Header';

export interface BookfeedProps extends HeaderProps {}

const getHeaderProps = ({
  userName,
  userProfileImage,
  modifiedDate,
}: HeaderProps): HeaderProps => ({ userName, userProfileImage, modifiedDate });

const TopbarStyles = {
  wrapper: css`
    display: flex;
    width: 100%;
    height: 44px;
    background-color: ${colors.gray_10};
  `,
  arrow: css`
    display: inline-block;
    height: 15px;
    width: 10px;
    padding: 14px;
    flex-direction: row;
    cursor: pointer;
  `,
  title: css`
    display: inline-block;
    width: 100%;
    font-size: 17px;
    color: ${colors.gray_50};
    line-height: 44px;
    text-align: center;
    flex: auto;
  `,
  addButton: css`
    font-size: 17px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 44px;
    padding: 0 16px;
    letter-spacing: normal;
    color: ${colors.gray_30};
  `,
};

const LineStyles = {
  wrapper: css`
    display: flex;
    width: 100%;
    height: 50px;
  `,
};

export const Bookfeed: React.FunctionComponent<BookfeedProps> = (props: BookfeedProps) => (
  <>
    <div css={TopbarStyles.wrapper}>
      <ArrowIcon css={TopbarStyles.arrow} fill={colors.gray_30} />
      <div css={TopbarStyles.title}>Add Post</div>
      <div css={TopbarStyles.addButton}>Share</div>
    </div>
    <div css={LineStyles.wrapper}>
      <Header {...getHeaderProps(props)} />
    </div>
  </>
);
