import { Route, Routes } from "react-router";
import "./App.css";
import ListContainer from "./components/ListContainer";
import Shell from "./components/Shell";

function App() {
  return (
    <Shell>
      <Routes>
        <Route path="/" element={<ListContainer dataApiPath="articles" />} />
      </Routes>
    </Shell>
  );
}

export default App;
