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
  const [isAnimatingUp, setIsAnimatingUp] = useState(false);
  const [isAnimatingDown, setIsAnimatingDown] = useState(false);

  const criarEfeitoMouse = (e) => {
    const efeito = document.createElement("span");
    efeito.className = styles.mouseEffect;
    efeito.style.left = `${e.pageX}px`;
    efeito.style.top = `${e.pageY}px`;
    document.body.appendChild(efeito);

    setTimeout(() => {
      efeito.remove();
    }, 500); // Remove o efeito após 500ms
  };

  const enviarVotoPositivo = (e) => {
    criarEfeitoMouse(e);

    const usuarioLogado = window.sessionStorage.getItem("usuario");
    const senhaLogado = window.sessionStorage.getItem("senha");
    const tokenArmazenado = window.sessionStorage.getItem("token");

    if (!usuarioLogado || !senhaLogado || !tokenArmazenado) {
      return alert("Você precisa estar autenticado para votar.");
    }

    setIsAnimatingUp(true);
    setTimeout(() => setIsAnimatingUp(false), 300);

    useVotoPositivo(id, usuarioLogado, senhaLogado, tokenArmazenado);
  };

  const enviarVotoNegativo = (e) => {
    criarEfeitoMouse(e);

    const usuarioLogado = window.sessionStorage.getItem("usuario");
    const senhaLogado = window.sessionStorage.getItem("senha");
    const tokenArmazenado = window.sessionStorage.getItem("token");

    if (!usuarioLogado || !senhaLogado || !tokenArmazenado) {
      return alert("Você precisa estar autenticado para votar.");
    }

    setIsAnimatingDown(true);
    setTimeout(() => setIsAnimatingDown(false), 300);

    useVotoNegativo(id, usuarioLogado, senhaLogado, tokenArmazenado);
  };

  useEffect(() => {
    const updateMaxLength = () => {
      setMaxLength(window.innerWidth <= 768 ? 40 : 127);
    };

    updateMaxLength();
    window.addEventListener("resize", updateMaxLength);

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
          className={`${styles.setasVotos} ${isAnimatingUp ? styles.animate : ""}`}
          onClick={enviarVotoPositivo}
          alt="seta para cima"
          src={setarParaCima}
        />
        <div>
          <p>{total_voto ?? 0}</p>
        </div>
        <img
          className={`${styles.setasVotos} ${
            isAnimatingDown ? styles.animate : ""
          }`}
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
