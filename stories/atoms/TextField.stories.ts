import type { Meta, StoryObj } from "@storybook/react";

import TextField from "../../app/components/atoms/TextField";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TextField> = {
  title: "Atoms/TextField",
  component: TextField,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextField>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Title",
    value: "あとがき",
    onChange: () => {},
  },
};

export const TitleEmpty: Story = {
  args: {
    label: "Title",
    onChange: () => {},
  },
};

export const Body: Story = {
  args: {
    label: "Body",
    multiline: true,
    value: `###### やったこと
キャンプ

###### 行った場所
北海道`,
    onChange: () => {},
  },
};

export const BodyEmpty: Story = {
  args: {
    label: "Body",
    error: true,
    multiline: true,
    helperText: '"Body" is Empty!',
    onChange: () => {},
  },
};
