/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import CheckIcon from '../SVG/Check.svg';
import { ListItemStyles } from './styles';

export interface ModalMenuItemProps {
  label: string;
  icon?: any;
  active?: boolean;
  onClick: any;
}

export const ModalMenuItem: React.FunctionComponent<ModalMenuItemProps> = (
  props: ModalMenuItemProps,
) => {
  const Icon = props.icon;
  return (
    <li
      css={ListItemStyles.itemWrapper}
      className={props.active ? 'active' : ''}
      onClick={props.onClick}
    >
      <Icon css={ListItemStyles.icon} />
      {props.label}
      {props.active && <CheckIcon css={ListItemStyles.checked} />}
    </li>
  );
};

ModalMenuItem.defaultProps = {
  icon: CheckIcon,
};
