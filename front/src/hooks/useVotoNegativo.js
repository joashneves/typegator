import axios from "axios";

const useVotoNegativo = async (idLink, usuario, senha, token) => {
  // Validação básica no cliente
  if (!usuario || !senha) {
    alert("É necessario esta logado!");
    return;
  }

  try {
    const dados = {
      usuario_usuario: usuario,
      usuario_senha: senha,
    };
    console.log(dados, token);
    const response = await axios.put(`/api/link/votedown/${idLink}`, dados, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      mode: "cors",
    });
    console.log(response);
  } catch (error) {
    if (error.response && error.response.status === 400) {
      alert("Você já votou neste link!");
    } else {
      console.error(error);
      alert("Erro ao registrar voto. Tente novamente.");
    }
  }
};

export default useVotoNegativo;
