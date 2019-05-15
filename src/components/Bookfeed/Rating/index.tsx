/** @jsx jsx */
jsx;
import { jsx } from '@emotion/core';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bookFeedActions, BookFeedState } from '../../../service/bookFeed/reducer';
import { ProfileState } from '../../../service/profile/reducer';
import { colors } from '../../../styles/colors';
import StarIcon from '../../SVG/Star.svg';
import { BookFeedStyles } from '../styles';
import * as styles from './styles';

export interface RatingProps {
  bookFeed: BookFeedState;
  profile: ProfileState;
  setRating: any;
}

export class _Rating extends React.Component<RatingProps> {
  state = { hoverIndex: -1, selectedIndex: this.props.bookFeed.rating };

  setHoverIndex = (hoverIndex: number) => this.setState({ hoverIndex });
  setSelectedIndex = (selectedIndex: number) => this.setState({ selectedIndex });

  render() {
    const { hoverIndex, selectedIndex } = this.state;
    return (
      <div css={BookFeedStyles.wrapper}>
        <div css={BookFeedStyles.label}>Rating</div>
        {[...Array(5).keys()].map(item => (
          <StarIcon
            css={styles.starIcon}
            className={item <= hoverIndex || item <= selectedIndex ? 'hover' : ''}
            fill={colors.gray_20}
            onMouseEnter={() => this.setHoverIndex(item)}
            onMouseLeave={() => this.setHoverIndex(-1)}
            onClick={() => {
              this.props.setRating(item);
              this.setSelectedIndex(item);
            }}
          />
        ))}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(bookFeedActions, dispatch);
}

export const Rating = connect(
  null,
  mapDispatchToProps,
)(_Rating);
