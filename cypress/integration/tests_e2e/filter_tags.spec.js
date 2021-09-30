//
/// <reference types="cypress" />

describe("Filtering by Tags", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("select tags should display the number of places with those tags", () => {
      cy.get('[data-test="checkbox-tags-filter"]').contains('Taniec').click()
      cy.get('[data-test="checkbox-tags-filter"]').contains('Muzyka').click()
      cy.get('[data-test="chip-tag"]').should('contain', 'Taniec')
      .and('contain', 'Muzyka')
    });
  });