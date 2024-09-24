import { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta = {
  title: 'App/HomeCard',
  component: Card,
};

export default meta;

const Template = (args: any) => <Card {...args} />;
export const HomeCardStory = (Template as any).bind({});

HomeCardStory.args = {
  title: 'Title',
  description: 'Description',
  imagePath: 'path',
};
