/** @jsx jsx */
jsx;
import { jsx } from '@emotion/core';
import Router from 'next/router';
import React from 'react';
import { Splash } from './Splash';
// import Router from 'next/router';

export default class Home extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const href = '/timeline';
      const as = href;
      Router.push(href, as, { shallow: true });
    }, 1000);
  }

  render() {
    return <Splash />;
  }
}
