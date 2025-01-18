import { useContext, useEffect } from "react";
import { PesquisaContext } from "../context/PesquisaConxtext";
import axios from "axios";

export const usePesquisarContext = (pesquisa = "") => {
  const { links, setLinks } = useContext(PesquisaContext);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        // Se não houver pesquisa, usa o endpoint padrão "/link/"
        const endpoint = pesquisa ? `/api/link/${pesquisa}` : `/api/link`;
        const response = await axios.get(endpoint);
        console.log(endpoint)
        if (Array.isArray(response.data)) {
          console.log(response.data);
          setLinks(response.data);
        } else {
          console.error("Formato de resposta inválido:", response.data);
          setLinks([]);
        }
      } catch (error) {
        console.error("Erro ao buscar os links:", error);
        setLinks([]);
      }
    };

    fetchLinks();
  }, [pesquisa, setLinks]); // Adicione `pesquisa` como dependência para refazer a busca sempre que mudar

  return { links };
};
