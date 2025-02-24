class SideBar {
  clickOption(optionName) {
    cy.get(`[class*=progress-links-item]`)
      .contains(optionName)
      .should("be.visible")
      .click();
  }
}

class UpperNavBar {
  clickOption(optionName) {
    cy.get(`[class*=NavItem]`)
      .contains(optionName)
      .should("be.visible")
      .click();
  }
}

export const sideBar = new SideBar();
export const upperNavBar = new UpperNavBar();

