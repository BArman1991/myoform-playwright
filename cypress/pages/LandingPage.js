class LandingPage {
    visit() {
      cy.visit("/");
    }
  
    getHeader() {
      return cy.get("h1"); // Обновите селектор под ваш сайт
    }
  
    login(username, password) {
      cy.get('input[placeholder="Email"]').type(username);
      cy.get('input[placeholder="Password"]').type(password);
      cy.get('button[type="submit"]').click();
    }
  }
  
  export default new LandingPage();
  