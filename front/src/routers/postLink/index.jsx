import { useState, useEffect } from "react";
import Header from "../../components/header";
import styles from "./post.module.css";
import { useCriarLinkContext } from "../../hooks/useCriarLinkContext.js";
import { useNavigate } from "react-router-dom";

export default function Post() {
  const [titulo, setTitulo] = useState("");
  const [link, setLink] = useState("");
  const [descricao, setDescricao] = useState("");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const { handleSubmit, loading, error, message } = useCriarLinkContext();

  useEffect(() => {
    const usuarioLogado = (window.sessionStorage.getItem("usuario"));
    const senhaLogado = (window.sessionStorage.getItem("senha"));
    const tokenArmazenado = window.sessionStorage.getItem("token");

    if (!usuarioLogado || !tokenArmazenado) {
      navigate("/cadastro");
    } else {
      setUsuario(usuarioLogado);
      setSenha(senhaLogado); // Use conforme sua lógica
      setToken(tokenArmazenado);
    }
  }, [navigate]);

  const onSubmit = async () => {
    await handleSubmit({ titulo, link, descricao, usuario, senha, token });
  };

  return (
    <>
      <Header />
      <div className={styles.postFormulario}>
        <h1>Postar Link</h1>
        {error && <p className={styles.error}>{error}</p>}
        {message && <p className={styles.success}>{message}</p>}

        <div className={styles.postInput}>
          <label>Título</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>

        <div className={styles.postInput}>
          <label>Link (URL)</label>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        <div className={styles.postInput}>
          <label>Descrição</label>
          <input
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>

        <div className={styles.postInput}>
          <input
          className={styles.linkcadastrarBotao}
           type="button"
            onClick={onSubmit}
             disabled={loading}
            value={loading ? "Carregando..." : "Postar"}
            />
          
        </div>
      </div>
    </>
  );
}
