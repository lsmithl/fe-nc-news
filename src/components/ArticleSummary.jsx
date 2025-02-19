import { Link } from "react-router";
import InteractionButtons from "./InteractionButtons";
import formatDate from "../utils/formatDate";

export default function ArticleSummary({ content }) {
  return (
    <>
      {content.map((item) => {
        return (
          <Link key={"id_" + item.article_id} to={`article/${item.article_id}`}>
            <li className="content-grid" key={"id_" + item.article_id}>
              <div className="content-grid-info">
                {`${item.author} - ${formatDate(item.created_at)}`}
              </div>
              <div className="content-grid-main bold">{item.title}</div>
              <img className="content-grid-image" src={item.article_img_url} />
              <InteractionButtons />
            </li>
          </Link>
        );
      })}
    </>
  );
}
