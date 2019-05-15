/** @jsx jsx */

jsx;
import { jsx } from '@emotion/core';
import * as React from 'react';
import { connect } from 'react-redux';
import { bookFeedActions } from '../../../service/bookFeed';
import { ThemeType } from '../../../service/bookFeed/reducer';
import { BookfeedProps } from '../index';
import * as styles from './styles';
import { bindActionCreators } from 'redux';

type PostThemeState = {
  selected?: any;
};

interface PostThemeProps extends BookfeedProps {
  setBackgroundTheme: any;
}

export class _PostTheme extends React.Component<PostThemeProps, PostThemeState> {
  state = { selected: ThemeType.Romantic };

  setSelected = (selected: any) => {
    this.setState({ selected });
  };

  render() {
    const { bookFeed } = this.props;
    return (
      <div css={styles.wrapper}>
        <div css={styles.label}>Background Theme</div>
        <div css={styles.themeWrapper}>
          {Object.values(ThemeType).map(theme => (
            <div
              css={styles.themeLabel}
              className={bookFeed.backgroundTheme === theme ? 'selected' : undefined}
              onClick={() => this.props.setBackgroundTheme(theme)}
            >
              {theme}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(bookFeedActions, dispatch);
}

export const PostTheme = connect(
  null,
  mapDispatchToProps,
)(_PostTheme);
