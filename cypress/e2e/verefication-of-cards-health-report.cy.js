import { sideBar, upperNavBar } from "../pages/navigation-bars";
import HealthReportPage from "../pages/health-report";
import { healthReportCards } from "../fixtures/healthReportFull";

describe("Verefication of the data shown in Health report page", () => {
  it("✅ Verifies all cards and expanded data", () => {
    cy.login();
    sideBar.clickOption("Questionnaire");
    upperNavBar.clickOption("Health Report");

    healthReportCards.forEach(({ name, text, expandedText }) => {
      cy.log(`🔍 Verifying card: ${name}`);
      upperNavBar.clickOption("Health Report");
      HealthReportPage.verifyCardTextByName(name, text);
      if (expandedText) {
        HealthReportPage.verifyExpandedCardTextByName(name, expandedText);
      } else {
        cy.log(`⚠️ No expanded text provided for card: ${name}`);
      }
    });
  });
});
