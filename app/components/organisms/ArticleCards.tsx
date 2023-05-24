import { Box } from "@mui/material";
import { Dayjs } from "dayjs";
import { Dispatch, SetStateAction } from "react";

// TODO パスの指定方法を統一
import InputArticleCard from "./InputArticleCard";
import { Article } from "@/app/components/types";

type Props = {
  articles: Article[];
  setArticles: Dispatch<SetStateAction<Article[]>>;
};

function composeNewArticles(prevArticles: Article[], updatedArticle: Article) {
  return prevArticles.map((curArticle) => {
    if (curArticle.id !== updatedArticle.id) {
      return curArticle;
    }

    return updatedArticle;
  });
}

function composeErrorMessage(updatedValue: string | Dayjs | null) {
  if (!updatedValue) {
    return "This field is Required.";
  }

  return undefined;
}

export default function ArticleCards(props: Props) {
  const { articles, setArticles } = props;

  // TODO エラー箇所にスクロール
  const articleComponents = articles.map((cardArticle) => {
    // TODO 切り出せないか検討
    const handleChangeTitle = ({
      target: { value },
    }: React.ChangeEvent<HTMLInputElement>) => {
      const updatedArticle = {
        ...cardArticle,
        title: value,
      };
      const newArticles = composeNewArticles(articles, updatedArticle);
      setArticles(newArticles);
    };

    const handleChangeBody = ({
      target: { value },
    }: React.ChangeEvent<HTMLInputElement>) => {
      const bodyErrorMessage = composeErrorMessage(value);
      const updatedArticle = {
        ...cardArticle,
        body: value,
        bodyErrorMessage,
      };
      const newArticles = composeNewArticles(articles, updatedArticle);
      setArticles(newArticles);
    };

    const handleChangeDate = (newValue: Dayjs | null) => {
      const dateErrorMessage = composeErrorMessage(newValue);
      const updatedArticle = {
        ...cardArticle,
        date: newValue,
        dateErrorMessage,
      };
      const newArticles = composeNewArticles(articles, updatedArticle);
      setArticles(newArticles);
    };

    return (
      <Box sx={{ my: 2 }} key={cardArticle.id}>
        <InputArticleCard
          article={cardArticle}
          handleChangeTitle={handleChangeTitle}
          handleChangeBody={handleChangeBody}
          handleChangeDate={handleChangeDate}
        />
      </Box>
    );
  });

  return <div>{articleComponents}</div>;
}
