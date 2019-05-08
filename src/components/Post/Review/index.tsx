/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import * as styles from './styles';
export interface ReviewProps {
  note: string;
}

export const Review: React.FunctionComponent<ReviewProps> = (props: ReviewProps) => {
  const { note } = props;
  return (
    <div css={styles.reviewWrapper}>
      <p css={styles.review} dangerouslySetInnerHTML={{ __html: note }} />
      <button type="button" css={styles.moreButton}>
        Read more
      </button>
    </div>
  );
};
