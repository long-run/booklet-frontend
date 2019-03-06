/** @jsx jsx */ jsx;
import React from 'react';
import { jsx } from '@emotion/core';
import { Post, PostProps } from '../Post';

export interface PostListProps {
  postList: Array<PostProps>;
}

export class PostList extends React.Component<PostListProps> {
  renderPostList() {
    const { postList } = this.props;
    return postList.map(post => <Post {...post} />);
  }

  render() {
    return <div>{this.renderPostList()}</div>;
  }
}
