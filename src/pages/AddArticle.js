import { useRef } from "react";
import Layout from "../components/Layout";

import styles from "./AddArticle.module.css";

function AddArticlePage() {
  const form = useRef(null);

  const defaultArticle = {
    name: "MDN FormData API",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/FormData",
    date: "2022-06-21",
    email: "thiagorasouza@gmail.com",
  };

  function saveArticle(articleData) {
    const requiredFields = ["name", "url", "date", "email"];
    for (const requiredField of requiredFields) {
      if (!articleData[requiredField]) {
        return false;
      }
    }

    const savedArticles = getFromLocal("articles") || [];
    savedArticles.push(articleData);
    return saveToLocal("articles", savedArticles);
  }

  function getFromLocal(itemName) {
    try {
      return JSON.parse(localStorage.getItem(itemName));
    } catch (error) {
      return null;
    }
  }

  function saveToLocal(itemName, itemData) {
    try {
      localStorage.setItem(itemName, JSON.stringify(itemData));
      return true;
    } catch (error) {
      return false;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formElement = form.current;
    const formData = Object.fromEntries(new FormData(formElement));

    const saved = saveArticle(formData);

    if (!saved) {
      console.log("Article not saved");
    } else {
      console.log("Article saved");
    }
  }
  return (
    <Layout>
      <form ref={form} className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.control}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={defaultArticle.name}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="url">URL:</label>
          <input
            type="url"
            name="url"
            id="url"
            defaultValue={defaultArticle.url}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            name="date"
            id="date"
            defaultValue={defaultArticle.date}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            defaultValue={defaultArticle.email}
          />
        </div>
        <div className={styles.control}>
          <button type="submit">Save</button>
        </div>
      </form>
    </Layout>
  );
}

export default AddArticlePage;
