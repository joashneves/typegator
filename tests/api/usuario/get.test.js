describe("GET to /api/v1/usuario", () => {
  test("User qualquer", async () => {
    const response = await fetch("http://localhost:3000/api/usuario");
    expect(response.status).toBe(404);
  });
});
