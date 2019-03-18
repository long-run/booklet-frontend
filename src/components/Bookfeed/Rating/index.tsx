/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import * as React from 'react';
import { colors } from '../../../styles/colors';
import StarIcon from '../../SVG/Star.svg';
import { BookFeedStyles } from '../styles';
import * as styles from './styles';

export class Rating extends React.Component {
  state = { hoverIndex: -1, selectedIndex: -1 };

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
            onClick={() => this.setSelectedIndex(item)}
          />
        ))}
      </div>
    );
  }
}
