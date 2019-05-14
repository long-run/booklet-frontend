/** @jsx jsx */
jsx;
import { jsx } from '@emotion/core';
import * as React from 'react';
import { ProfileState } from '../../../service/profile/reducer';
import { ProfileStyles } from './styles';

export const Profile: React.FunctionComponent<ProfileState> = (props: ProfileState) => (
  <div css={ProfileStyles.wrapper}>
    <div css={ProfileStyles.profileImageWrapper}>
      <img
        css={ProfileStyles.profileImage}
        src={props.userProfileImage}
        alt={`${props.userName} profile image`}
      />
    </div>
    <div css={ProfileStyles.userName}>{props.userName}</div>
  </div>
);
