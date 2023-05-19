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
      id: 1,
      title: "あとがき",
      body: `これからどうしていきたいかを考えた。公私ともに。
ずっと考えている気がする。

###### 技術
React
NodeJS
Express
Wordpress API`,
      date: dayjs("2023-05-14"),
    },
  },
};

export const LongBody: Story = {
  args: {
    article: {
      id: 1,
      title: "これからどうしていきたいか",
      body: `と尋ねられたら

全自動卵割り機を自分に許してやりたい
そのために必要なことをやっていきたい
と答えてみよう

何の役にも立たないと言われても
作りたくなったものを作れるということ
作りたくなったときに作れるということ
その自由を自分に許してやるということ

何の役にも立たないから
稼ぎが別で必要になる
それでいい

思いつくためにも作り上げるためにも
余裕が必要
気持ちにも時間にも
余裕が必要

##### 過去に作った全自動卵割り機は？と聞かれたら
寝相でずれないふんどし
扉を開けたら電子オルゴールが鳴る棚
そしてこの「ふんどし王子事典」

案外既に叶っていたのかもしれない
これからも失わずにいたい
これからも見失わずにいたい`,
      date: dayjs("2023-05-14"),
    },
  },
};

export const LongRow: Story = {
  args: {
    article: {
      id: 1,
      title: "酒、タバコ、肉、魚、セックス",
      body: `年齢制限はあるとはいえ、酒、タバコは自己責任でほどよく楽しむ分には誰にとやかく言われるものでもない
セックスだって、宗教観の違いはあれど個人の自由

けれど、これらに共通するのはオープンの場で口に出すのはちょっとためらう場合もあるということ
悪いことではないのだけれど、話すにはちょっと時と場合を考えてしまう。そういう類の話題

自分にとっては、肉や魚を食べることもの部類に入る。
私は完全なベジタリアンではなくて、普段は米や野菜を中心とした食生活をしている。でかけたときにはお肉やお魚も食べる。唐揚げもおいしいと思うし、お寿司も大好き
けれど、命をいただくということはもっと慎みをもって行うことだと感じている。だから、外食でお肉やお魚を食べる一方で、その写真を SNS に投稿することにはちょっと抵抗を感じてしまう。`,
      date: dayjs("2023-05-14"),
    },
  },
};

export const AllErrors: Story = {
  args: {
    article: {
      id: 1,
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
      id: 1,
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
      id: 1,
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
      id: 1,
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
      id: 1,
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
      id: 1,
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
      id: 1,
      title: "あとがき",
      body: "",
      bodyErrorMessage: "bodyErrorMessage",
      date: null,
      dateErrorMessage: "dateErrorMessage",
    },
  },
};
