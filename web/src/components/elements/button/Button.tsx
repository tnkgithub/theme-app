import React from 'react';
import Link from 'next/link';
import { SomIcon, TitleIcon, ObjectIcon } from '@/components/elements/icon/svg';
import { cva } from 'class-variance-authority';

type BaseButtonProps = {
  inText: string;
  intent?: 'primary' | 'secondary' | 'inHrefs';
  size?: 'small' | 'medium' | 'large' | 'forSideBar';
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

const buttonVariants = cva(
  'm-0.5 rounded-lg text-center text-sm font-bold transition-colors duration-300',
  {
    variants: {
      intent: {
        primary: 'bg-white text-gray-800  hover:bg-blue-500 hover:text-white',
        secondary: 'bg-blue-500 text-white hover:bg-blue-700',
        inHrefs: 'bg-blue-500 text-white',
      },
      size: {
        small: 'w-12 rounded-md p-1',
        medium: 'w-28 px-3 py-2',
        large: 'w-48 p-2',
        forSideBar: 'group flex w-48 items-center justify-start p-2 text-left ',
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

// ボタンテキストの左側にsvgアイコンを表示するボタン
const IconButton = ({
  inText,
  intent = 'primary',
  size = 'forSideBar',
  isDisabled = false,
  href,
  icon = 'som',
}: IconButtonProps) => {
  const buttonClass = buttonVariants({ intent, size });

  return (
    <Link href={href}>
      <button type='button' className={buttonClass} disabled={isDisabled}>
        {icon &&
          React.createElement(
            {
              som: SomIcon,
              title: TitleIcon,
              object: ObjectIcon,
            }[icon],
            { className: intent === 'inHrefs' ? 'text-white' : '' }
          )}
        {inText}
      </button>
    </Link>
  );
};

export { Button, LinkButton, IconButton };
