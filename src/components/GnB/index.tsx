/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import * as React from 'react';
import * as styles from './styles';

export class GNB extends React.Component {
  render() {
    return (
      <div css={styles.wrapper}>
        <div css={styles.titleStyle}>Booklet</div>
      </div>
    );
  }
}
