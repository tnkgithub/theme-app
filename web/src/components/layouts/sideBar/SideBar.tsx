import React from 'react';
import Button from '@/components/elements/button/Button';

const SideBar = ({
  buttonText,
  buttonLink,
}: {
  buttonText: string[];
  buttonLink: string[];
}) => {
  return (
    <div className='flex flex-col justify-center p-3'>
      {buttonText.map((text, index) => (
        <Button inText={text} key={index} pageLink={buttonLink[index]} />
      ))}
    </div>
  );
};

export default SideBar;
