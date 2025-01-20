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
    const userFetch = async () => {
      const response = await axios.get(`/api/usuario/${id}`);
      const data = response.data;
      setUsuarioNome(data.usuario);
    };
    userFetch();
  }, []);

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
        <Link to={link}>
          <h1 className={styles.linhaTitulo}>{titulo}</h1>
        </Link>
        <p className={styles.linhaDoLink}>{link}</p>
        <div>{descricao}</div>
        <div className={styles.criador}>Enviado por : {usuarioNome}</div>
      </div>
    </div>
  );
}
