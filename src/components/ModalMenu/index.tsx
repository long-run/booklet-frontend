/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
import { PostStatus } from '../Post/Summary/index';
import * as styles from './styles';
import { ModalMenuItem } from '../ModalMenuItem';
import HeartIcon from '../SVG/Heart.svg';
import CheckIcon from '../SVG/Check.svg';

import BookmarkIcon from '../SVG/Bookmark.svg';
export interface ModalMenuProps<K> {
  isOpen: boolean;
  itemList: Array<K>;
  active: K;
}

type MenuProps = ModalMenuProps<string>;

export const ModalMenu: FunctionComponent<MenuProps> = props => {
  return (
    <div css={styles.dim}>
      <ul css={styles.shapeWrapper}>
        {props.itemList.map(item => (
          <ModalMenuItem label={item} active={item === props.active} />
        ))}
      </ul>
    </div>
  );
};

type PostStatusMenuProps = ModalMenuProps<PostStatus>;

export const PostStatusMenu: FunctionComponent<PostStatusMenuProps> = props => {
  const iconMap = {
    [PostStatus.WantToRead]: HeartIcon,
    [PostStatus.CurrentlyReading]: BookmarkIcon,
    [PostStatus.Read]: CheckIcon,
  };
  return (
    <div css={styles.dim}>
      <ul css={styles.shapeWrapper}>
        {props.itemList.map(item => (
          <ModalMenuItem label={item} active={item === props.active} icon={iconMap[item]} />
        ))}
      </ul>
    </div>
  );
};
