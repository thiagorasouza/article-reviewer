import { useEffect, useState } from "react";
import Layout from "../components/Layout";

import styles from "./SavedArticles.module.css";

function SavedArticlesPage() {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    loadSavedArticles();
  }, []);

  async function loadSavedArticles() {
    try {
      const response = await fetch("/api/articles");
      const articles = await response.json();
      setArticles(articles);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(articleId) {
    try {
      await fetch(`/api/articles/${articleId}`, {
        method: "DELETE",
      });
      loadSavedArticles();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Layout>
      {articles
        ? Array.isArray(articles) && articles.length === 0
          ? "No articles saved yet"
          : articles.map((article) => (
              <div key={article._id} className={styles.article}>
                <div className={styles.data}>
                  <div className={styles.nameAndDate}>
                    {article.name} - review at {article.date}
                  </div>
                  <div className={styles.url}>
                    <a href={article.url}>{article.url}</a>
                  </div>
                </div>
                <div className={styles.controls}>
                  <button
                    type="button"
                    onClick={() => handleDelete(article._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
        : "Loading..."}
    </Layout>
  );
}

export default SavedArticlesPage;
