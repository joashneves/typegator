import { useState } from "react";
import axios from "axios";

export const useCadastrarUsuario = () => {
  const [form, setForm] = useState({
    nome: "",
    usuario: "",
    email: "",
    senha: "",
    confirmaSenha: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    const { nome, usuario, email, senha, confirmaSenha } = form;

    // Validação básica no cliente
    if (!nome || !usuario || !email || !senha || !confirmaSenha) {
      setError("Todos os campos devem ser preenchidos!");
      return;
    }

    if (senha !== confirmaSenha) {
      setError("As senhas não coincidem!");
      return;
    }

    setLoading(true);
    setError(null); // Limpa o erro, se houver

    try {
      const dados = {
        nome,
        usuario,
        email,
        senha,
      };

      const response = await axios.post("http://localhost:3000/usuario", { 
        headers: {
          'Content-Type': 'application/json; charset=utf-8', // Cabeçalho Content-Type com charset
         // 'Content-Length': JSON.stringify(dados).length.toString(), // Cabeçalho Content-Length
          //'Connection': 'keep-alive', // Manter a conexão viva
          //'Keep-Alive': 'timeout=60', // Timeout para manter a conexão ativa por 60 segundos
        },
        body: {
              dados
        }
      });

      setMessage(response.data.message); // Mensagem de sucesso
      setForm({ nome: "", usuario: "", email: "", senha: "", confirmaSenha: "" }); // Limpa o formulário
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      setError("Erro ao cadastrar usuário. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    handleChange,
    handleSubmit,
    loading,
    error,
    message,
  };
};
