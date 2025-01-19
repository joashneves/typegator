describe("GET to /api/home", () => {
  test("User qualquer", async () => {
    const response = await fetch("http://localhost:3000/api/link");
    expect(response.status).toBe(200);

    const responseBody = await response.json();
  });
});
