/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import LikeIcon from '../../SVG/Like.svg';
import * as styles from './styles';
import React from 'react';
import { ActionState } from '../../../service/app/reducer';

export class Action extends React.Component<ActionState> {
  state = {
    hover: false,
    liked: this.props.liked,
    likeCount: this.props.likeCount,
  };
  setHover = (hover: boolean) => this.setState({ hover });
  toggleLiked = () =>
    this.setState({
      liked: !this.state.liked,
      likeCount: this.state.liked ? this.state.likeCount - 1 : this.state.likeCount + 1,
    });

  render() {
    const { liked, likeCount } = this.state;

    return (
      <div css={styles.actionWrapper}>
        <button
          type="button"
          css={styles.likeButton(liked)}
          onClick={() => {
            this.toggleLiked();
            this.setHover(true);
          }}
        >
          <LikeIcon css={styles.likeIcon(liked)} className={liked ? 'click' : undefined} />
          {likeCount} Likes
        </button>
      </div>
    );
  }
}
