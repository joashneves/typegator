

describe("POST /api/usuarios", () => {
    test("Cadastra sem params", async () => {
        const dados = {
            nome: "",
            usuario: "",
            email: "",
            senha: "",
        };
        const response = await fetch("http://localhost:3000/api/usuario",  {
            dados,
            method: "POST",
        });
        expect(response.status).toBe(500);

    })
    test("Cadastra Com params", async () => {
        const dados = {
            nome: "John test da silva",
            usuario: "JohnTest",
            email: "JohnTest@gmail.com",
            senha: "john123",
        };
        const response = await fetch("http://localhost:3000/api/usuario",  {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dados), // Convertendo o objeto para string JSON
          });
        expect(response.status).toBe(201);

    })
})