import InteractionButtons from "./InteractionButtons";

export default function ArticleSummary({ content }) {
  return (
    <>
      {content.map((item, i) => {
        return (
          <li key={i}>
            <div className="info">{`${item.author} - ${item.created_at}`}</div>
            <div className="title">{item.title}</div>
            <img className="image" src={item.article_img_url} />
            <InteractionButtons />
          </li>
        );
      })}
    </>
  );
}
