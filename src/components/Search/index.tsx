/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import * as React from 'react';
import { PageHeader } from '../PageHeader';
import { searchStyles } from './styles';
import { SearchBox } from './SearchBox';

export class Search extends React.Component {
  render() {
    return (
      <article css={searchStyles.page}>
        <PageHeader headerTitle="Search Book" />
        <div css={searchStyles.searchBoxWrapper}>
          <SearchBox />
        </div>
        <div css={searchStyles.bookLists}>dkdkdkddk</div>
      </article>
    );
  }
}
