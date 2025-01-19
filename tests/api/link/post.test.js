describe("POST to /api/v1/home", () => {
  test("User qualquer", async () => {
    const response = await fetch("http://localhost:3000/api/link", {
      method: "POST",
    });
    expect(response.status).toBe(401);
  });
});
