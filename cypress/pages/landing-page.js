class LandingPage {
  visit() {
    cy.visit("/");
  }

  getHeader() {
    cy.get("h2");
    cy.get("span").contains("Log in to your account").should("be.visible");
    cy.get("button").contains("Sign up").should("be.visible");
  }
}

export default new LandingPage();
