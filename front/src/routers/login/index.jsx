import { useState, useEffect } from "react";
import Header from "../../components/header";
import styles from "./login.module.css";
import { useCadastrarUsuarioContext } from "../../hooks/useCadastrarUsuarioContext"; // Importando o hook

export default function Login() {
  const {
    form,
    handleChange,
    handleLogin,
    loading,
    error,
    message,
  } = useCadastrarUsuarioContext();

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
            type="button"
            value={loading ? "Carregando..." : "Login"}
            onClick={handleLogin}
            disabled={loading}
          />
        </div>
        {error && <div className={styles.error}>{error}</div>}
        {message && <div className={styles.message}>{message}</div>}
      </div>
    </>
  );
}
