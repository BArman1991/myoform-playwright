class HealthReportPage {
  verifyCardTextByName(cardName, expectedText) {
    cy.contains("h3", cardName, { timeout: 10000 })
      .should("exist")
      .scrollIntoView()
      .parents("[class*=report-info-container]")
      .find(".left-column")
      .invoke("text")
      .then((actualText) => {
        const cleaned = actualText.replace(/\s+/g, " ").trim();
        const expectedCleaned = expectedText.replace(/\s+/g, " ").trim();

        try {
          expect(cleaned).to.include(expectedCleaned);
        } catch (error) {
          Cypress.log({
            name: "UI TEXT MISMATCH",
            message: `❗ Text mismatch detected in card "${cardName}"\n\n📝 Expected:\n${expectedCleaned}\n\n📄 Actual UI Text:\n${cleaned}`,
            consoleProps: () => ({
              Card: cardName,
              Expected: expectedCleaned,
              Actual: cleaned,
            }),
          });
          throw error;
        }
      });
  }
  
  verifyExpandedCardTextByName(cardName, expectedText) {
    cy.contains("h3", cardName, { timeout: 10000 })
      .should("exist")
      .scrollIntoView()
      .parents("[class*=report-info-container]")
      .as("card");

    cy.get("@card")
      .find("[class*=expandable-section] .expandable-toggle")
      .click();

    cy.get("@card")
      .find("[class*=expandable-section]")
      .invoke("text")
      .then((actualText) => {
        const cleaned = actualText.replace(/\s+/g, " ").trim();
        const expectedCleaned = expectedText.replace(/\s+/g, " ").trim();

        try {
          expect(cleaned).to.include(expectedCleaned);
        } catch (error) {
          Cypress.log({
            name: "EXPANDED SECTION MISMATCH",
            message: `❗ Expanded section mismatch in card "${cardName}"\n\n📝 Expected:\n${expectedCleaned}\n\n📄 Actual Expanded Text:\n${cleaned}`,
            consoleProps: () => ({
              Card: cardName,
              Expected: expectedCleaned,
              Actual: cleaned,
            }),
          });
          throw error;
        }
      });
  }
}

export default new HealthReportPage();
