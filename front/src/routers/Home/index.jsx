import { useEffect, useState } from "react";
import Header from "../../components/header";
import LinkPost from "../../components/LinkPost";
import Pesquisa from "../../components/pesquisa";
import axios from "axios";

export default function Home() {
  const [links, setLinks] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/link");
        setLinks(response.data); 
        setLoading(false);
        console.log(links)
      } catch (error) {
        console.error("Erro ao buscar os links:", error);
        setLoading(false);
      }
    };

    fetchLinks();
  }, []); 

  return (
    <>
      <Header />
      <br />
      <Pesquisa />
      <br />
      {loading ? (
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
    </>
  );
}
