import { useState } from "react";
import useAlterarSenha from "../../hooks/useAlterarSenha.js";
import styles from './AlterarSenha.module.css';
export default function AlterarSenha() {
  const [usuario, setUsuario] = useState(window.sessionStorage.getItem("usuario"));
  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");

  const { alterarSenha, loading, error, success } = useAlterarSenha();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = window.sessionStorage.getItem("token");

    if (!token) {
      return alert("Você precisa estar autenticado para alterar a senha.");
    }

    await alterarSenha(usuario, senhaAtual, novaSenha, token);
  };

  return (
    <div className={styles.alterarFormulario}>
      <h2>Alterar Senha</h2>
      <form className={styles.formulario} onSubmit={handleSubmit}>
        <div className={styles.alterarInput}>
            <input
              type="password"
              value={senhaAtual}
              onChange={(e) => setSenhaAtual(e.target.value)}
              placeholder="Digite sua senha atual"
              required
            />
        </div>
        <div className={styles.alterarInput}>
            <input
              type="password"
              value={novaSenha}
              onChange={(e) => setNovaSenha(e.target.value)}
              placeholder="Digite sua nova senha"
              required
            />
        </div>
         <div className={styles.alterarFormulario}>
                  <input
                    className={styles.loginBotao}
                    type="button"
                    value={loading ? "Carregando..." : "Alterar Senha"}
                    onClick={handleSubmit}
                    disabled={loading}
                  />
                </div>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Senha alterada com sucesso!</p>}
    </div>
  );
}
