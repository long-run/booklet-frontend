/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import * as React from 'react';
import SearchIcon from '../../SVG/Search.svg';
import { searchBoxStyles } from './styles';

export class SearchBox extends React.Component {
  render() {
    return (
      <div css={searchBoxStyles.searchBox}>
        <SearchIcon css={searchBoxStyles.searchIcon} />
        <input
          css={searchBoxStyles.searchInput}
          type="search"
          placeholder="Search book title, author"
        />
      </div>
    );
  }
}
