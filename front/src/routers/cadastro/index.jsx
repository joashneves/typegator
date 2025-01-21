import styles from "./cadastro.module.css";
import { useCadastrarUsuario } from "../../hooks/useCriarUsuario"; // O caminho pode variar
import { Link } from "react-router-dom";

export default function Cadastro() {
  const { form, handleChange, handleSubmit, loading, error, message } =
    useCadastrarUsuario();

  return (
    <>
      <div className={styles.cadastroFormulario}>
        <h1>Cadastro</h1>
        <div className={styles.cadastroInput}>
          <label>Nome completo</label>
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
          />
        </div>
        <div className={styles.cadastroInput}>
          <label>Nome de usuário</label>
          <input
            type="text"
            name="usuario"
            value={form.usuario}
            onChange={handleChange}
          />
        </div>
        <div className={styles.cadastroInput}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.cadastroInput}>
          <label>Senha</label>
          <input
            type="password"
            name="senha"
            value={form.senha}
            onChange={handleChange}
          />
        </div>
        <div className={styles.cadastroInput}>
          <label>Confirme a senha</label>
          <input
            type="password"
            name="confirmaSenha"
            value={form.confirmaSenha}
            onChange={handleChange}
          />
        </div>
        {error && <div className={styles.error_message}>{error}</div>}{" "}
        {/* Exibe erro, se houver */}
        {message && <div className="success">{message}</div>}{" "}
        <div className={styles.cadastroInput}>
          <input
            className={styles.cadastrarBotao}
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            value={loading ? "Cadastrando..." : "Cadastrar"}
          />
          <Link to="/login">
            <div className={styles.linkCadastro}>
              <p>Se ja tiver uma conta clique aqui.</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
