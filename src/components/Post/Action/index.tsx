/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import LikeIcon from '../../SVG/Like.svg';
import * as styles from './styles';

export interface ActionProps {
  liked: boolean;
  likeCount: number;
}

export const Action: React.FunctionComponent<ActionProps> = (props: ActionProps) => {
  const { liked, likeCount } = props;
  console.log(liked);
  return (
    <div css={styles.actionWrapper}>
      <button type="button" css={styles.likeButton}>
        <LikeIcon css={styles.likeIcon} />
        {likeCount} Likes
      </button>
    </div>
  );
};
