import { useState } from "react";
import axios from "axios";

export const useCriarLinkContext = (
  titulo, 
  link, 
  descricao, 
  usuario, 
  senha, 
  setLinks
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleSubmit = async () => {
    if (!titulo || !link || !descricao) {
      setError("Todos os campos devem ser preenchidos!");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const dados = {
        "usuario_usuario": usuario,
        "usuario_senha": senha,
        "titulo": titulo,
        "descricao": descricao,
        "link": link,
      };

      const response = await axios.post("/api/link", dados, {
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      });

      setMessage("Postagem criada com sucesso!");
      setLinks(response.data); // Atualiza os links se necessário

    } catch (error) {
      console.error("Erro ao criar postagem:", error);
      setError("Erro ao criar postagem. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return { handleSubmit, loading, error, message };
};