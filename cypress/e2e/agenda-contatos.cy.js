describe("template spec", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("Deve realizar a inclusão de um novo contato", () => {
    cy.get('input[placeholder="Nome"]').type("Ângelo Pietro");
    cy.get('input[placeholder="E-mail"]').type("angelopietror@gmail.com");
    cy.get('input[placeholder="Telefone"]').type("(48) 91234-5678");
    cy.get('button[type="submit"]').click();
    cy.wait(3000);
  });

  it("Deve realizar a alteração do novo contato 'Ângelo Pietro'", () => {
    cy.contains(".sc-beqWaB.eQdhbg.contato", "Ângelo Pietro")
      .should("exist")
      .within(() => {
        cy.get(".edit").click();
      });
    cy.get('input[placeholder="Nome"]').clear().type("Pietro");
    cy.get('input[placeholder="E-mail"]')
      .clear()
      .type("angelopietror@gmail.com");
    cy.get('input[placeholder="Telefone"]').clear().type("(48) 99999-5678");
    cy.get(".alterar").click();
    cy.wait(3000);
  });

  it("Deve realizar a exclusão do contato 'Pietro'", () => {
    cy.contains(".sc-beqWaB.eQdhbg.contato", "Pietro")
      .should("exist")
      .within(() => {
        cy.get(".delete").click();
      });
  });
});
