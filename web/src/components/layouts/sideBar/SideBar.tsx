import React from 'react';
import Button from '@/components/elements/button/Button';

// ボタンのテキストを配列で受け取る
type SideBarProps = {
  buttonText: string[];
};

const SideBar = ({ buttonText }: SideBarProps) => {
  return (
    <div className='flex flex-col justify-center p-3'>
      {buttonText.map((text, index) => (
        <Button inText={text} key={index} />
      ))}
    </div>
  );
};

export default SideBar;
