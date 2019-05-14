/** @jsx jsx */
jsx;
import { jsx } from '@emotion/core';
import * as React from 'react';
import { BookFeedState } from '../../../service/bookFeed/reducer';
import { colors } from '../../../styles/colors';
import ArrowIcon from '../../SVG/Arrow.svg';
import { BookfeedHeaderStyles } from './styles';

export const BookfeedHeader: React.FunctionComponent<BookFeedState> = props => (
  <div css={BookfeedHeaderStyles.wrapper}>
    <ArrowIcon css={BookfeedHeaderStyles.arrow} fill={colors.gray_30} />
    <div css={BookfeedHeaderStyles.title}>Add Post</div>
    <div
      css={BookfeedHeaderStyles.addButton}
      className={props.note.length > 0 ? 'active' : undefined}
    >
      Share
    </div>
  </div>
);
