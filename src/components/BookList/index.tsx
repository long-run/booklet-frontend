/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import * as React from 'react';
import { bookListStyle } from './styles';

export interface BookListProps {
  thumbnailUrl: string;
  title: string;
  author: string;
  onClickBookList: any;
  id: string;
}
export class BookList extends React.Component<BookListProps> {
  render() {
    const { thumbnailUrl, title, author, onClickBookList, id } = this.props;

    return (
      <article css={bookListStyle.wrapper}>
        <img css={bookListStyle.thumbnail} src={thumbnailUrl} alt={`${title} thumbnail image`} />
        <div css={bookListStyle.metaData}>
          <p css={bookListStyle.title}>{title}</p>
          <p css={bookListStyle.author}>{author}</p>
        </div>
        <button
          css={bookListStyle.fullButton}
          onClick={() => {
            onClickBookList(id);
          }}
        >
          {title} 선택 버튼
        </button>
      </article>
    );
  }
}
