class HealthReportPage {
  // ✅ Verifies main left-column content
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
            message: `Actual UI text:\n${cleaned}`,
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

  // ✅ Verifies expandable section content
  verifyExpandedCardTextByName(cardName, expectedText) {
    cy.contains("h3", cardName, { timeout: 10000 })
      .should("exist")
      .scrollIntoView()
      .parents("[class*=report-info-container]")
      .as("card");

    // Expand the section
    cy.get("@card")
      .find("[class*=expandable-section] .expandable-toggle")
      .click();

    // Get expanded content and verify
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
            message: `Actual expanded text:\n${cleaned}`,
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