import { Route, Routes } from "react-router";
import "./App.css";
import ListContainer from "./components/ListContainer";
import Shell from "./components/Shell";
import Article from "./components/Article";

function App() {
  return (
    <Shell>
      <Routes>
        <Route path="/" element={<ListContainer dataApiPath="articles" />} />
        <Route
          path="/article/:article_id"
          element={
            <>
              <Article />
              <ListContainer dataApiPath="articles/:article_id/comments" />
            </>
          }
        />
      </Routes>
    </Shell>
  );
}

export default App;
