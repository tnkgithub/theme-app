import React from 'react';
import Link from 'next/link';
import { somIcon, titleIcon, objectIcon } from '@/components/elements/icon/svg';
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

type IconButtonProps = BaseButtonProps & {
  href: string;
  icon?: 'som' | 'title' | 'object';
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
      large: 'flex w-48 items-center justify-start p-2 text-left',
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
  icon = 'som',
}: IconButtonProps) => {
  const buttonClass = buttonVariants({ intent, size });

  return (
    <Link href={href}>
      <button type='button' className={buttonClass} disabled={isDisabled}>
        {inText}
      </button>
    </Link>
  );
};

// ボタンテキストの左側にsvgアイコンを表示するボタン
const IconButton = ({
  inText,
  intent = 'primary',
  size = 'large',
  isDisabled = false,
  href,
  icon = 'som',
}: IconButtonProps) => {
  const buttonClass = buttonVariants({ intent, size });

  return (
    <Link href={href}>
      <button type='button' className={buttonClass} disabled={isDisabled}>
        {icon === 'som' && somIcon()}
        {icon === 'title' && titleIcon()}
        {icon === 'object' && objectIcon()}
        {inText}
      </button>
    </Link>
  );
};

export { Button, LinkButton, IconButton };
