/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import * as React from 'react';
import { connect } from 'react-redux';
import { BookFeedState } from '../../service/bookFeed/reducer';
import { ProfileState } from '../../service/profile/reducer';
import { AddBook } from './AddBook';
import { PostDescription } from './PostDescription';
import { PostStatusMenu } from '../ModalMenu';
import { PostStatus } from '../Post/Summary';
import { BookfeedHeader } from './BookfeedHeader';
import { PostTheme } from './PostTheme';
import { Profile } from './Profile';
import { Rating } from './Rating';
import { ReadingStatus } from './ReadingStatus';
import * as styles from './styles';

export interface BookfeedProps {
  bookFeed: BookFeedState;
  profile: ProfileState;
}

type BookfeedInnerState = {
  isOpen: boolean;
  selected?: any;
};

export class _Bookfeed extends React.Component<BookfeedProps, BookfeedInnerState> {
  state = { isOpen: false, selected: this.props.bookFeed.status };
  setIsOpen = () => this.setState({ isOpen: !this.state.isOpen });
  setSelected = (selected: any) => {
    this.setState({ selected, isOpen: false });
  };

  render() {
    const { selected, isOpen } = this.state;
    const { profile, bookFeed } = this.props;

    return (
      <div css={styles.body}>
        <BookfeedHeader {...bookFeed} />
        <Profile {...profile} />
        <AddBook />
        <Rating {...bookFeed} />
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

const mapStateToProps = ({ bookFeed, profile }: any) => ({ bookFeed, profile });

export const Bookfeed = connect(mapStateToProps)(_Bookfeed);
