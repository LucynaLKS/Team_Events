//
/// <reference types="cypress" />

describe("List places", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Header should contain proper title", () => {
    cy.get("[data-test=header]").should("contain", "Team Event");
  });

  it("should see all of elements list", () => {
    cy.get('[data-test="list-places"]')
    .should('have.length', 23);
  });

})
