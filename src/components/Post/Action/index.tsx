/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import LikeIcon from '../../SVG/Like.svg';
export interface ActionProps {
  liked: boolean;
  likeCount: number;
}

export const Action: React.FunctionComponent<ActionProps> = (props: ActionProps) => {
  const { liked, likeCount } = props;
  console.log(liked);
  return (
    <div>
      <button type="button">
        <LikeIcon />
        {likeCount} Likes
      </button>
    </div>
  );
};
