import { Meta, StoryObj } from '@storybook/react';
import SearchBox from './SearchBox';

const meta: Meta = {
  title: 'Elements/SearchBox',
  component: SearchBox,
};

export default meta;

const Template = (args: any) => <SearchBox {...args} />;
export const SearchBoxStory = (Template as any).bind({});

SearchBoxStory.args = {
  placeholder: '検索',
};
