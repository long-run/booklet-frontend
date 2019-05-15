/** @jsx jsx */
jsx;
import { css, jsx } from '@emotion/core';
import React from 'react';
import Booklet from '../components/SVG/Logo-sharp.svg';
import { colors } from '../styles/colors';
// import Router from 'next/router';

const splashBackStyle = css`
  display: block;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 999;
  height: 100vh;
  background: linear-gradient(151deg, ${colors.coralPink_50}, ${colors.coralPink_70});
  transition: opacity 1s;

  &.hide {
    opacity: 0;
  }
`;

const logoStyle = css`
  display: inline-block;
  padding-left: 10px;
  margin-bottom: 5px;
  position: relative;
  top: calc(50% - 59px);
  left: calc(50% - 50px);
  width: 100px;
  height: 118px;
  color: white;
  cursor: pointer;
  fill: white;
`;

type SplashProps = {
  active?: boolean;
};

export class Splash extends React.Component<SplashProps> {
  state = { isShow: true };
  setHide = () => this.setState({ isShow: false });
  componentDidMount(): void {
    setTimeout(() => {
      this.setHide();
    }, 1500);
  }

  render() {
    return (
      <div css={splashBackStyle} className={this.state.isShow ? undefined : 'hide'}>
        <Booklet css={logoStyle} fill="white" />
      </div>
    );
  }
}
