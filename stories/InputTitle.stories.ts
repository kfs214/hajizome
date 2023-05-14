import type { Meta, StoryObj } from "@storybook/react";

import InputTitle from "../app/components/atoms/InputTitle";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof InputTitle> = {
  title: "Example/InputTitle",
  component: InputTitle,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InputTitle>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Title",
  },
};

export const Body: Story = {
  args: {
    children: "Body",
  },
};

export const Date: Story = {
  args: {
    children: "Date",
  },
};
