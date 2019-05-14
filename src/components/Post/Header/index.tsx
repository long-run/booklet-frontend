/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import ThreeDotIcon from '../../SVG/ThreeDot.svg';
import * as styles from './styles';

export const Header: React.FunctionComponent<HeaderState> = (props: HeaderState) => {
  const { userName, userProfileImage, modifiedDate } = props;
  return (
    <div css={styles.header}>
      <div css={styles.profileImageWrapper}>
        <img css={styles.profileImage} src={userProfileImage} alt={`${userName} profile image`} />
      </div>
      <div css={styles.postMetadata}>
        <h2 css={styles.userName}>{userName}</h2>
        <p css={styles.modifiedDate}>{modifiedDate}</p>
      </div>
      <div css={styles.postEditWrapper}>
        <button css={styles.editButton}>
          <ThreeDotIcon css={styles.threeDotIcon} />
        </button>
        <div css={styles.editModal}>modal</div>
      </div>
    </div>
  );
};
