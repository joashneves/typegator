import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useCriarLinkContext = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const navigator = useNavigate();
  const handleSubmit = async ({
    titulo,
    link,
    descricao,
    usuario,
    senha,
    token,
  }) => {
    if (!titulo || !link || !descricao) {
      setError("Todos os campos devem ser preenchidos!");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const dados = {
        usuario_usuario: usuario,
        usuario_senha: senha,
        titulo,
        descricao,
        link,
      };
      console.log(dados, token);
      const response = await axios.post("/api/link", dados, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        mode: "cors",
      });

      setMessage("Postagem criada com sucesso!");
      navigator("/");
      return response.data;
    } catch (error) {
      console.error("Erro ao criar postagem:", error);
      setError("Erro ao criar postagem. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return { handleSubmit, loading, error, message };
};
