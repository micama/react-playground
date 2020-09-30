import React, { useContext } from 'react';

import styles from './App.module.scss';
import { Button } from './components/button';
import { TextLabel } from './components/text-label';
import {
  useThemeType,
  ThemeContext,
  withTheme,
} from './contexts/theme/theme.context';

interface IAppProps {
  label: string;
}

export const App = withTheme(({ label }: IAppProps) => {
  const type = useThemeType();
  const { toggleStyle } = useContext(ThemeContext);

  return (
    <div className={styles.app}>
      <TextLabel text={`Theme type = ${type}`} className={styles.thick} />
      <TextLabel text={label} />
      <Button text="Click to change type" onClick={toggleStyle} />
    </div>
  );
});
