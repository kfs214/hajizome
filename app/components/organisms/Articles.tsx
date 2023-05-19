import { Box } from "@mui/material";
import { useState } from "react";

import AddArticle from "@/app/components/atoms/AddArticle";
import ArticleCards from "@/app/components/organisms/ArticleCards";
import { Article } from "@/app/components/types";

let nextId = 0;

const initialArticles = [
  // eslint-disable-next-line no-plusplus
  { id: nextId++, title: "", body: "", date: null },
] as Article[];

export default function Articles() {
  const [articles, setArticles] = useState(initialArticles);
  const [showGeneratedHTMLCard, setShowGeneratedHTMLCard] = useState(false);

  const handleAddArticle = () => {
    setArticles((prev) => [
      ...prev,
      // eslint-disable-next-line no-plusplus
      { id: nextId++, title: "", body: "", date: null },
    ]);
  };

  return (
    <>
      {showGeneratedHTMLCard && (
        <div>
          <p>showGeneratedHTMLCard</p>
        </div>
      )}
      <Box p={1} pb={12}>
        <ArticleCards articles={articles} setArticles={setArticles} />
        <AddArticle handleAddArticle={handleAddArticle} />
      </Box>
    </>
  );
}
