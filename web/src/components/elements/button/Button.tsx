import React from 'react';
import Link from 'next/link';
import { cva } from 'class-variance-authority';

type BaseButtonProps = {
  inText: string;
  intent?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  isDisabled?: boolean;
};

type ButtonProps = BaseButtonProps & {
  onClick: () => void;
};

type LinkButtonProps = BaseButtonProps & {
  href: string;
};

const buttonVariants = cva('m-0.5 rounded-lg text-center text-sm font-bold ', {
  variants: {
    intent: {
      primary:
        'bg-white text-gray-800 duration-300 hover:bg-blue-500 hover:text-white',
      secondary: 'bg-blue-500 text-white duration-300 hover:scale-105',
    },
    size: {
      small: 'w-12 rounded-md p-1',
      medium: 'w-28 px-3 py-2',
      large: 'w-48 p-2',
    },
  },
});

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

const LinkButton = ({
  inText,
  intent = 'primary',
  size = 'medium',
  isDisabled = false,
  href,
}: LinkButtonProps) => {
  const buttonClass = buttonVariants({ intent, size });

  return (
    <Link href={href}>
      <button type='button' className={buttonClass} disabled={isDisabled}>
        {inText}
      </button>
    </Link>
  );
};

export { Button, LinkButton };
