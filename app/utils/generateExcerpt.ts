import { Article } from "../components/types";

export default function generateExcerpt(articles: Article[]) {
  return articles.map(({ title }) => title).join(" / ");
}
