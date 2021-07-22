//
/// <reference types="cypress" />

describe("Hello World", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200");
  });

  it("Header should contain proper title", () => {
    cy.get("[data-test=header]").should("contain", "Hello World");
  });

  it("The name should appear on the screen", () => {
    cy.get('[data-test="input_name"]').type("Mieszko");

    cy.get("[data-test=button]").click();

    cy.get("app-name").should("contain", "Hi, Mieszko");
  });
});
