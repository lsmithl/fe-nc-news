import { useState } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router";

export default function Shell({ children }) {
  const [filterInputTempText, setFilterInputTempText] = useState();
  const [filterInputText, setFilterInputText] = useState();
  const [sortByDropdownSelection, setSortByDropdownSelection] = useState();
  const [sortOrderButton, setSortOrderButton] = useState();
  const [filterBarVisibleButton, setFilterBarVisibleButton] = useState();

  return (
    <>
      <header className="top-bar">
        <Link to="/">
          <h1>Northcoders News</h1>
        </Link>
      </header>
      <SearchBar />
      <main>{children}</main>
    </>
  );
}
