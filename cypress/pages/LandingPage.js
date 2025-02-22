class LandingPage {
    visit() {
      cy.visit("/");
    }
  
    getHeader() {
      return cy.get("h2"); 
      cy.get("span").contains("Log in to your account").should("be.visible");
      cy.get("button").contains("Sign up").should("be.visible");

    }
  
    // login(username, password) {
    //   cy.get('input[placeholder="Email"]').type(username);
    //   cy.get('input[placeholder="Password"]').type(password);
    //   cy.get('button[type="submit"]').click();
    // }
  }
  
  export default new LandingPage();
  