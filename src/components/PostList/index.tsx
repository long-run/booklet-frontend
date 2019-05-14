/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import React from 'react';
import { Post, PostProps } from '../Post';

export interface PostListProps {
  postList: Array<PostProps>;
}

export const PostList: React.FunctionComponent<PostListProps> = props => {
  return (
    <div>
      {props.postList.map(post => (
        <Post key={post.key} {...post} />
      ))}
    </div>
  );
};
