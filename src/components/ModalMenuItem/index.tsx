/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import * as styles from './styles';

export interface ModalMenuItemProps {}

export const ModalMenuItem: React.FunctionComponent<ModalMenuItemProps> = (
  props: ModalMenuItemProps,
) => {
  return <div css={styles.listItem} />;
};
