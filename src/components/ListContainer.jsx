import axios from "axios";
import { useEffect, useState } from "react";
import ArticleSummaries from "./ArticleSummaries";
import { useParams } from "react-router";
import Comments from "./Comments";
import Loading from "./Loading";

export default function ListContainer({ dataApiPath } = "") {
  const [listItems, setListItems] = useState([]);
  const { article_id } = useParams();
  const dynamicDataApiPath = article_id
    ? dataApiPath.replace(":article_id", article_id)
    : dataApiPath;

  useEffect(() => {
    axios
      .get(`https://nc-news-jssc.onrender.com/api/${dynamicDataApiPath}`)
      .then(({ data }) => {
        setListItems(data[Object.keys(data)[0]]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (listItems.length === 0) {
    return <Loading />;
  }

  switch (dataApiPath) {
    case "articles":
      return (
        <ul className="item-list">
          <ArticleSummaries content={listItems} />
        </ul>
      );
    case "articles/:article_id/comments":
      return (
        <ul className="item-list">
          <Comments content={listItems} />
        </ul>
      );
    default:
      break;
  }
}
