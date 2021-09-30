//
/// <reference types="cypress" />

describe("Searching places", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    /*
    Scenario:
    Given: user is on website Team Events
    When: user enters word in search field
    And: user sees that word in search field
    And: user clicks on the search button
    Then: the places with that word displays on screen
    And: the sentence about quantity searched places displays on screen
     */
  
    it("Searching for an existing word by entering lowercase", () => {
        cy.get('[data-test="input-search"]')
        .type("vinoteka")
        cy.get('.search-button').click()
        cy.get('.page').should("contain", "Znalezione miejsca: 1")
        cy.get('[data-test=card-title]').should('contain', 'Vinoteka')
    });

    it("Searching for an existing word by entering the first capital letter", () => {
        cy.get('[data-test="input-search"]')
        .type("Vinoteka")
        cy.get('.search-button').click()
        cy.get('.page').should("contain", "Znalezione miejsca: 1")
        cy.get('[data-test=card-title]').should('contain', 'Vinoteka')
    });

    it("Searching for an existing word by entering all capital letters", () => {
        cy.get('[data-test="input-search"]')
        .type("KATOWICE")
        cy.get('.search-button').click()
        cy.get('.page').should("contain", "Znalezione miejsca: 7")
        cy.get('[data-test=card-title]').should('contain', 'Katowice')
    });
  
    it("Searching for an unexisting word by entering lowercase ", () => {
        cy.get('[data-test="input-search"]')
        .type("bar")
        cy.get('.search-button').click()
        cy.get('.page').should("contain", "Znalezione miejsca: 0")
    });
  
  })
  