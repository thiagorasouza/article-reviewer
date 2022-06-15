import AddArticlePage from "./pages/AddArticle";
import { Routes, Route } from "react-router-dom";
import SavedArticlesPage from "./pages/SavedArticles";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AddArticlePage />} />
      <Route path="/saved" element={<SavedArticlesPage />} />
    </Routes>
  );
}

export default App;
