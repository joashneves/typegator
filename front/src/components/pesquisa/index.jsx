import { useState } from "react";
import lupa from "../../assets/lupa.svg";
import { usePesquisarContext } from "../../hooks/usePesquisarContext";
import styles from './pesquisa.module.css';

export default function Pesquisa() {
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const { links } = usePesquisarContext(termoPesquisa);

  const handleChange = (event) => {
    setTermoPesquisa(event.target.value); // Atualiza o termo de pesquisa
  };

  return (
    <>
      <div className={styles.pesquisa_container}>
        <input
          type="text"
          placeholder="Pesquisar..."
          className={styles.input_pesquisa}
          value={termoPesquisa}
          onChange={handleChange} // Atualiza o estado ao digitar
        />
        <img
          src={lupa}
          alt="lupa"
          className={styles.lupa_icon}
        />
      </div>

      {/* Exibe o título somente se o termo de pesquisa estiver vazio */}
      {!termoPesquisa && <h1 className={styles.titulo}>Últimas 15 postagens</h1>}
    </>
  );
}
