import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  innerClassName,
  ...rest
}) => {
  return (
    // <button className= [innerClassName, ' px-4 py-2 text-gray-800 bg-white rounded-sm hover:bg-blue-400 hover:text-white focus:bg-blue-500']>
    <button
      className={classNames([
        innerClassName,
        'bg-custom-blue rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500',
      ])}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
