//
/// <reference types="cypress" />

describe("responsiveness website", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("checking the image style values after changing the viewport to a mobile look - firt item", () => {
    cy.viewport(320, 568).wait(2000)
    cy.get('.place-card .images')
    .invoke('outerWidth').should('be.lt', 350);
  });

  it("checking the display view after changing the viewport to a mobile look - firt item", () => {
    cy.viewport(320, 568).wait(2000)
    cy.get('.place-card')
    .should('have.css', 'display', 'block');
  });

  it("checking the image style values after changing the viewport to a mobile look - second item", () => {
    cy.viewport(360, 640).wait(2000)
    cy.get('.place-card .images')
    .invoke('outerWidth').should('be.lt', 350);
  });

  it("checking the display view after changing the viewport to a mobile look - second item", () => {
    cy.viewport(360, 640).wait(2000)
    cy.get('.place-card')
    .should('have.css', 'display', 'block');
  });

  it("checking the image style values after changing the viewport to a tablet look", () => {
    cy.viewport(1024, 1366)
    cy.get('.place-card .images')
    .invoke('outerWidth').should('be.lt', 351);
  });

  it("checking the display view after changing the viewport to a tablet look", () => {
    cy.viewport(1024, 1366)
    cy.get('.place-card')
    .should('have.css', 'display', 'flex');
  });

  it("checking the image style values after changing the viewport to a desktop look", () => {
    cy.viewport(1366, 768)
    cy.get('.place-card .images')
    .invoke('outerWidth').should('be.lt', 351);
  });

  it("checking the display view after changing the viewport to a desktop look", () => {
    cy.viewport(1366, 768)
    cy.get('.place-card')
    .should('have.css', 'display', 'flex');
  });

  it("checking the image style values after changing the viewport to a desktop look (Full HD)", () => {
    cy.viewport(1920, 1080)
    cy.get('.place-card .images')
    .invoke('outerWidth').should('be.lt', 351);
  });

  it("checking the display view after changing the viewport to a desktop look (Full HD)", () => {
    cy.viewport(1920, 1080)
    cy.get('.place-card')
    .should('have.css', 'display', 'flex');
  });
});
