import { Meta, StoryObj } from '@storybook/react';
import SideBar from './SideBar';

const meta: Meta = {
  title: 'Layouts/SideBar',
  component: SideBar,
};

export default meta;

type SideBarProps = {
  buttonText: string[];
};

const Template = (args: SideBarProps) => <SideBar {...args} />;
export const SideBarStory = (Template as any).bind({});

SideBarStory.args = {
  buttonText: ['Button1', 'Button2', 'Button3'],
};
