import React, { useContext } from 'react';
import cn from 'classnames';

import {
  useThemeType,
  withEnhancedTheme,
  ThemeContext,
} from './contexts/theme.context';
import { Sub } from './Sub';

import styles from './App.module.scss';

const App = () => {
  const type = useThemeType();
  const { setSavedType } = useContext(ThemeContext);

  return (
    <>
      <p className={cn(styles.App, styles.thick)}>{`Theme type = ${type}`}</p>
      <Sub />
      <button
        onClick={() =>
          setSavedType((savedType: string) =>
            savedType === 'lite' ? 'dark' : 'lite'
          )
        }
      >
        Click to toggle style
      </button>
    </>
  );
};

export default withEnhancedTheme(styles, App);
