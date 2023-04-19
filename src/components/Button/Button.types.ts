import React from "react";

export interface ButtonProps {
  onClickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void> | void;
  children?: React.ReactNode | string | number;
  shape?: 'circle' | 'rectangle';
  size?: number;
  value?: string | number;
  type?: 'button' | 'submit'
}