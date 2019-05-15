import * as React from 'react';
import { BookFeedState } from '../../../service/bookFeed/reducer';
import { ProfileState } from '../../../service/profile/reducer';
import { PageHeader } from '../../PageHeader';

export interface BookfeedHeaderProps {
  bookFeed: BookFeedState;
  profile: ProfileState;
  onClickActionButton: any;
}

export const BookfeedHeader: React.FunctionComponent<BookfeedHeaderProps> = props => (
  <PageHeader
    headerTitle="Add Post"
    actionButtonLabel="Share"
    isActionButtonActive={props.bookFeed.note.length > 0}
    onClickActionButton={props.onClickActionButton}
  />
);
