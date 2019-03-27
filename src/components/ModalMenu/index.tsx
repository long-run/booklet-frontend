/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import * as styles from './styles';
import { ModalMenuItem } from '../ModalMenuItem';

export interface ModalMenuProps {}

export const ModalMenu: React.FunctionComponent<ModalMenuProps> = (props: ModalMenuProps) => {
  return (
    <div css={styles.dim}>
      <div css={styles.shapeWrapper}>
        <ModalMenuItem itemName="test" />
      </div>
    </div>
  );
};
