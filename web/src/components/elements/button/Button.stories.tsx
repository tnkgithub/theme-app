import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { JSX } from 'react';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    innerClassName: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default = {
  render: (arg: JSX.IntrinsicAttributes) => <Button {...arg}>Button</Button>,
};
