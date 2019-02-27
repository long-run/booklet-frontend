import { css } from '@emotion/core';

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

export const cursorPointer: any = css`
  cursor: default;
`;

export const inheritFont: any = {
  color: 'inherit',
  letterSpacing: 'inherit',
  fontFamily: 'inherit',
};

export const resetAppearance = {
  appearance: 'none',
  background: 'none',
  boxShadow: 'none',
  border: 0,
};

export const resetFont = {
  color: 'black',
  fontFamily,
  fontWeight: 400,
  letterSpacing: '-.4px',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
};

export const resetLayout = {
  padding: 0,
  margin: 0,
};

export const reset = {
  html: css([
    resetFont,
    resetLayout,
    {
      textSizeAdjust: '100%',
    },
  ]),
  body: css([resetLayout]),
  a: css([
    inheritFont,
    cursorPointer,
    {
      '&:link, &:visited': {
        textDecoration: 'none',
      },
    },
  ]),
  article: css([resetLayout]),
  aside: css([resetLayout]),
  button: css([cursorPointer, inheritFont, resetAppearance, resetLayout]),
  canvas: css([resetLayout]),
  dd: css([resetLayout]),
  details: css([resetLayout]),
  div: css([resetLayout]),
  dl: css([resetLayout]),
  dt: css([resetLayout]),
  fieldset: css([resetLayout]),
  figcaption: css([resetLayout]),
  figure: css([resetLayout]),
  footer: css([resetLayout]),
  form: css([resetLayout]),
  header: css([resetLayout]),
  hr: css({ display: 'none' }),
  h1: css([resetLayout]),
  h2: css([resetLayout]),
  h3: css([resetLayout]),
  h4: css([resetLayout]),
  h5: css([resetLayout]),
  h6: css([resetLayout]),
  iframe: css([resetLayout]),
  img: css({
    border: 0,
    msInterpolationMode: 'bicubic',
  }),
  input: css([
    inheritFont,
    resetAppearance,
    resetLayout,
    {
      '&::-ms-clear': {
        display: 'none',
      },
      '&::-webkit-search-cancel-button': {
        display: 'none',
      },
    },
  ]),
  legend: css([resetLayout]),
  li: css([resetLayout]),
  nav: css([resetLayout]),
  ol: css([resetLayout, { listStyle: 'none' }]),
  p: css([resetLayout]),
  section: css([resetLayout]),
  select: css([inheritFont, resetAppearance, resetLayout]),
  summary: css([resetLayout]),
  table: css([
    resetLayout,
    {
      borderCollapse: 'collapse',
      borderSpacing: 0,
    },
  ]),
  td: css([resetLayout]),
  textarea: css([inheritFont, resetLayout]),
  th: css([resetLayout]),
  ul: css([resetLayout, { listStyle: 'none' }]),
  '.a11y': css({
    position: 'absolute',
    width: 1,
    height: 1,
    margin: -1,
    padding: 0,
    overflow: 'hidden',
    border: 0,
    clip: 'rect(0, 0, 0, 0)',
  }),
};
