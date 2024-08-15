import { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta: Meta = {
  title: 'layouts/Header',
  component: Header,
};

type HeaderProps = {
  logoText: string;
  buttonText: string[];
};

export default meta;

// propsを受け取るために、propsの型を定義する
const Template = (args: HeaderProps) => <Header {...args} />;
export const HeaderStory = (Template as any).bind({});

// propsの初期値を設定する
HeaderStory.args = {
  logoText: 'Logo',
  buttonText: ['Button1', 'Button2', 'Button3'],
};
