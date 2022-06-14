import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Article Reviewer</h1>
      </div>
      <div className={styles.content}>
        <form className={styles.form}>
          <div className={styles.control}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className={styles.control}>
            <label htmlFor="url">URL:</label>
            <input type="url" name="url" id="url" />
          </div>
          <div className={styles.control}>
            <label htmlFor="date">Date:</label>
            <input type="date" name="date" id="date" />
          </div>
          <div className={styles.control}>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className={styles.control}>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
