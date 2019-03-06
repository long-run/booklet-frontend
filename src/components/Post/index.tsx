/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import { ActionProps, Action } from './Action';
import { HeaderProps, Header } from './Header';
import { SummaryProps, Summary } from './Summary';
import { ReviewProps, Review } from './Review';

export interface PostProps extends ActionProps, HeaderProps, ReviewProps, SummaryProps {
  key: string;
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
  status,
}: SummaryProps): SummaryProps => ({ title, author, rating, coverImage, status });
const getActionProps = ({ liked, likeCount }: ActionProps): ActionProps => ({ liked, likeCount });

export const Post: React.FunctionComponent<PostProps> = (props: PostProps) => (
  <article>
    <Header {...getHeaderProps(props)} />
    <Summary {...getSummeryProps(props)} />
    <Action {...getActionProps(props)} />
    <Review note={props.note} />
  </article>
);
