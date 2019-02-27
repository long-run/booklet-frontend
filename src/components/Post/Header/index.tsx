/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';

export interface HeaderProps {
  userName: string;
  userProfileImage: string;
  modifiedDate: string;
}

export const Header: React.FunctionComponent<HeaderProps> = (props: HeaderProps) => {
  const { userName, userProfileImage, modifiedDate } = props;
  return (
    <div>
      <div>
        <img src={userProfileImage} alt={`${userName} profile image`} />
      </div>
      <div>
        <h2>{userName}</h2>
        <p>{modifiedDate}</p>
      </div>
    </div>
  );
};
