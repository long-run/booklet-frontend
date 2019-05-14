/** @jsx jsx */
jsx;
import { jsx } from '@emotion/core';
import React, { ReactEventHandler } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PostStatusMenu } from '../ModalMenu';
import { Action } from './Action';
import { Header } from './Header';
import { Review } from './Review';
import * as styles from './styles';
import { PostStatus, Summary } from './Summary';
import {
  ActionState,
  HeaderState,
  postsActions,
  PostState,
  SummaryState,
} from '../../service/posts/reducer';

export interface PostProps extends PostState {
  onEditStatus?: ReactEventHandler;
  updatePost: any;
}

const getHeaderProps = ({
  userName,
  userProfileImage,
  modifiedDate,
}: HeaderState): HeaderState => ({ userName, userProfileImage, modifiedDate });
const getSummeryProps = ({
  title,
  author,
  rating,
  coverImage,
  backgroundImage,
  status,
}: SummaryState): SummaryState => ({ title, author, rating, coverImage, backgroundImage, status });
const getActionProps = ({ liked, likeCount }: ActionState): ActionState => ({ liked, likeCount });

type PostInnerState = {
  isOpen: boolean;
  selected?: any;
};

// todo refac demo version - state 사용하여 post status 변경하는 ux
export class _Post extends React.Component<PostProps, PostInnerState> {
  state = { isOpen: false, selected: this.props.status };
  setIsOpen = () => this.setState({ isOpen: !this.state.isOpen });
  setSelected = (selected: any) => {
    this.props.updatePost({ post: { ...this.props, status: selected } });
    this.setState({ selected, isOpen: false });
  };

  render() {
    const { selected, isOpen } = this.state;

    return (
      <article css={styles.post}>
        <Header {...getHeaderProps(this.props)} />
        <Summary
          {...getSummeryProps(this.props)}
          status={selected}
          onClickStatus={this.setIsOpen}
        />
        <Action {...getActionProps(this.props)} />
        <Review note={this.props.note} />
        <PostStatusMenu
          isOpen={isOpen}
          active={selected}
          itemList={Object.values(PostStatus)}
          onBlur={this.setIsOpen}
          onClick={this.setSelected}
        />
      </article>
    );
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(postsActions, dispatch);
}

export const Post = connect(
  null,
  mapDispatchToProps,
)(_Post);
