import { Box } from "@mui/material";
import { useState } from "react";

import ArticleCards from "@/app/components/organisms/ArticleCards";
import { Article } from "@/app/components/types";

const initialArticles = [
  { id: 1, title: "", body: "", date: null },
] as Article[];

export default function Articles() {
  const [articles, setArticles] = useState(initialArticles);
  const [showGeneratedHTMLCard, setShowGeneratedHTMLCard] = useState(false);

  if (showGeneratedHTMLCard) {
    return (
      <div>
        <p>showGeneratedHTMLCard</p>
      </div>
    );
  }

  return (
    <Box p={1}>
      <ArticleCards articles={articles} setArticles={setArticles} />
    </Box>
  );
}
