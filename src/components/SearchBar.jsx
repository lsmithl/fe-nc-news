export default function SearchBar() {
  return (
    <section className="filter-sort-search-bar">
      <form>
        <input id="filter" type="text" placeholder="Filter by:" />
        <select id="filter_by">
          <option value="author">Author</option>
          <option value="topic">Topic</option>
        </select>
        <select id="sort_by" placeholder="Sort By" defaultValue="sort_by">
          <option value="sort_by" disabled>
            Sort by:
          </option>
          <option value="created_at">Date</option>
          <option value="author">Author</option>
          <option value="comment_count"># of comments</option>
          <option value="title">Title</option>
          <option value="topic">Topic</option>
          <option value="votes">Votes</option>
        </select>
        <select id="order">
          <option value="desc">Desc</option>
          <option value="desc">Asc</option>
        </select>
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Go!
        </button>
      </form>
    </section>
  );
}
