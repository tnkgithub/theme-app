/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react';
import { cva } from 'class-variance-authority';

type ButtonProps = {
  inText: string;
  intent?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  isDisabled?: boolean;
  onClick: () => void;
};

const buttonVariants = cva(
  'mx-2 rounded-lg px-0 py-8 text-center text-sm font-bold duration-300 hover:bg-blue-500 hover:text-white',
  {
    variants: {
      intent: {
        primary: 'bg-white text-gray-800',
        secondary: 'bg-blue-500 text-white',
      },
      size: {
        small: 'w-50 rounded-md px-4 py-2',
        medium: 'w-105 px-12 py-4',
        large: 'w-170 my-2 p-8',
      },
    },
  }
);

const Button = ({
  inText,
  intent = 'primary',
  size = 'medium',
  isDisabled = false,
  onClick,
}: ButtonProps) => {
  const buttonClass = buttonVariants({ intent, size });

  return (
    <button
      type='button'
      className={buttonClass}
      disabled={isDisabled}
      onClick={onClick}
    >
      {inText}
    </button>
  );
};

export default Button;
