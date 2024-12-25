'use client';

import React from 'react';
import Link from 'next/link';
import {
  SomIcon,
  TitleIcon,
  ObjectIcon,
  MenuIcon,
  CloseIcon,
} from '@/components/elements/icon/svg';
import { cva } from 'class-variance-authority';
import SideBar from '@/components/layouts/sideBar/SideBar';

type BaseButtonProps = {
  inText: string;
  intent?:
    | 'primary'
    | 'secondary'
    | 'third'
    | 'fourth'
    | 'noBorder'
    | 'pressed'
    | 'Search'
    | 'none';
  size?: 'small' | 'medium' | 'large' | 'xlarge' | 'fit' | 'icon' | 'menuicon';
  isDisabled?: boolean;
  onClick?: () => void;
};

type ButtonProps = BaseButtonProps & {};

type LinkButtonProps = BaseButtonProps & {
  href: string;
  isTarget?: boolean;
};

type IconButtonProps = BaseButtonProps & {
  href: string;
  icon?: 'som' | 'title' | 'object' | 'menu' | 'close';
};

const buttonVariants = cva(
  'm-0.5 rounded-lg text-center text-sm font-bold transition-colors duration-300',
  {
    variants: {
      intent: {
        primary: 'bg-white text-gray-800  hover:bg-blue-500 hover:text-white',
        secondary: 'bg-white text-blue-500 hover:bg-blue-500 hover:text-white',
        third:
          'rounded-md bg-gray-50 text-gray-700 shadow-sm shadow-gray-400 hover:bg-blue-500 hover:text-white',
        fourth: 'bg-orange-400 text-white hover:bg-orange-500 hover:text-white',
        noBorder: 'bg-white text-gray-800 hover:text-blue-500',
        pressed: 'bg-blue-500 text-white',
        Search: 'bg-blue-500 text-white hover:bg-blue-600',
        none: 'bg-white text-gray-800',
      },
      size: {
        small: 'w-12 rounded-md p-1',
        medium: 'w-28 px-3 py-2',
        large: 'w-48 p-2',
        xlarge: 'w-fit px-4 py-2 text-xl text-gray-700',
        fit: 'w-fit px-3 py-2 text-lg',
        icon: 'group flex w-48 items-center justify-start p-2 text-left ',
        menuicon: 'mr-1 w-5 p-0.5',
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

const LinkButton = ({
  inText,
  intent = 'primary',
  size = 'medium',
  isDisabled = false,
  href,
  isTarget = false,
  onClick,
}: LinkButtonProps) => {
  const buttonClass = buttonVariants({ intent, size });

  return (
    <Link href={href} target={isTarget ? '_blank' : undefined}>
      <button
        type='button'
        className={buttonClass}
        disabled={isDisabled}
        //もしonClickがあれば実行
        onClick={onClick}
      >
        {inText}
      </button>
    </Link>
  );
};

// ボタンテキストの左側にsvgアイコンを表示するボタン
const IconButton = ({
  inText,
  intent = 'primary',
  size = 'icon',
  isDisabled = false,
  href,
  icon = 'som',
  onClick,
}: IconButtonProps) => {
  const buttonClass = buttonVariants({ intent, size });

  return (
    <Link href={href}>
      <button
        type='button'
        className={buttonClass}
        disabled={isDisabled}
        onClick={onClick}
      >
        {icon &&
          React.createElement(
            {
              som: SomIcon,
              title: TitleIcon,
              object: ObjectIcon,
              menu: MenuIcon,
              close: CloseIcon,
            }[icon],
            { className: intent === 'pressed' ? 'text-white' : '' }
          )}
        {inText}
      </button>
    </Link>
  );
};

export { Button, LinkButton, IconButton };
