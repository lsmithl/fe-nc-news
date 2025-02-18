import axios from "axios";
import { useEffect, useState } from "react";
import ArticleSummary from "./ArticleSummary";

export default function ListContainer({ dataApiPath } = "") {
  const [listItems, setListItems] = useState(["..."]);

  useEffect(() => {
    axios
      .get(`https://nc-news-jssc.onrender.com/api/${dataApiPath}`)
      .then(({ data }) => {
        setListItems(data[Object.keys(data)[0]]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  switch (dataApiPath) {
    case "articles":
      return (
        <ul className="item-list">
          <ArticleSummary content={listItems} />
        </ul>
      );
    default:
      break;
  }
}
