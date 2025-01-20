import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LinkPost from "../../components/LinkPost";

export default function Perfil() {
  const { usuario } = useParams(); // Captura o parâmetro "usuario" da URL
  const [links, setLinks] = useState([]); // Inicialize corretamente o useState

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const usuarioLogado = window.sessionStorage.getItem("usuario");
        const senhaLogado = window.sessionStorage.getItem("senha");
        const tokenArmazenado = window.sessionStorage.getItem("token");

        // Verifique se o token está presente
        if (!tokenArmazenado) {
          console.log("Token não encontrado. O usuário não está autorizado.");
          return;
        }

        const response = await axios.get(`/api/link/usuarios/${usuario}`, {
          headers: {
            Authorization: `Bearer ${tokenArmazenado}`, // Passando o token no cabeçalho
          },
        });
        const data = response.data;
        setLinks(data);
      } catch (error) {
        console.error("Erro ao buscar links:", error);
      }
    };

    fetchLinks();
  }, [usuario]);

  return (
    <div>
      <h1>Perfil de {usuario}</h1>
      <p>Informações do perfil de {usuario}...</p>
      {links.length === 0 ? (
        <p>Você não está autorizado a olhar esse perfil</p>
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
  );
}
