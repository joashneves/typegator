describe("GET /api/migrations", () => {
  test("Primeira run", async () => {
    const response = await fetch("http://localhost:3000/api/migrations");
    console.log(response);
    expect(response.status).toBe(200);
  });
});
