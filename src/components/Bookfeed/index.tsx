/** @jsx jsx */ jsx;
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import ArrowIcon from '../SVG/Arrow.svg';
import ArrowDownIcon from '../SVG/ArrowDown.svg';
import SearchIcon from '../SVG/Search.svg';
import StarIcon from '../SVG/Star.svg';
// import * as styles from './styles';
import { colors } from '../../styles/colors';
import { HeaderProps } from '../Post/Header';

export interface BookfeedProps extends HeaderProps {}

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

const imageSize = '40px';

const ProfileStyles = {
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
const BookFeedStyles = {
  wrapper: css`
    display: flex;
    width: auto;
    height: 50px;
    border-bottom: solid 1px ${colors.gray_10};
    cursor: pointer;
    padding: 0 17px;
  `,
  label: css`
    flex: auto;
    line-height: 50px;
    color: ${colors.gray_60};
    font-size: 16px;
  `,
};

const BookSearchStyles = {
  ...BookFeedStyles,
  searchIcon: css`
    width: 18px;
    height: 18px;
    padding: 17px 0;
  `,
};

const starIcon = css`
  width: 18px;
  height: 18px;
  padding: 17px 2px;
`;

const arrowDownIcon = css`
  width: 14px;
`;

const dropdown = css`
  width: 157px;
  display: flex;
  height: 100%;
  color: ${colors.gray_60};
  font-size: 16px;
  line-height: 50px;

  span {
    flex: auto;
  }
`;

const themeLabel = css`
  height: fit-content;
  border-radius: 30px;
  color: ${colors.gray_20};
  font-size: 14px;
  line-height: 1;
  padding: 5px 8px 7px 8px;
  box-shadow: 0 0 0 1px ${colors.gray_20};
`;

export const Bookfeed: React.FunctionComponent<BookfeedProps> = (props: BookfeedProps) => (
  <>
    <div css={TopbarStyles.wrapper}>
      <ArrowIcon css={TopbarStyles.arrow} fill={colors.gray_30} />
      <div css={TopbarStyles.title}>Add Post</div>
      <div css={TopbarStyles.addButton}>Share</div>
    </div>
    <div css={ProfileStyles.wrapper}>
      <div css={ProfileStyles.profileImageWrapper}>
        <img
          css={ProfileStyles.profileImage}
          src={props.userProfileImage}
          alt={`${props.userName} profile image`}
        />
      </div>
      <div css={ProfileStyles.userName}>{props.userName}</div>
    </div>
    {/* book title */}
    <div css={BookSearchStyles.wrapper}>
      <div css={BookSearchStyles.label}>Book Title</div>
      <SearchIcon css={BookSearchStyles.searchIcon} fill={colors.gray_20} />
    </div>
    {/* rating */}
    <div css={BookFeedStyles.wrapper}>
      <div css={BookFeedStyles.label}>Rating</div>
      {[...Array(5).keys()].map(() => (
        <StarIcon css={starIcon} fill={colors.gray_20} />
      ))}
    </div>
    <div css={BookFeedStyles.wrapper}>
      <div css={BookFeedStyles.label}>Status</div>
      <div css={dropdown}>
        <span>Currently Reading</span>
        <ArrowDownIcon css={arrowDownIcon} fill={colors.gray_20} />
      </div>
    </div>
    {/* background theme */}
    <div css={BookFeedStyles.wrapper}>
      <div css={BookFeedStyles.label}>Background Theme</div>
      <div css={themeLabel}>Black</div>
    </div>
    {/* description */}
    <div css={BookFeedStyles.wrapper}>
      <div css={BookFeedStyles.label}>Description (optional)</div>
    </div>
  </>
);
