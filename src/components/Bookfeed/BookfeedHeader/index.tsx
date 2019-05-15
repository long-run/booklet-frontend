import * as React from 'react';
import { BookFeedState } from '../../../service/bookFeed/reducer';
import { PageHeader } from '../../PageHeader';

export const BookfeedHeader: React.FunctionComponent<BookFeedState> = props => (
  <PageHeader
    headerTitle="Add Post"
    actionButtonLabel="Share"
    isActionButtonActive={props.note.length > 0}
  />
);
