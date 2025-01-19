import { Link } from "react-router-dom";
import styles from "./LinkPost.module.css";

export default function LinkPost({ titulo, link, descricao }) {
  return (
    <>
      <Link to={link}>
        <div className={styles.componenteLink}>
          <div className={styles.componenteDescricao}>
            <h1 className={styles.linhaTitulo}>{titulo}</h1>
            <p className={styles.linhaDoLink}>{link}</p>
            <div>{descricao}</div>
          </div>
        </div>
      </Link>
    </>
  );
}
