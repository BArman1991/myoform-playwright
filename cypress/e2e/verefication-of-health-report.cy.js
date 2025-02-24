import LandingPage from "../pages/landing-page";
import { sideBar, upperNavBar } from "../pages/navigation-bars";

describe("Verefication of the data shown in Health report page", () => {
  it("Opens lending page and verefication of heder", () => {
    LandingPage.visit();
    // Verefication of the header
    LandingPage.getHeader();
  });

  it("Log in to system and opens Helth report page", () => {
    cy.login()
    sideBar.clickOption("Questionnaire")
    upperNavBar.clickOption("Health Report");
  });

});
