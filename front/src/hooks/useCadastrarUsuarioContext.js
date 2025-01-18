import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useCadastrarUsuarioContext = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    usuario: "",
    senha: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  
  // Função para login
  const handleLogin = async () => {
    const { usuario, senha } = form;

    // Validação básica no cliente
    if (!usuario || !senha) {
      setError("Usuário e senha são obrigatórios!");
      return;
    }

    setLoading(true);
    setError(null); // Limpa o erro, se houver
    
    try {
      const dadosLogin = {
        usuario_usuario: usuario,
        usuario_senha: senha,
      };

      // Enviando dados de login
      const response = await fetch('/api/login', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosLogin),
      });

      if (!response.ok) {
        throw new Error("Erro ao fazer login.");
      }

      const responseData = await response.json();

      // Verifica se o login foi bem-sucedido
      if (responseData.token) {
        console.log("settar");
        
        // Salva as informações do usuário e o token no sessionStorage
        window.sessionStorage.setItem('usuario', usuario);
        window.sessionStorage.setItem('senha', senha);
        window.sessionStorage.setItem('token', responseData.token);

        // Redireciona para a página desejada
        navigate('/post');
        setMessage("Login realizado com sucesso!");
      } else {
        setError("Credenciais inválidas!");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setError("Erro ao fazer login. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    handleChange,
    handleLogin,
    loading,
    error,
    message,
  };
};
