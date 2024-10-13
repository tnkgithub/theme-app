import { Meta } from '@storybook/react';
import Slider from './Slider';

const meta: Meta = {
  title: 'elements/Slider',
  component: Slider,
};

export default meta;

const Template = (args: any) => <Slider {...args} />;
export const SliderStory = (Template as any).bind({});

SliderStory.args = {
  step: 0.1,
  onChange: (value: number) => {
    console.log(`Slider value: ${value}`);
  },
};
