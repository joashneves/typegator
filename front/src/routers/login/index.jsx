import Header from "../../components/header";
import styles from "./login.module.css";
import { useCadastrarUsuarioContext } from "../../hooks/useCadastrarUsuarioContext"; // Importando o hook
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const { form, handleChange, handleLogin, loading, error, message } =
    useCadastrarUsuarioContext();

  useEffect(() => {
    const user = window.sessionStorage.getItem("usuario");
    const password = window.sessionStorage.getItem("senha");
    console.log(user, password);
  }, []);

  return (
    <>
      <Header />
      <div className={styles.loginFormulario}>
        <h1>Login</h1>
        <div className={styles.loginInput}>
          <label>Nome de usuário</label>
          <input
            type="text"
            name="usuario"
            value={form.usuario}
            onChange={handleChange}
          />
        </div>
        <div className={styles.loginInput}>
          <label>Senha</label>
          <input
            type="password"
            name="senha"
            value={form.senha}
            onChange={handleChange}
          />
        </div>
        <div className={styles.loginInput}>
          <input
            className={styles.loginBotao}
            type="button"
            value={loading ? "Carregando..." : "Login"}
            onClick={handleLogin}
            disabled={loading}
          />
        </div>
        {error && <div className={styles.error}>{error}</div>}
        {message && <div className={styles.message}>{message}</div>}

        <Link to="/cadastro">
          <div className={styles.linkCadastro}>
            <p>Se não tiver uma conta clique aqui.</p>
          </div>
        </Link>
      </div>
    </>
  );
}
