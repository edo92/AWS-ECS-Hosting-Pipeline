describe("Testing Pages", () => {
  it("Site Pathname", () => {
    cy.visit("http://localhost:3000");
    cy.location("pathname").should("eq", '/');
  });
});
