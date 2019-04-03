/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import * as styles from './styles';
import { ModalMenuItem } from '../ModalMenuItem';

export interface ModalMenuProps {}

export const ModalMenu: React.FunctionComponent<ModalMenuProps> = (props: ModalMenuProps) => {
  return (
    <div css={styles.dim}>
      <ul css={styles.shapeWrapper}>
        <ModalMenuItem itemName="Want to Read" active />
        <ModalMenuItem itemName="Currently Reading" />
        <ModalMenuItem itemName="Read" />
      </ul>
    </div>
  );
};
