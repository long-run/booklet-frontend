/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import { ReactEventHandler } from 'react';
import StarIcon from '../../SVG/Star.svg';
import BookmarkIcon from '../../SVG/Bookmark.svg';
import ArrowIcon from '../../SVG/NoneDashedArrowDown.svg';
import * as styles from './styles';

export enum PostStatus {
  WantToRead = 'Want To Read',
  CurrentlyReading = 'Currently Reading',
  Read = 'Read',
}

export interface SummaryProps {
  title: string;
  author: string;
  rating: number;
  coverImage: string;
  backgroundImage: string;
  status: PostStatus;
  onClickStatus?: ReactEventHandler;
}

export const Summary: React.FunctionComponent<SummaryProps> = (props: SummaryProps) => {
  const { title, author, rating, coverImage, backgroundImage, status } = props;

  return (
    <div css={styles.summary(backgroundImage)}>
      <div css={styles.summaryWrapper}>
        <div css={styles.bookCoverWrapper}>
          <img css={styles.bookCover} src={coverImage} alt={`${title} cover image`} />
        </div>
        <div css={styles.metadataWrapper}>
          <h1>
            <a css={styles.metadataTitle} href="#">
              {title}
            </a>
          </h1>
          <p>
            <a css={styles.metadataAuthor} href="#">
              {author}
            </a>
          </p>
        </div>
        <div css={styles.rateAndStatusWrapper}>
          <p>
            {Array.from(Array(5), (_, index) => (
              <StarIcon className={index < rating ? 'active' : ''} css={styles.rateIcon} />
            ))}
            <span className="a11y">{rating}점</span>
          </p>
          <div css={styles.statusButtonWrapper}>
            <button type="button" css={styles.statusButton} onClick={props.onClickStatus}>
              <BookmarkIcon css={styles.statusIcon} />
              <span css={styles.statusLabel}>{status}</span>
              <ArrowIcon css={styles.arrowIcon} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
