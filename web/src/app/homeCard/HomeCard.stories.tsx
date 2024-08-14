import { Meta, StoryObj } from '@storybook/react';
import HomeCard from './HomeCard';

const meta: Meta = {
  title: 'App/HomeCard',
  component: HomeCard,
  argTypes: {
    title: { control: 'text' },
    text: { control: 'text' },
    imagePath: { control: 'text' },
  },
};

export default meta;

export const Default: StoryObj = {
  args: {
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet odit facere quia modi laborum enim velit assumenda aspernatur aliquam est perferendis cupiditate, eius vel officia eligendi ex nisi esse.',
    imagePath: 'https://placehold.jp/500x500.png',
  },
};
