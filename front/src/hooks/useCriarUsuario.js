import { useState } from "react";

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
      console.log(dados);
      // Usando fetch para enviar os dados
      const response = await fetch("/api/usuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados), // Convertendo o objeto para string JSON
        mode: "cors",
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar usuário.");
      }

      const responseData = await response.json();
      setMessage("Cadastro Realizado Com sucesso"); // Mensagem de sucesso
      setForm({
        nome: "",
        usuario: "",
        email: "",
        senha: "",
        confirmaSenha: "",
      }); // Limpa o formulário
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
