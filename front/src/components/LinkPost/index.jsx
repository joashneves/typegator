import { Link } from "react-router-dom";
import styles from "./LinkPost.module.css";
import setarParaBaixo from "../../assets/setaparabaixo.svg";
import setarParaCima from "../../assets/setaparacima.svg";
import useVotoPositivo from "../../hooks/useVotoPositivo.js";
import useVotoNegativo from "../../hooks/useVotoNegativo.js";
import { useEffect, useState } from "react";
import axios from "axios";

export default function LinkPost({
  id,
  titulo,
  link,
  descricao,
  total_voto,
  usuario_id,
}) {
  
  const [usuarioNome, setUsuarioNome] = useState("");
  const [maxLength, setMaxLength] = useState(127);
  console.log({ id, titulo, link, descricao, total_voto, usuario_id });
  const enviarVotoPositivo = () => {
    const usuarioLogado = window.sessionStorage.getItem("usuario");
    const senhaLogado = window.sessionStorage.getItem("senha");
    const tokenArmazenado = window.sessionStorage.getItem("token");

    if (!usuarioLogado || !senhaLogado || !tokenArmazenado) {
      return alert("Você precisa estar autenticado para votar.");
    }
    useVotoPositivo(id, usuarioLogado, senhaLogado, tokenArmazenado);
  };

  const enviarVotoNegativo = () => {
    const usuarioLogado = window.sessionStorage.getItem("usuario");
    const senhaLogado = window.sessionStorage.getItem("senha");
    const tokenArmazenado = window.sessionStorage.getItem("token");

    if (!usuarioLogado || !senhaLogado || !tokenArmazenado) {
      return alert("Você precisa estar autenticado para votar.");
    }
    useVotoNegativo(id, usuarioLogado, senhaLogado, tokenArmazenado);
  };
  useEffect(() => {
    // Função para atualizar o comprimento máximo baseado na largura da tela
    const updateMaxLength = () => {
      setMaxLength(window.innerWidth <= 768 ? 40 : 127);
    };

    // Configura o listener para mudanças de tamanho da tela
    updateMaxLength(); // Chamar inicialmente
    window.addEventListener("resize", updateMaxLength);

    // Remover o listener quando o componente for desmontado
    return () => window.removeEventListener("resize", updateMaxLength);
  }, []);

  useEffect(() => {
    const userFetch = async () => {
      const response = await axios.get(`/api/usuario/${usuario_id}`);
      const data = response.data;
      setUsuarioNome(data.usuario);
    };
    userFetch();
  }, [usuario_id]);

  return (
    <div className={styles.componenteLink}>
      <div>
        <img
          className={styles.setasVotos}
          onClick={enviarVotoPositivo}
          alt="seta para cima"
          src={setarParaCima}
        />
        <div>
          <p>{total_voto ?? 0}</p>
        </div>
        <img
          className={styles.setasVotos}
          onClick={enviarVotoNegativo}
          alt="seta para baixo"
          src={setarParaBaixo}
        />
      </div>
      <div className={styles.componenteDescricao}>
        <Link to={link} target="_blank" rel="noopener noreferrer">
          <h1 className={styles.linhaTitulo}>{titulo}</h1>
        </Link>
        <p className={styles.linhaDoLink}>
        {link.length > maxLength ? `${link.slice(0, maxLength)}...` : link}
        </p>
        <div className={styles.linhaDaDescricao}>
           {descricao.length > maxLength
            ? `${descricao.slice(0, maxLength)}...`
            : descricao}
          </div>
        <div className={styles.criador}>Enviado por: {usuarioNome}</div>
      </div>
    </div>
  );
}
