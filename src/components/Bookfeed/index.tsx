/** @jsx jsx */

jsx;
import { jsx } from '@emotion/core';
import Router from 'next/router';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bookFeedActions, BookFeedState, ThemeType } from '../../service/bookFeed/reducer';
import { postsActions } from '../../service/posts';
import { ProfileState } from '../../service/profile/reducer';
import { PostStatusMenu } from '../ModalMenu';
import { PostStatus } from '../Post/Summary';
import { AddBook } from './AddBook';
import { BookfeedHeader } from './BookfeedHeader';
import { PostDescription } from './PostDescription';
import { PostTheme } from './PostTheme';
import { Profile } from './Profile';
import { Rating } from './Rating';
import { ReadingStatus } from './ReadingStatus';
import * as styles from './styles';

export interface BookfeedProps {
  bookFeed: BookFeedState;
  profile: ProfileState;
  setStatus: any;
  addPost: any;
}

type BookfeedInnerState = {
  isOpen: boolean;
  selected?: any;
};

const themeTypeToImage = (themeType: ThemeType) => {
  switch (themeType) {
    case ThemeType.Romantic:
      return 'https://images.unsplash.com/photo-1493743862645-5046ebe0bcef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1287&q=80';
    case ThemeType.Neutral:
      return 'https://images.unsplash.com/photo-1548860451-acd6e1e3591f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80';
    case ThemeType.Mysterious:
      return 'https://images.unsplash.com/photo-1550627951-4ebb041775ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80';
    case ThemeType.Colorful:
      return 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80';
    case ThemeType.Melancholy:
      return 'https://images.unsplash.com/photo-1464770582314-bdfcd7edb642?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80';
  }
};

const mockBookFeed = {
  title: '팩트풀니스',
  author: '한스 로슬링',
  rating: -1,
  coverImage: 'https://misc.ridibooks.com/cover/1546000541/xxlarge',
  status: PostStatus.CurrentlyReading,
  modifiedDate: 'Just now',
  backgroundTheme: ThemeType.Colorful,
  note:
    'Hans Rosling explains how media bias, ideological preconceptions and statistical illiteracy makes most people (in rich countries) believe in a gloomy and spectacularly wrong worldview. The book carefully explains by data and vivid examples how positive developments are systematically underreported, while disaster news are vastly over-reported. Rosling categorise the 10 most important sources of bias and misconceptions as well as explaining strategies on how to avoid them.\n' +
    '\n' +
    "This book is a treasure trove of evidence based reasoning, global statistics and myth busting! I read it just after finishing Steven Pinker's Enlightenment Now: The Case for Reason, Science, Humanism, and Progress. These books have a lot in common, both in goal and tone, but I enjoyed Rosling's book much more.\n" +
    '\n' +
    'Unless you have watched Roslings famous lectures (available on TED and Youtube), this book will forever change the way you understand global health, demography and development. - harald groven',
};

export class _Bookfeed extends React.Component<BookfeedProps, BookfeedInnerState> {
  state = { isOpen: false, selected: this.props.bookFeed.status };
  setIsOpen = () => this.setState({ isOpen: !this.state.isOpen });
  setSelected = (selected: any) => {
    this.props.setStatus(selected);
    this.setState({ selected, isOpen: false });
  };

  handleOnShare = () => {
    const { bookFeed, profile, addPost } = this.props;
    addPost({
      post: {
        ...bookFeed,
        ...mockBookFeed, // todo remove
        ...profile,
        id: '' + Date.now(),
        likeCount: 0,
        liked: false,
        note: bookFeed.note.replace(/(?:(?:|^))+$/gm, '<br/>'),
        backgroundImage: themeTypeToImage(bookFeed.backgroundTheme),
      },
    });
    Router.back();
  };

  render() {
    const { selected, isOpen } = this.state;
    const { profile } = this.props;

    return (
      <div css={styles.body}>
        <BookfeedHeader {...this.props} onClickActionButton={this.handleOnShare} />
        <Profile {...profile} />
        <AddBook />
        <Rating {...this.props} />
        <ReadingStatus status={selected} onClickStatus={this.setIsOpen} />
        <PostTheme {...this.props} />
        <PostDescription {...this.props} />
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

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ ...bookFeedActions, ...postsActions }, dispatch);
}

export const Bookfeed = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_Bookfeed);
