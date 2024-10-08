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
  'm-0.5 rounded-lg text-center text-sm font-bold duration-300 hover:bg-blue-500 hover:text-white',
  {
    variants: {
      intent: {
        primary: 'bg-white text-gray-800',
        secondary: 'bg-blue-500 text-white',
      },
      size: {
        small: 'w-12 rounded-md p-1',
        medium: 'w-28 px-3 py-2',
        large: 'w-48 p-2',
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
