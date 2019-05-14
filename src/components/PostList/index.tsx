/** @jsx jsx */

jsx;
import { jsx } from '@emotion/core';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postsActions, PostsState } from '../../service/posts/reducer';
import { Post } from '../Post';

export interface PostListProps {
  posts: PostsState;
}

export const _PostList: React.FunctionComponent<PostListProps> = props => {
  return (
    <div>
      {props.posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

function mapStateToProps({ posts }: any) {
  return { posts };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(postsActions, dispatch);
}

export const PostList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_PostList);
