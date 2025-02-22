import LandingPage from "../pages/LandingPage";

describe("Landing Page Tests", () => {
  it("Должен открыть лендинг и проверить заголовок", () => {
    LandingPage.visit();

    // Проверка заголовка
    LandingPage.getHeader().should("contain.text", "Ваш заголовок");
  });

  it("Должен выполнить вход в систему", () => {
    LandingPage.visit();
    LandingPage.login("testuser@example.com", "password123");

    // Проверка редиректа после логина
    cy.url().should("include", "/dashboard");
  });
});
