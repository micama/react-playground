import React from 'react';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const Button = ({ text, ...rest }: IButton) => (
  <button {...rest}>{text}</button>
);
