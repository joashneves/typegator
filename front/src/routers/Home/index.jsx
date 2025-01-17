// Home.js
import { usePesquisarContext } from "../../hooks/usePesquisarContext";
import Header from "../../components/header";
import LinkPost from "../../components/LinkPost";
import Pesquisa from "../../components/pesquisa";
import styles from './Home.module.css';

export default function Home() {
  const { links } = usePesquisarContext();
  console.log(links)
  return (
    <>
      <Header />
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
              titulo={link.titulo}
              descricao={link.descricao}
              link={link.link}
            />
          ))
        )}
      </div>
    </>
  );
}
