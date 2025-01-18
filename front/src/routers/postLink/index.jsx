import { useState, useContext } from "react";
import Header from "../../components/header";
import styles from "./post.module.css";
import { useCriarLinkContext } from "../../hooks/useCriarLinkContext.js";

export default function Post() {

  const [titulo, setTitulo] = useState("");
  const [link, setLink] = useState("");
  const [descricao, setDescricao] = useState("");
  const [usuario, setUsuario] = useState(""); // Se necessário
  const [senha, setSenha] = useState(""); // Se necessário

  const { handleSubmit, loading, error, message } = useCriarLinkContext(
    titulo, 
    link, 
    descricao, 
    usuario, 
    senha, 
  );

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
          <button type="button" onClick={handleSubmit} disabled={loading}>
            {loading ? "Carregando..." : "Postar"}
          </button>
        </div>
      </div>
    </>
  );
}
