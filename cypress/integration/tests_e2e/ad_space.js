//
/// <reference types="cypress" />

describe("Ad space", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("the ads space should be exist", () => {
    cy.get('[data-test="ad-space"]').should("exist");
  });
});
