import Header from "../../components/header";
import styles from "./post.module.css";

export default function Post() {
  return (
    <>
    <Header/>
      <div className={styles.postFormulario}>
        <h1>post</h1>
        <div className={styles.postInput}>
          <label>
            Titulo
          </label>
            <input type="text"></input>
        </div>
        <div className={styles.postInput}>
          <label>
            Link(url)
          </label>
            <input type="password"></input>
        </div>
        <div className={styles.postInput}>
          <label>
           Descrição
          </label>
            <input type="password"></input>
        </div>
        <div className={styles.postInput}>
            <input type="button"></input>
        </div>
      </div>
    </>
  );
}
