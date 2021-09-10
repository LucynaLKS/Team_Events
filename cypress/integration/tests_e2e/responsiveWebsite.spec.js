//
/// <reference types="cypress" />

describe("responsiveness website", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("checking the style values after changing the viewport to a mobile look - firt item", () => {
    cy.viewport(320, 568).wait(2000)
    cy.get('.place-card')
    .should('have.css', 'width', '258px')
  });

  it("checking the style values after changing the viewport to a mobile look - second item", () => {
    cy.viewport(360, 640).wait(2000)
    cy.get('.place-card')
    .should('have.css', 'width', '298px')
  });

  it("checking the style values after changing the viewport to a tablet look", () => {
    cy.viewport(1024, 1366)
    cy.get('.place-card')
    .should('have.css', 'width', '994px')
  });

  it("checking the style values after changing the viewport to a desktop look", () => {
    cy.viewport(1366, 768)
    cy.get('.place-card')
    .should('have.css', 'width', '1100px')
  });

  it("checking the style values after changing the viewport to a desktop look (Full HD)", () => {
    cy.viewport(1920, 1080)
    cy.get('.place-card')
    .should('have.css', 'width', '1100px')
  });
});
