import React from 'react';
import cn from 'classnames';

import { withTheme } from '../../contexts/theme/theme.context';

import styles from './text-label.module.scss';

interface ITextLabel {
  text: string;
  className?: string;
}

export const TextLabel = withTheme(({ text, className }: ITextLabel) => {
  return <p className={cn(styles.textLabel, className)}>{text}</p>;
});
