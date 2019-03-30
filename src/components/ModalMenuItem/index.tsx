/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import HeartIcon from '../SVG/Heart.svg';
import { colors } from '../../styles/colors';
import { ListItemstyles } from './styles';

export interface ModalMenuItemProps {
  itemName: string;
}

export const ModalMenuItem: React.FunctionComponent<ModalMenuItemProps> = (
  props: ModalMenuItemProps,
) => {
  return (
    <li css={ListItemstyles.itemWrapper}>
      <HeartIcon css={ListItemstyles.heart} fill={colors.gray_50} />
      {props.itemName}
    </li>
  );
};
