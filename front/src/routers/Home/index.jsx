// Home.js
import { usePesquisarContext } from "../../hooks/usePesquisarContext";
import Header from "../../components/header";
import LinkPost from "../../components/LinkPost";
import Pesquisa from "../../components/pesquisa";
import styles from "./Home.module.css";

export default function Home() {
  const { links } = usePesquisarContext();
  console.log(links);
  return (
    <>
      <br />
      <Pesquisa />
      
      <br />
      <div className={styles.postCarregador}>
        {links.length === 0 ? (
          <p>Carregando links...</p>
        ) : (
          links.map((link, index) => (
            <LinkPost
              key={index}
              id={link.id}
              titulo={link.titulo}
              descricao={link.descricao}
              link={link.link}
              usuario_id={link.usuario_id}
              total_voto={link.total_voto}
            />
          ))
        )}
      </div>
    </>
  );
}
