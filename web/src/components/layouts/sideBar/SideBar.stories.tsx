import { Meta } from '@storybook/react';
import SideBar from './SideBar';

const meta: Meta = {
  title: 'layouts/SideBar',
  component: SideBar,
};

export default meta;

const Template = (args: any) => <SideBar {...args} />;
export const SideBarStory = (Template as any).bind({});
