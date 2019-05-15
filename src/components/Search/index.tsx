/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import * as React from 'react';
import { PageHeader } from '../PageHeader';
import { searchStyles } from './styles';
import { SearchBox } from './SearchBox';
import { BookList } from '../BookList';

const bookListsMock = {
  '1': {
    thumbnailUrl: 'https://misc.ridibooks.com/cover/1546000541/xxlarge',
    title: '팩트풀니스',
    author: '한스 로슬링',
    id: '1',
  },
  '2': {
    thumbnailUrl: 'https://misc.ridibooks.com/cover/606001906/xxlarge',
    title: '시작의 기술',
    author: '개리 비숍',
    id: '2',
  },
  '3': {
    thumbnailUrl: 'https://misc.ridibooks.com/cover/1780000157/xxlarge',
    title: '아주 작은 습관의 힘',
    author: '제임스 클리어',
    id: '3',
  },
  '4': {
    thumbnailUrl: 'https://misc.ridibooks.com/cover/372003443/xxlarge',
    title: '철학은 어떻게 삶의 무기가 되는가',
    author: '야마구치 슈',
    id: '4',
  },
};

export class Search extends React.Component {
  handleBookListButton(id: string) {
    console.log(bookListsMock[id]);
  }
  render() {
    return (
      <article css={searchStyles.page}>
        <PageHeader headerTitle="Search Book" />
        <div css={searchStyles.searchBoxWrapper}>
          <SearchBox />
        </div>
        <div css={searchStyles.bookLists}>
          <h3 css={searchStyles.bookListSectionTitle}>Feature</h3>
          {Object.values(bookListsMock).map(bookList => (
            <BookList
              key={bookList.id}
              id={bookList.id}
              thumbnailUrl={bookList.thumbnailUrl}
              title={bookList.title}
              author={bookList.author}
              onClickBookList={this.handleBookListButton}
            />
          ))}
        </div>
      </article>
    );
  }
}
