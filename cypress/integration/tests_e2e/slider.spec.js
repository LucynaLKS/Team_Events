//
/// <reference types="cypress" />

describe("Slider with assertion", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should visit slider - min and max rating", () => {
    cy.get('[data-test="slider"] .ngx-slider-pointer-min').should(
      "have.attr",
      "aria-valuetext",
      "0"
    );
    // expect the card title to be displayed
    cy.get("[data-test='card-title']").should(
      "contain",
      "Quest Cage Escape Room"
    );

    cy.get('[data-test="slider"] .ngx-slider-pointer-max').should(
      "have.attr",
      "aria-valuetext",
      "5"
    );
    // expect the card title to be displayed
    cy.get("[data-test='card-title']").should(
      "contain",
      "Quest Cage Escape Room"
    );
  });

  it("should change value of the elements", () => {
    cy.get('[data-test="slider"] .ngx-slider-pointer-min')
      .type("{rightarrow}{rightarrow}")
      .should("have.attr", "aria-valuetext", "1");
    // expect the card title to be displayed
    cy.get("[data-test='card-title']").should(
      "contain",
      "Quest Cage Escape Room"
    );

    cy.get('[data-test="slider"] .ngx-slider-pointer-min')
      .type("{rightarrow}{rightarrow}")
      .should("have.attr", "aria-valuetext", "2");
    cy.get("[data-test='card-title']").should(
      "contain",
      "Quest Cage Escape Room"
    );

    cy.get('[data-test="slider"] .ngx-slider-pointer-min')
      .type("{leftarrow}")
      .should("have.attr", "aria-valuetext", "1.5");
    cy.get("[data-test='card-title']").should(
      "contain",
      "Quest Cage Escape Room"
    );

    cy.get('[data-test="slider"] .ngx-slider-pointer-max')
      .type("{leftarrow}{leftarrow}")
      .should("have.attr", "aria-valuetext", "4");
    cy.get("[data-test='card-title']").should(
      "contain",
      "Centrum Rozrywki Grawitacja"
    );

    cy.get('[data-test="slider"] .ngx-slider-pointer-max')
      .type("{leftarrow}")
      .should("have.attr", "aria-valuetext", "3.5");
    cy.get("[data-test='card-title']").should("contain", "Basen Brynów");

    cy.get('[data-test="slider"] .ngx-slider-pointer-min')
      .type("{home}")
      .should("have.attr", "aria-valuetext", "0");
    cy.get("[data-test='card-title']").should(
      "contain",
      "Komenda Wojewódzka Policji w Katowicach"
    );

    cy.get('[data-test="slider"] .ngx-slider-pointer-max')
      .type("{home}")
      .should("have.attr", "aria-valuetext", "0");
    // expect the card title not to be displayed
    cy.get(".page").should("not.contain.html", "mat-card-title");

    cy.get('[data-test="slider"] .ngx-slider-pointer-max')
      .type("{end}")
      .should("have.attr", "aria-valuetext", "5");
    cy.get("[data-test='card-title']").should(
      "contain",
      "Quest Cage Escape Room"
    );
  });
});
