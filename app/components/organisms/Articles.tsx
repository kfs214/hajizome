import { Box } from "@mui/material";
import { useState, Dispatch, SetStateAction } from "react";

import AddArticle from "@/app/components/atoms/AddArticle";
import ArticleCards from "@/app/components/organisms/ArticleCards";
import GeneratedHTMLModal from "@/app/components/organisms/GeneratedHTMLModal";
import { Article } from "@/app/components/types";

type Props = {
  showGeneratedHTMLCard: boolean;
  setShowGeneratedHTMLCard: Dispatch<SetStateAction<boolean>>;
};

let nextId = 0;

const initialArticles = [
  // eslint-disable-next-line no-plusplus
  { id: nextId++, title: "", body: "", date: null },
] as Article[];

export default function Articles(props: Props) {
  const { showGeneratedHTMLCard, setShowGeneratedHTMLCard } = props;

  const [articles, setArticles] = useState(initialArticles);

  const handleAddArticle = () => {
    const { date: lastArticleDate } = articles.slice(-1)[0];
    setArticles((prev) => [
      ...prev,
      // eslint-disable-next-line no-plusplus
      { id: nextId++, title: "", body: "", date: lastArticleDate },
    ]);
  };

  return (
    <>
      <GeneratedHTMLModal
        showGeneratedHTMLCard={showGeneratedHTMLCard}
        setShowGeneratedHTMLCard={setShowGeneratedHTMLCard}
        articles={articles}
      />
      <Box p={1} pb={12}>
        <ArticleCards articles={articles} setArticles={setArticles} />
        <AddArticle handleAddArticle={handleAddArticle} />
      </Box>
    </>
  );
}
