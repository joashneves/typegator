import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function useAlterarSenha() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const alterarSenha = async (usuario, senhaAtual, novaSenha, token) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.put(
        "/api/usuario",
        {
          usuario_usuario: usuario,
          usuario_senha: senhaAtual,
          usuario_senhaNova: novaSenha,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      if (response.status === 201) {
        setSuccess(true);
        alert("senha Alterada com sucesso");
        
    window.sessionStorage.removeItem("usuario");
    window.sessionStorage.removeItem("senha");
    window.sessionStorage.removeItem("token");
        navigate('/')
      } else {
        setError("Erro ao alterar a senha. Tente novamente.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Erro ao alterar a senha.");
    } finally {
      setLoading(false);
    }
  };

  return { alterarSenha, loading, error, success };
}
