import { useState } from "react";
import SearchBar from "./SearchBar";

export default function Shell({ children }) {
  const [filterInputTempText, setFilterInputTempText] = useState();
  const [filterInputText, setFilterInputText] = useState();
  const [sortByDropdownSelection, setSortByDropdownSelection] = useState();
  const [sortOrderButton, setSortOrderButton] = useState();
  const [filterBarVisibleButton, setFilterBarVisibleButton] = useState();

  return (
    <>
      <header className="top-bar">
        <h1>Northcoders News</h1>
      </header>
      <SearchBar />
      <main>{children}</main>
    </>
  );
}
