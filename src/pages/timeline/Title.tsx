/** @jsx jsx */ jsx;
import * as React from "react";
import { jsx, css } from '@emotion/core'

export const Title:React.FunctionComponent = () => (
  <h1 css={css`color: red;`}>Title!</h1>
);