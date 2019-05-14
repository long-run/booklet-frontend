/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import * as React from 'react';
import * as styles from './styles';
export interface ReviewProps {
  note: string;
}

export class Review extends React.Component<ReviewProps> {
  state = { isFolded: null };
  reviewBody: null | HTMLParagraphElement = null;

  applyLineClamp() {
    if (this.reviewBody) {
      const { clientHeight: reviewBodyHeight } = this.reviewBody;
      const { isFolded } = this.state;
      if (reviewBodyHeight && isFolded === null) {
        this.setState({
          isFolded: reviewBodyHeight > styles.foldedReviewMaxHeight,
        });
      }
    }
  }

  unfoldReview() {
    this.setState({
      isFolded: false,
    });
  }

  render() {
    const { note } = this.props;
    const { isFolded } = this.state;
    return (
      <div css={styles.reviewWrapper}>
        <p
          css={[styles.review, isFolded && styles.lineClamp]}
          dangerouslySetInnerHTML={{ __html: note }}
          ref={wrapper => {
            this.reviewBody = wrapper;
            this.applyLineClamp();
          }}
        />
        {isFolded && (
          <button
            type="button"
            css={styles.moreButton}
            onClick={() => {
              this.unfoldReview();
            }}
          >
            Read more
          </button>
        )}
      </div>
    );
  }
}
