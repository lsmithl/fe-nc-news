export default function InteractionButtons() {
  return (
    <form>
      <button
        className="btn-updoot"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        🎺
      </button>{" "}
      ## votes | ## comments
    </form>
  );
}
