import { Meta } from '@storybook/react';
import Card from './Card';

const meta: Meta = {
  title: 'App/Card',
  component: Card,
};

export default meta;

const Template = (args: any) => <Card {...args} />;
export const CardStory = (Template as any).bind({});

CardStory.args = {
  title: 'Title',
  description: 'Description',
  imagePath: 'path',
};
