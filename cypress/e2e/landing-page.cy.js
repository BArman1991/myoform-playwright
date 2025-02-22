import LandingPage from "../pages/LandingPage";

describe("Landing Page Tests", () => {
  it("Opens lending page and verefication of heder", () => {
    LandingPage.visit();

    // Verefication of the header
    LandingPage.getHeader().should("contain.text", "Welcome Back");
  });

  it("Log in to system", () => {
    // LandingPage.visit();
    // LandingPage.login("testuser@example.com", "password123");
    cy.login()
    cy.get('button[type="submit"]').click();

    // Проверка редиректа после логина
    // cy.url().should("include", "/dashboard");
  });
});
