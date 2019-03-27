/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import * as styles from './styles';

export interface ModalMenuItemProps {
  itemName: string;
}

export const ModalMenuItem: React.FunctionComponent<ModalMenuItemProps> = (
  props: ModalMenuItemProps,
) => {
  return <div css={styles.listItem}>{props.itemName}</div>;
};
