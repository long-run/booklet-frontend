/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
export interface ReviewProps {
  note: string;
}

export const Review: React.FunctionComponent<ReviewProps> = (props: ReviewProps) => {
  const { note } = props;
  return <p>{note}</p>;
};
