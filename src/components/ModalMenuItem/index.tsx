/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import HeartIcon from '../SVG/Heart.svg';
import CheckIcon from '../SVG/Check.svg';
import { colors } from '../../styles/colors';
import { ListItemstyles } from './styles';

export interface ModalMenuItemProps {
  itemName: string;
  active?: boolean;
}

export const ModalMenuItem: React.FunctionComponent<ModalMenuItemProps> = (
  props: ModalMenuItemProps,
) => {
  return (
    <li css={ListItemstyles.itemWrapper} className={props.active ? 'active' : ''}>
      <HeartIcon css={ListItemstyles.heart} />
      {props.itemName}
      {props.active && <CheckIcon css={ListItemstyles.check} />}
    </li>
  );
};
