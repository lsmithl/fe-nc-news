import InteractionButtons from "./InteractionButtons";
import formatDate from "../utils/formatDate";

export default function Comment({ content }) {
  if (content.length === 0) {
    return <>Loading!</>;
  } else {
    return (
      <>
        {content.map((item) => {
          return (
            <li className="content-grid no-image" key={"id_" + item.comment_id}>
              <div className="content-grid-info">
                {`${item.author} - ${formatDate(item.created_at)}`}
              </div>
              <div className="content-grid-main">{item.body}</div>
              <InteractionButtons isComment={true} />
            </li>
          );
        })}
      </>
    );
  }
}
