import React, { useState } from 'react';

interface SliderProps {
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}

const Slider = ({ min, max, step, onChange }: SliderProps) => {
  const [value, setValue] = useState(min);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className='relative mb-6'>
      <input
        id='labels-range-input'
        type='range'
        value='1000'
        min='0.0'
        max='1.0'
        className='h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700'
      />
      <span className='absolute -bottom-6 start-0 text-sm text-gray-500 dark:text-gray-400'>
        0.0
      </span>
      <span className='absolute -bottom-6 start-1/2 -translate-x-1/2 text-sm text-gray-500 rtl:translate-x-1/2 dark:text-gray-400'>
        0.5
      </span>
      <span className='absolute -bottom-6 end-0 text-sm text-gray-500 dark:text-gray-400'>
        1.0
      </span>
    </div>
  );
};

export default Slider;
