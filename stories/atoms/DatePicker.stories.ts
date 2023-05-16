import type { Meta, StoryObj } from "@storybook/react";

import dayjs from "dayjs";

import DatePicker from "../../app/components/atoms/DatePicker";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof DatePicker> = {
  title: "Atoms/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Date",
    value: null,
    handleChange: () => {},
  },
};

export const Filled: Story = {
  args: {
    label: "Date",
    value: dayjs("2023-05-14"),
    handleChange: () => {},
  },
};
