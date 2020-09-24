import React, { createContext, FC, useContext, useState } from 'react';

export const ThemeContext = createContext<any>(null);

export const ThemeProvider: FC<any> = (props) => {
  const { children, type } = props;
  const [savedType, setSavedType] = useState(type);

  return (
    <ThemeContext.Provider value={{ type: savedType, setSavedType }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeType = () => {
  const { type } = useContext(ThemeContext);

  return type;
};

export const withEnhancedTheme = (
  styles: { readonly [key: string]: string },
  Component: any
) => {
  return () => (
    <ThemeContext.Consumer>
      {(context) => (
        <div className={styles[context.type]}>
          <Component />
        </div>
      )}
    </ThemeContext.Consumer>
  );
};
