import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useState,
} from 'react';

import { ThemeType } from './theme.types';

import styles from './theme.module.scss';

export const ThemeContext = createContext<any>(null);

export const ThemeProvider: FC<any> = (props) => {
  const { children, type } = props;
  const [savedType, setSavedType] = useState<ThemeType>(type);

  const toggleStyle = useCallback(() => {
    setSavedType((type: ThemeType) =>
      type === ThemeType.DARK ? ThemeType.LITE : ThemeType.DARK
    );
  }, []);

  return (
    <ThemeContext.Provider value={{ type: savedType, toggleStyle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeType = () => {
  const { type } = useContext(ThemeContext);

  return type;
};

export const withTheme = <P extends React.ComponentProps<any>>(
  Component: any
) => {
  return (props: P) => (
    <ThemeContext.Consumer>
      {(context) => (
        <div className={styles[context.type]}>
          <Component {...props} />
        </div>
      )}
    </ThemeContext.Consumer>
  );
};
