describe("PUT /api/usuarios", () => {
  test("Mudar sem params", async () => {
    const dados = {
      nome: "",
      usuario: "",
      email: "",
      senha: "",
    };
    const response = await fetch("http://localhost:3000/api/usuario/1", {
      dados,
      method: "PUT",
    });
    expect(response.status).toBe(401);
  });
  test("Mudar com params", async () => {
    const dados = {
      nome: "",
      usuario: "",
      email: "",
      senha: "",
    };
    const response = await fetch("http://localhost:3000/api/usuario/1", {
      dados,
      method: "PUT",
    });
    expect(response.status).toBe(401);
  });
});
