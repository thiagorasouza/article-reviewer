import AddArticlePage from "./pages/AddArticle";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AddArticlePage />} />
    </Routes>
  );
}

export default App;
