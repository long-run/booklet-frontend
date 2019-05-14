/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import { ReactEventHandler } from 'react';
import { ActionProps, Action } from './Action';
import { HeaderProps, Header } from './Header';
import { SummaryProps, Summary, PostStatus } from './Summary';
import { ReviewProps, Review } from './Review';
import * as styles from './styles';
import { PostStatusMenu } from '../ModalMenu';
import React from 'react';

export interface PostProps extends ActionProps, HeaderProps, ReviewProps, SummaryProps {
  key: string;
  onEditStatus?: ReactEventHandler;
}

const getHeaderProps = ({
  userName,
  userProfileImage,
  modifiedDate,
}: HeaderProps): HeaderProps => ({ userName, userProfileImage, modifiedDate });
const getSummeryProps = ({
  title,
  author,
  rating,
  coverImage,
  backgroundImage,
  status,
}: SummaryProps): SummaryProps => ({ title, author, rating, coverImage, backgroundImage, status });
const getActionProps = ({ liked, likeCount }: ActionProps): ActionProps => ({ liked, likeCount });

type PostState = {
  isOpen: boolean;
  selected?: any;
};

// todo refac demo version - state 사용하여 post status 변경하는 ux
export class Post extends React.Component<PostProps, PostState> {
  state = { isOpen: false, selected: this.props.status };
  setIsOpen = () => this.setState({ isOpen: !this.state.isOpen });
  setSelected = (selected: any) => {
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
