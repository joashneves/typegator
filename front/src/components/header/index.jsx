import styles from "./Header.module.css";
import icon from "../../assets/personaIcon.svg";
import login from "../../assets/login.svg";
import adicionar from "../../assets/botaoadicionar.svg";
import lupa from "../../assets/lupa.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const [logado, setLogado] = useState(false);
  const [usuario, setUsuario] = useState(null); // Armazenar o nome do usuário logado

  useEffect(() => {
    const user = window.sessionStorage.getItem("usuario");
    const password = window.sessionStorage.getItem("senha");
    if (user && password) {
      setLogado(true);
      setUsuario(user); // Salva o nome do usuário
    } else {
      setLogado(false);
    }
  }, []); // Colocando um array vazio como dependência para rodar apenas na montagem do componente

  return (
    <div className={styles.cabecario}>
      <Link to="/">
        <img className={styles.iconeHome} src={lupa} alt="Lupa" />
      </Link>

      {logado && (
        <Link to="/post">
          <img className={styles.icone} src={adicionar} alt="Adicionar post" />
        </Link>
      )}

      {logado ? (
        <Link to={`/profile/${usuario}`}>
          <img className={styles.icone} src={icon} alt="Imagem do icone" />
        </Link>
      ) : (
        <Link to="/login">
          <img className={styles.icone} src={login} alt="Imagem do icone" />
        </Link>
      )}
    </div>
  );
}
