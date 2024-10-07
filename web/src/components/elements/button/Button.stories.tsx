import { Meta } from '@storybook/react';
import Button from './Button';

const meta: Meta = {
  title: 'Elements/Button',
  component: Button,
};

export default meta;

const Template = (args: any) => <Button {...args} />;
export const ButtonStory = (Template as any).bind({});

ButtonStory.args = {
  onclick: () => console.log('Button Clicked'),
  inText: 'Button',
};
