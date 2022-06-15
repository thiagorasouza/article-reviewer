import styles from "./Layout.module.css";

function Layout(props) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Article Reviewer</h1>
      </div>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}

export default Layout;
