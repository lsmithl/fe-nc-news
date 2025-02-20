import { useEffect, useState } from "react";
import { useParams } from "react-router";
import InteractionButtons from "./InteractionButtons";
import axios from "axios";
import formatDate from "../utils/formatDate";

export default function Article() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => {
    axios
      .get(`https://nc-news-jssc.onrender.com/api/articles/${article_id}`)
      .then(({ data: { article } }) => {
        setArticle(article);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (article.length === 0) return <></>;

  return (
    <article className="content-grid">
      <div className="content-grid-info">
        {`${article.author} - ${formatDate(article.created_at)}`}
      </div>
      <div className="content-grid-main">
        <div className="bold">{article.title}</div>
        <div>{article.body}</div>
      </div>
      <img className="content-grid-image" src={article.article_img_url} />
      <InteractionButtons relatedContent={article} />
    </article>
  );
}
