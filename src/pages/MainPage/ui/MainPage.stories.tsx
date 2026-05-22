import type { Meta, StoryObj } from '@storybook/react-vite';
import MainPage from './MainPage';

const meta = {
  title: 'MainPage',
  component: MainPage,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const mainPage: Story = {
  tags: ['main'],
};
