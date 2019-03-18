/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import * as React from 'react';
import { AddBook } from '../Bookfeed/AddBook';
import { PostDescription } from '../Bookfeed/PostDescription';
// import * as styles from './styles';
import { HeaderProps } from '../Post/Header';
import { BookfeedHeader } from './BookfeedHeader';
import { Profile } from './Profile';
import { Rating } from './Rating';
import { ReadingStatus } from './ReadingStatus';
import { PostTheme } from './PostTheme';

export interface BookfeedProps extends HeaderProps {}

export const Bookfeed: React.FunctionComponent<BookfeedProps> = (props: BookfeedProps) => (
  <>
    <BookfeedHeader />
    <Profile {...props} />
    <AddBook />
    <Rating />
    <ReadingStatus />
    <PostTheme />
    <PostDescription />
  </>
);
