import React from 'react';
import Button from '@/components/elements/button/Button';

const SideBer = () => {
  return (
    <div className='flex flex-col justify-center'>
      <Button inText='Home' />
      <Button inText='About' />
      <Button inText='Contact' />
    </div>
  );
};

export default SideBer;
