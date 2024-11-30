import { Meta } from '@storybook/react';
import Header from './Header';

const meta: Meta = {
  title: 'layouts/Header',
  component: Header,
};

export default meta;

// propsを受け取るために、propsの型を定義する
const Template = (args: any) => <Header {...args} />;
export const HeaderStory = (Template as any).bind({});
