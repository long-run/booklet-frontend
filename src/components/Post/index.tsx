/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import { ActionProps, Action } from './Action';
import { HeaderProps, Header } from './Header';
import { SummaryProps, Summary } from './Summary';
import { ReviewProps, Review } from './Review';
import * as styles from './styles';
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
  backgroundImage,
  status,
}: SummaryProps): SummaryProps => ({ title, author, rating, coverImage, backgroundImage, status });
const getActionProps = ({ liked, likeCount }: ActionProps): ActionProps => ({ liked, likeCount });

export const Post: React.FunctionComponent<PostProps> = (props: PostProps) => (
  <article css={styles.post}>
    <Header {...getHeaderProps(props)} />
    <Summary {...getSummeryProps(props)} />
    <Action {...getActionProps(props)} />
    <Review note={props.note} />
  </article>
);
