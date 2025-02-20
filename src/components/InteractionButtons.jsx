import axios from "axios";
import { useState } from "react";

export default function InteractionButtons({ relatedContent, isComment }) {
  let [optimisticVotes, setOptimisticVotes] = useState(0);
  return (
    <form className="content-grid-interaction">
      <button
        className="btn-updoot"
        onClick={(e) => {
          e.preventDefault();
          setOptimisticVotes(++optimisticVotes);
          axios
            .patch(
              `https://nc-news-jssc.onrender.com/api/${
                isComment
                  ? `comments/${relatedContent.comment_id}`
                  : `articles/${relatedContent.article_id}`
              }`,
              { inc_votes: 1 }
            )
            .catch((err) => {
              console.error(err);
              setOptimisticVotes(--optimisticVotes);
            });
        }}
      >
        🎺
      </button>
      {relatedContent.votes + optimisticVotes} votes
      {isComment ? "" : ` | ${relatedContent.comment_count} comments`}
    </form>
  );
}
