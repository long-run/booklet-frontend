/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import { FocusEventHandler, FunctionComponent } from 'react';
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
  onBlur?: FocusEventHandler;
  onClick?: (item: K) => any;
}

type PostStatusMenuProps = ModalMenuProps<PostStatus>;

export const PostStatusMenu: FunctionComponent<PostStatusMenuProps> = props => {
  const iconMap = {
    [PostStatus.WantToRead]: HeartIcon,
    [PostStatus.CurrentlyReading]: BookmarkIcon,
    [PostStatus.Read]: CheckIcon,
  };
  if (!props.isOpen) return null;
  return (
    <div css={styles.dim}>
      <ul css={styles.shapeWrapper} onBlur={props.onBlur}>
        {props.itemList.map(item => (
          <ModalMenuItem
            label={item}
            active={item === props.active}
            icon={iconMap[item]}
            onClick={() => props.onClick!(item)}
          />
        ))}
      </ul>
    </div>
  );
};

export enum PostEdit {
  Edit = 'Edit',
  Delete = 'Delete',
}

type PostEditMenuProps = ModalMenuProps<PostEdit>;

export const PostEditMenu: FunctionComponent<PostEditMenuProps> = props => {
  const iconMap = {
    [PostEdit.Edit]: HeartIcon,
    [PostEdit.Delete]: HeartIcon,
  };
  return (
    <div css={styles.dim} onBlur={props.onBlur}>
      <ul css={styles.shapeWrapper}>
        {props.itemList.map(item => (
          <ModalMenuItem
            label={item}
            active={item === props.active}
            icon={iconMap[item]}
            onClick={() => props.onClick!(item)}
          />
        ))}
      </ul>
    </div>
  );
};
