import type { Meta, StoryObj } from "@storybook/react";
import dayjs from "dayjs";

import InputArticleCard from "../../app/components/organisms/InputArticleCard";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof InputArticleCard> = {
  title: "Organisms/InputArticleCard",
  component: InputArticleCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InputArticleCard>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    article: {
      title: "あとがき",
      body: `###### やったこと
キャンプ

###### 行った場所
北海道`,
      date: dayjs("2023-05-14"),
    },
  },
};

export const AllErrors: Story = {
  args: {
    article: {
      title: "",
      titleErrorMessage: "titleErrorMessage",
      body: "",
      bodyErrorMessage: "bodyErrorMessage",
      date: null,
      dateErrorMessage: "dateErrorMessage",
    },
  },
};

export const TitleError: Story = {
  args: {
    article: {
      title: "",
      titleErrorMessage: "titleErrorMessage",
      body: `###### やったこと
キャンプ

###### 行った場所
北海道`,
      date: dayjs("2023-05-14"),
    },
  },
};

export const BodyError: Story = {
  args: {
    article: {
      title: "あとがき",
      body: "",
      bodyErrorMessage: "bodyErrorMessage",
      date: dayjs("2023-05-14"),
    },
  },
};

export const DateError: Story = {
  args: {
    article: {
      title: "あとがき",
      body: `###### やったこと
キャンプ

###### 行った場所
北海道`,
      date: null,
      dateErrorMessage: "dateErrorMessage",
    },
  },
};

export const TitleBodyError: Story = {
  args: {
    article: {
      title: "",
      titleErrorMessage: "titleErrorMessage",
      body: "",
      bodyErrorMessage: "bodyErrorMessage",
      date: dayjs("2023-05-14"),
    },
  },
};

export const TitleDateError: Story = {
  args: {
    article: {
      title: "",
      titleErrorMessage: "titleErrorMessage",
      body: `###### やったこと
キャンプ

###### 行った場所
北海道`,
      date: null,
      dateErrorMessage: "dateErrorMessage",
    },
  },
};

export const BodyDateError: Story = {
  args: {
    article: {
      title: "あとがき",
      body: "",
      bodyErrorMessage: "bodyErrorMessage",
      date: null,
      dateErrorMessage: "dateErrorMessage",
    },
  },
};
