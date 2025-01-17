import Header from "../../components/header";
import styles from "./login.module.css";

export default function Login() {
  return (
    <>
    <Header/>
      <div className={styles.loginFormulario}>
        <h1>login</h1>
        <div className={styles.loginInput}>
          <label>
            Nome de usuario
          </label>
            <input type="text"></input>
        </div>
        <div className={styles.loginInput}>
          <label>
            Senha
          </label>
            <input type="password"></input>
        </div>
        <div className={styles.loginInput}>
            <input type="button"></input>
        </div>
      </div>
    </>
  );
}
