/** @jsx jsx */
jsx;
import { jsx } from '@emotion/core';
import { useState } from 'react';
import * as React from 'react';
import { connect } from 'react-redux';
import { bookFeedActions, BookFeedState } from '../../../service/bookFeed/reducer';
import { ProfileState } from '../../../service/profile/reducer';
import * as styles from './styles';
import { bindActionCreators } from 'redux';

export interface PostDescriptionProps {
  bookFeed: BookFeedState;
  profile: ProfileState;
  setNote: any;
}

export const _PostDescription: React.FunctionComponent<PostDescriptionProps> = props => {
  const [value, setValue] = useState(props.bookFeed.note);
  const { setNote } = props;
  return (
    <div css={styles.wrapper}>
      <textarea
        css={styles.text}
        placeholder="Description (optional)"
        value={value}
        onChange={e => {
          setNote(e.currentTarget.value);
          setValue(e.currentTarget.value);
        }}
      />
    </div>
  );
};

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(bookFeedActions, dispatch);
}
export const PostDescription = connect(
  null,
  mapDispatchToProps,
)(_PostDescription);
