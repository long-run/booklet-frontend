/** @jsx jsx */ jsx;
import { css, jsx } from '@emotion/core';
import { colors } from '../styles';
import Link from 'next/link';

const tempButtonStyle = css`
  display: inline-block;
  border: 1px solid blue;
  background: white;
  padding: 3px;
  color: blue;
  border-radius: 3px;
  margin: 20px;
`;

export default () => (
  <div>
    <Link href="/timeline">
      <a css={tempButtonStyle}>GO Timeline page → </a>
    </Link>
  </div>
);
