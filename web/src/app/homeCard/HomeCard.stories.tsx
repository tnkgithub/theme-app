import { Meta, StoryObj } from '@storybook/react';
import HomeCard from './HomeCard';

const meta: Meta = {
  title: 'App/HomeCard',
  component: HomeCard,
};

export default meta;

const Template = (args: any) => <HomeCard {...args} />;
export const HomeCardStory = (Template as any).bind({});

HomeCardStory.args = {
  title: 'Title',
  description: 'Description',
  imagePath: 'path',
};
