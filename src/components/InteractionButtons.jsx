export default function InteractionButtons({ isComment }) {
  console.log(isComment);

  return (
    <form className="content-grid-interaction">
      <button
        className="btn-updoot"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        🎺
      </button>{" "}
      ## votes{isComment ? "" : " | ## comments"}
    </form>
  );
}
