//
/// <reference types="cypress" />

describe("List sorting", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  
  it("The list should expand and select the element", () => {
    
    cy.get('[data-test="sort-select"]')
    .click();
    cy.get('[data-test="sort-option"]').contains('A-Z').click();
    cy.get(".mat-card-title").should("contain", "BLOKatowice");

    cy.get('[data-test="sort-select"]').click();
    cy.get('[data-test="sort-option"]').contains('Z-A').click();
    cy.get('.title').should("contain", "Żurownia");

    cy.get('[data-test="sort-select"]').click();
    cy.get('[data-test="sort-option"]').contains('Ocena od najwyższej').click();
    cy.get('.title').should("contain", "Quest Cage Escape Room");

    cy.get('[data-test="sort-select"]').click();
    cy.get('[data-test="sort-option"]').contains('Ocena od najniższej').click();
    cy.get('.title').should("contain", "Komenda Wojewódzka Policji w Katowicach");

    cy.get('[data-test="sort-select"]').click();
    cy.get('[data-test="sort-option"]').contains('Brak').click();
    cy.get(".mat-card-title").should("contain", "Quest Cage Escape Room");
  }); 
});
