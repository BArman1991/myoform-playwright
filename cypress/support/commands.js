Cypress.Commands.add("login", () => {
    cy.visit("");
    cy.get('input[placeholder="Email"]').type(Cypress.env("username"));
    cy.get('input[placeholder="Password"]').type(Cypress.env("password"));
    // cy.get('button[type="submit"]').click();
    // cy.get("button").contains("Log In").click();
  });
  