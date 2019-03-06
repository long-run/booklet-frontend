/** @jsx jsx */ jsx;
import React from 'react';
import { jsx } from '@emotion/core';
import { Post, PostProps } from '../Post';

export interface PostListProps {
  postList: Array<PostProps>;
}

export const PostList: React.FunctionComponent<PostListProps> = (props: PostListProps) => (
  <div>
    {props.postList.map(post => (
      <Post {...post} />
    ))}
  </div>
);
