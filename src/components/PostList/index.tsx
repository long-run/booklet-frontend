/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import React from 'react';
import { connect } from 'react-redux';
import { PostsState } from '../../service/posts/reducer';
import { Post } from '../Post';

export interface PostListProps {
  posts: PostsState;
}

export const _PostList: React.FunctionComponent<PostListProps> = props => {
  return (
    <div>
      {props.posts.map(post => (
        <Post key={post.key} {...post} />
      ))}
    </div>
  );
};

function mapStateToProps({ posts }: any) {
  return { posts };
}

export const PostList = connect(mapStateToProps)(_PostList);
