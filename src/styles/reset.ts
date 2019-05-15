import { css } from '@emotion/core';
import { colors } from './colors';

export const fontFamily = [
  'Spoqa Han Sans',
  'Helvetica Neue',
  'Apple SD Gothic Neo',
  'arial',
  '"나눔고딕"',
  'Nanum Gothic',
  '"돋움"',
  'Dotum',
  'Tahoma',
  'Geneva',
  'sans-serif',
].join(', ');

export const cursorDefault = css`
  cursor: default;
`;

export const cursorPointer = css`
  cursor: pointer;
`;

export const inheritFont = css`
  color: inherit;
  letter-spacing: inherit;
  font-family: inherit;
`;

export const resetAppearance = css`
  appearance: none;
  background: none;
  box-shadow: none;
  border: 0;
  outline: 0;
`;

export const resetFont = css`
  font-family: ${fontFamily};
  color: black;
  font-weight: 400;
  letterp-spacing: -0.4px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const resetLayout = css`
  margin: 0;
  padding: 0;
`;

export const reset = css`
  * {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }
  .a11y {
    display: inline-block;
    width: 0;
    height: 0;
    font-size: 0;
    line-height: 0;
    overflow: hidden;
  }
  html {
    ${resetFont};
    ${resetLayout};
    text-size-adjust: 100%;
    user-select: none;
  }
  body {
    ${resetLayout};
    background: ${colors.gray_10};
    width: 100vw;
    overflow-x: hidden;
  }
  a {
    ${inheritFont};
    ${cursorPointer};
    &:link,
    &:visited {
      text-decoration: none;
    }
  }
  article {
    ${resetLayout};
  }
  aside {
    ${resetLayout};
  }
  button {
    ${cursorPointer};
    ${inheritFont};
    ${resetAppearance};
    ${resetLayout};
  }
  canvas {
    ${resetLayout};
  }
  dd {
    ${resetLayout};
  }
  details {
    ${resetLayout};
  }
  div {
    ${resetLayout};
  }
  dl {
    ${resetLayout};
  }
  dt {
    ${resetLayout};
  }
  fieldset {
    ${resetLayout};
  }
  figcaption {
    ${resetLayout};
  }
  figure {
    ${resetLayout};
  }
  footer {
    ${resetLayout};
  }
  form {
    ${resetLayout};
  }
  header {
    ${resetLayout};
  }
  hr {
    display: none;
  }
  h1 {
    ${resetLayout};
  }
  h2 {
    ${resetLayout};
  }
  h3 {
    ${resetLayout};
  }
  h4 {
    ${resetLayout};
  }
  h5 {
    ${resetLayout};
  }
  h6 {
    ${resetLayout};
  }
  iframe {
    ${resetLayout};
  }
  img {
    border: 0;
    -ms-interpolation-mode: bicubic;
  }
  input {
    ${inheritFont};
    ${resetAppearance};
    ${resetLayout};
    &::-ms-clear {
      display: none;
    }
    &::-webkit-search-cancel-button {
      display: none;
    }
  }
  legend {
    ${resetLayout};
  }
  li {
    ${resetLayout};
  }
  nav {
    ${resetLayout};
  }
  ol {
    ${resetLayout};
    list-style: none;
  }
  p {
    ${resetLayout};
  }
  section {
    ${resetLayout};
  }
  select {
    ${inheritFont};
    ${resetAppearance};
    ${resetLayout};
  }
  summary {
    ${resetLayout};
  }
  table {
    ${resetLayout};
    border-collapse: collapse;
    border-spacing: 0;
  }
  td {
    ${resetLayout};
  }
  textarea {
    ${inheritFont};
    ${resetLayout};
    border: none;
    overflow: auto;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none;
  }
  th {
    ${resetLayout};
  }
  ul {
    ${resetLayout};
    list-style: none;
  }
  .a11y {
    position: absolute;
    width: 1;
    height: 1;
    margin: -1;
    padding: 0;
    overflow: hidden;
    border: 0;
    clip: rect(0, 0, 0, 0);
  }
`;
