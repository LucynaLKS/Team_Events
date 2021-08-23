//
/// <reference types="cypress" />

describe("List sorting", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should see the A-Z sorting", () => {
    cy.get('[date-test="sort-button A-Z"]').click();
    cy.get(".mat-card-title").should("contain", "BLOKatowice");
  });

  it("should see the Z-A sorting", () => {
    cy.get('[date-test="sort-button Z-A"]').click();
    cy.get(".mat-card-title").should("contain", "Vinoteka");
  });

  it("should see the No sorting", () => {
    cy.get('[date-test="sort-button No Sort"]').click();
    cy.get(".mat-card-title").should("contain", "Quest Cage Escape Room");
  });
});
