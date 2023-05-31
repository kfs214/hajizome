import { Dayjs } from "dayjs";
import parse from "html-react-parser";
import { marked } from "marked";
import htmlParser from "prettier/parser-html";
import prettier from "prettier/standalone";
import { renderToString } from "react-dom/server";
import { Article } from "@/app/components/types";

// TODO コンテンツにHTMLとして解釈できる内容が含まれる場合のエスケープ
// LINEに連携する際にはデコード
function composeMD({ title, body }: Partial<Article>) {
  const bodyMD = body?.replace(/\r\n|\n|\r/g, "  \n");
  return `##### ${title}

${bodyMD}`;
}

function composeDateStr(date: Dayjs | null) {
  if (!date) return "";
  if (!date.isValid()) return "";

  const yearStr = new Intl.DateTimeFormat("ja-JP-u-ca-japanese", {
    era: "long",
    year: "numeric",
  }).format(date.toDate());
  const monthDateStr = date.format("M月D日(ddd)");
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
  const renderedArticles = renderToString(
    <div>{composedArticles}</div>
  ).replace(
    /<a\s+href=/g,
    '<a  target="_blank" rel="noopener noreferrer" href='
  );

  const composedPost = `${renderedEyeCatches}
  <!--more-->
  ${renderedArticles}`;

  // TODO 空白で改行されるのを回避。WP上で\nが<br />になってしまう
  const formattedPost = prettier.format(composedPost, {
    parser: "html",
    plugins: [htmlParser],
  });

  return formattedPost;
}
