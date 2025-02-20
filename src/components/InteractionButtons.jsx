import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router";

export default function InteractionButtons({ relatedContent, isComment }) {
  const { article_id } = useParams();
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
      {article_id && !isComment ? (
        <button
          id="btn-new-comment"
          onClick={(e) => {
            e.preventDefault();
            const newCommentForm = document.getElementById("add-comment");
            newCommentForm.classList.toggle("hidden");
            e.target.innerText = newCommentForm.classList.contains("hidden")
              ? "💬 Add Comment"
              : "💬 Cancel";

            const submitButton = document.getElementById("btn-comment-submit");
            if (e.target.value.length) {
              submitButton.removeAttribute("disabled");
            } else {
              submitButton.setAttribute("disabled", true);
            }
          }}
        >
          💬 Add Comment
        </button>
      ) : (
        ""
      )}
    </form>
  );
}
