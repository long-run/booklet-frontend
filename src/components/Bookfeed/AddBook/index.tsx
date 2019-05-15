/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import * as React from 'react';
import SearchIcon from '../../SVG/Search.svg';
import { colors } from '../../../styles/colors';
import { BookSearchStyles } from './styles';
import Link from 'next/link';

export const AddBook: React.FunctionComponent = () => (
  <Link href="/search">
    <a css={BookSearchStyles.wrapper}>
      <div css={BookSearchStyles.label}>Book Title</div>
      <SearchIcon css={BookSearchStyles.searchIcon} fill={colors.gray_20} />
    </a>
  </Link>
);
