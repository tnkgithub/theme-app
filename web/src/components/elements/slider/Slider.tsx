import React from 'react';

interface SliderProps {
  onChange: (value: number) => void;
}

const Slider = ({ onChange }: SliderProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    onChange(newValue);
  };

  return (
    <div className='relative mb-6 w-44'>
      <input
        id='labels-range-input'
        type='range'
        onChange={handleChange}
        step='0.05'
        min='0.5'
        max='1.0'
        className='h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-300'
      />
      <span className='absolute -bottom-6 start-0 text-sm text-gray-500 dark:text-gray-400'>
        0.5
      </span>
      <span className='absolute -bottom-6 end-0 text-sm text-gray-500 dark:text-gray-400'>
        1.0
      </span>
    </div>
  );
};

export default Slider;
