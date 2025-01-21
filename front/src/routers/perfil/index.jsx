import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LinkPost from "../../components/LinkPost";
import AlterarSenha from "../../components/alterarSenha";
import styles from './perfil.module.css';

export default function Perfil() {
  const { usuario } = useParams(); // Captura o parâmetro "usuario" da URL
  const [links, setLinks] = useState([]); // Inicialize corretamente o useState
  const [perfil, setPerfil] = useState(false);
  const [carregando, setCarregando] = useState(true); // Adiciona estado para carregamento
  const [exibirAlterarSenha, setExibirAlterarSenha] = useState(false); // Estado para exibir o componente
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const usuarioLogado = window.sessionStorage.getItem("usuario");
        const tokenArmazenado = window.sessionStorage.getItem("token");

        if (usuarioLogado === usuario) {
          setPerfil(true);
        }

        if (!tokenArmazenado) {
          console.log("Token não encontrado. O usuário não está autorizado.");
          setCarregando(false); // Atualiza o estado de carregamento
          return;
        }

        const response = await axios.get(`/api/link/usuarios/${usuario}`, {
          headers: {
            Authorization: `Bearer ${tokenArmazenado}`, // Passando o token no cabeçalho
          },
        });
        setLinks(response.data);
      } catch (error) {
        console.error("Erro ao buscar links:", error);
      } finally {
        setCarregando(false); // Atualiza o estado de carregamento
      }
    };

    fetchLinks();
  }, [usuario]);

  const handleDeslogar = () => {
    window.sessionStorage.removeItem("usuario");
    window.sessionStorage.removeItem("senha");
    window.sessionStorage.removeItem("token");
    navigate("/");
  };

  const toggleAlterarSenha = () => {
    setExibirAlterarSenha((prevState) => !prevState);
  };

  return (
    <div>
      <h1>Perfil de {usuario}</h1>
      <p>Informações do perfil de {usuario}</p>

      {perfil && (
        <>
          <input 
            className={styles.botao}
            type="button" 
            value="Deslogar" 
            onClick={handleDeslogar} 
          />
          <input 
            className={styles.botao}
            type="button" 
            value={exibirAlterarSenha ? "Fechar Alterar Senha" : "Alterar Senha"} 
            onClick={toggleAlterarSenha} 
          />
          {exibirAlterarSenha && <AlterarSenha />}
        </>
      )}

      {carregando ? (
        <p>Carregando...</p>
      ) : links.length === 0 ? (
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
