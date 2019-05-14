/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import * as React from 'react';
import { AddBook } from '../Bookfeed/AddBook';
import { PostDescription } from '../Bookfeed/PostDescription';
import * as styles from './styles';
import { BookfeedHeader } from './BookfeedHeader';
import { Profile } from './Profile';
import { Rating } from './Rating';
import { ReadingStatus } from './ReadingStatus';
import { PostTheme } from './PostTheme';
import { PostStatus } from '../Post/Summary';
import { PostStatusMenu } from '../ModalMenu';
import { PostProps } from '../Post';

export interface BookfeedProps extends PostProps {}

type BookfeedState = {
  isOpen: boolean;
  selected?: any;
};

export class Bookfeed extends React.Component<BookfeedProps, BookfeedState> {
  state = { isOpen: false, selected: this.props.status };
  setIsOpen = () => this.setState({ isOpen: !this.state.isOpen });
  setSelected = (selected: any) => {
    this.setState({ selected, isOpen: false });
  };

  render() {
    const { selected, isOpen } = this.state;

    return (
      <div css={styles.body}>
        <BookfeedHeader {...this.props} />
        <Profile {...this.props} />
        <AddBook {...this.props} />
        <Rating {...this.props} />
        <ReadingStatus status={selected} onClickStatus={this.setIsOpen} />
        <PostTheme />
        <PostDescription />
        <PostStatusMenu
          isOpen={isOpen}
          active={selected}
          itemList={Object.values(PostStatus)}
          onBlur={this.setIsOpen}
          onClick={this.setSelected}
        />
      </div>
    );
  }
}
