import { Meta } from '@storybook/react';
import PageLayout from './PageLayout';

const meta: Meta = {
  title: 'layouts/PageLayout',
  component: PageLayout,
};

export default meta;

const Template = (args: any) => <PageLayout {...args} />;
export const PageLayoutStory = (Template as any).bind({});
