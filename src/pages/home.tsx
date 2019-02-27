/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import { GNB } from '../components/GNB';
import { colors } from '../styles';

export default () => (
  <div
    css={{
      background: colors.shrekGreen,
    }}
  >
    <GNB />
    야호
  </div>
);
