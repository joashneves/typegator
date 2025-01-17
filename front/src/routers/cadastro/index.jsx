import Header from "../../components/header";
import styles from "./cadastro.module.css";

export default function Cadastro() {
  return (
    <>
    <Header/>
      <div className={styles.cadastroFormulario}>
        <h1>Cadastro</h1>
        <div className={styles.cadastroInput}>
          <label>
            Nome completo
          </label>
            <input type="text"></input>
        </div>
        <div className={styles.cadastroInput}>
          <label>
            Nome de usuario
          </label>
            <input type="text"></input>
        </div>
        <div className={styles.cadastroInput}>
          <label>
            Email
          </label>
            <input type="email"></input>
        </div>
        <div className={styles.cadastroInput}>
          <label>
            Senha
          </label>
            <input type="password"></input>
        </div>
        <div className={styles.cadastroInput}>
          <label>
            confirme a Senha
          </label>
            <input type="password"></input>
        </div>
        <div className={styles.cadastroInput}>
            <input type="button"></input>
        </div>
      </div>
    </>
  );
}
