/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import * as React from 'react';
import * as styles from './styles';

export enum ThemeType {
  Romantic = 'Romantic',
  Mysterious = 'Mysterious',
  Colorful = 'Colorful',
  Neutral = 'Neutral',
  Melancholy = 'Melancholy',
  Random = 'Random',
}

type PostThemeState = {
  selected?: any;
};

export class PostTheme extends React.Component<{}, PostThemeState> {
  state = { selected: ThemeType.Romantic };

  setSelected = (selected: any) => {
    this.setState({ selected });
  };

  render() {
    const { selected } = this.state;
    return (
      <div css={styles.wrapper}>
        <div css={styles.label}>Background Theme</div>
        <div css={styles.themeWrapper}>
          {Object.values(ThemeType).map(theme => (
            <div
              css={styles.themeLabel}
              className={selected === theme ? 'selected' : undefined}
              onClick={() => this.setSelected(theme)}
            >
              {theme}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
