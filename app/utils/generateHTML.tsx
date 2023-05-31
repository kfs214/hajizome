import { Dayjs } from "dayjs";
import parse from "html-react-parser";
import { marked } from "marked";
import htmlParser from "prettier/parser-html";
import prettier from "prettier/standalone";
import { renderToString } from "react-dom/server";
import { Article } from "@/app/components/types";

function composeMD({ title, body }: Partial<Article>) {
  const bodyMD = body?.replace(/\r\n|\n|\r/g, "  \n");
  return `##### ${title}

${bodyMD}`;
}

function composeDateStr(date: Dayjs | null) {
  if (!date) return "";

  const yearStr = new Intl.DateTimeFormat("ja-JP-u-ca-japanese", {
    era: "long",
    year: "numeric",
  }).format(date.toDate());
  const monthDateStr = date.format("MM月DD日(ddd)");
  const formattedDateStr = `${yearStr}${monthDateStr}`;

  return formattedDateStr;
}

function ArticleComponent({ title, body, id, date }: Article) {
  const composedMD = composeMD({ title, body });

  const bodyHTML = marked.parse(composedMD, {
    headerIds: false,
    mangle: false,
  });
  const bodyJSX = parse(bodyHTML);

  const formattedDateStr = composeDateStr(date);

  return (
    <div id={`${id}`}>
      <div className="card">{bodyJSX}</div>
      <p className="date">{formattedDateStr}</p>
    </div>
  );
}

export default function generateHTML(articles: Article[]) {
  const composedArticles = articles.map(({ title, body, id, date }) => (
    <ArticleComponent key={id} title={title} body={body} id={id} date={date} />
  ));

  const eyeCatches = articles.map(({ title, id }) => (
    <a key={id} href={`#${id}`} className="eyecatch">
      {title}
    </a>
  ));

  const renderedEyeCatches = renderToString(<div>{eyeCatches}</div>);
  // eslint-disable-next-line react/jsx-no-useless-fragment
  const renderedArticles = renderToString(<div>{composedArticles}</div>);

  const composedPost = `${renderedEyeCatches}
  <!--more-->
  ${renderedArticles}`;

  const formattedPost = prettier.format(composedPost, {
    parser: "html",
    plugins: [htmlParser],
  });

  return formattedPost;
}
