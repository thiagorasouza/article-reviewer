import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getFromLocal } from "../helpers/local-storage";

import styles from "./SavedArticles.module.css";

function SavedArticlesPage() {
  const [articles, setArticles] = useState(null);
  useEffect(() => {
    const savedArticles = getFromLocal("articles");
    // console.log(savedArticles);
    setArticles(savedArticles);
  }, []);

  const defaultArticle = {
    name: "MDN FormData API",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/FormData",
    date: "21/06/2022",
    email: "thiagorasouza@gmail.com",
  };

  return (
    <Layout>
      {articles
        ? articles.map((article, index) => (
            <div key={index} className={styles.article}>
              <div className={styles.nameAndDate}>
                {article.name} - review at {article.date}
              </div>
              <div className={styles.url}>
                <a href={article.url}>{article.url}</a>
              </div>
            </div>
          ))
        : "Loading..."}
    </Layout>
  );
}

export default SavedArticlesPage;
