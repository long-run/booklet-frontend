/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import StarIcon from '../../SVG/Star.svg';
import BookmarkIcon from '../../SVG/Bookmark.svg';
import ArrowIcon from '../../SVG/NoneDashedArrowDown.svg';

export enum PostStatus {
  WantToRead,
  CurrentlyReading,
  Read,
}
export interface SummaryProps {
  title: string;
  author: string;
  rating: number;
  coverImage: string;
  status: PostStatus;
}

export const Summary: React.FunctionComponent<SummaryProps> = (props: SummaryProps) => {
  const { title, author, rating, coverImage, status } = props;
  return (
    <div>
      <div>
        <img src={coverImage} alt={`${title} cover image`} />
      </div>
      <div>
        <h1>{title}</h1>
        <p>{author}</p>
      </div>
      <div>
        <p>
          <StarIcon />
          {rating}점
        </p>
        <button type="button">
          <BookmarkIcon />
          {status}
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
};
