import axios from "axios";
import { useParams } from "react-router";

export default function AddComment() {
  const { article_id } = useParams();
  return (
    <li className="hidden" id="add-comment" key={"add-comment"}>
      <form className="content-grid no-image">
        <div className="content-grid-info">
          Comment: (logged in as jessjelly)
        </div>
        <textarea
          id="comment-body"
          className="content-grid-main"
          required
          onChange={(e) => {
            const submitButton = document.getElementById("btn-comment-submit");
            if (e.target.value.length) {
              submitButton.removeAttribute("disabled");
            } else {
              submitButton.setAttribute("disabled", true);
            }
          }}
        />
        <button
          id="btn-comment-submit"
          className="content-grid-interaction"
          onClick={(e) => {
            e.preventDefault();
            e.target.setAttribute("disabled", true);
            const commentBody = document.getElementById("comment-body").value;
            axios
              .post(
                `https://nc-news-jssc.onrender.com/api/articles/${article_id}/comments`,
                {
                  body: commentBody,
                  author: "jessjelly",
                }
              )
              .then(() => {
                document.location.reload();
              })
              .catch((err) => {
                console.error(err);
              });
          }}
        >
          Post Comment
        </button>
      </form>
    </li>
  );
}
