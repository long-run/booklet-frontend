import { jsx } from '@emotion/core';
import React from 'react';
import { AddPost } from '../../components/AddPost';
import { GNB } from '../../components/GNB';
import { PostList } from '../../components/PostList';
import { posts } from './mock';

export default class Timeline extends React.Component {
  render() {
    return (
      <>
        <GNB />
        <AddPost />
        <PostList postList={posts} />
      </>
    );
  }
}
