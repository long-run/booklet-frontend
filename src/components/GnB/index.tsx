/** @jsx jsx */ jsx;
import * as React from 'react';
import { jsx } from '@emotion/core';

const styles = {
  width: '100%',
  height: 44,
  backgroundColor: '#ff6b6b',
  display: 'flex',
};

const titleStyle = {
  color: 'white',
  fontSize: 15,
  lineHeight: '44px',
};

export class GnB extends React.Component {
  render() {
    return (
      <div css={styles}>
        <div css={titleStyle}>Booklet</div>
      </div>
    );
  }
}
