import { jsx } from '@emotion/core';
import React from 'react';
import { Bookfeed } from '../../components/Bookfeed';

export default class Timeline extends React.Component {
  state = { response: null };

  render() {
    return (
      <>
        <div>{this.state.response}</div>
        <Bookfeed />
      </>
    );
  }
}
