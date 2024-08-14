import { Meta, StoryObj } from '@storybook/react';
import SideBar from './SideBar';

const meta: Meta = {
  title: 'Layouts/SideBar',
  component: SideBar,
  argTypes: {
    buttonText: { control: 'select' },
  },
};

export default meta;

export const Default: StoryObj = {
  args: {
    buttonText: 'Button',
  },
};
