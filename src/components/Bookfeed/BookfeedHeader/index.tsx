/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import * as React from 'react';
import { colors } from '../../../styles/colors';
import ArrowIcon from '../../SVG/Arrow.svg';
import { BookfeedHeaderStyles } from './styles';

export const BookfeedHeader: React.FunctionComponent = () => (
  <div css={BookfeedHeaderStyles.wrapper}>
    <ArrowIcon css={BookfeedHeaderStyles.arrow} fill={colors.gray_30} />
    <div css={BookfeedHeaderStyles.title}>Add Post</div>
    <div css={BookfeedHeaderStyles.addButton}>Share</div>
  </div>
);
