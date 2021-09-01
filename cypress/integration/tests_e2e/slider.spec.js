//
/// <reference types="cypress" />

describe("Slider with assertion", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should visit slider - min and max rating", () => {

    cy.get('[data-test="slider"] .ngx-slider-pointer-min')
    .should('have.attr', 'aria-valuetext', '0')

    cy.get('[data-test="slider"] .ngx-slider-pointer-max')
    .should('have.attr', 'aria-valuetext', '5')
  });

  it("should change value of the elements", () => {

    cy.get('[data-test="slider"] .ngx-slider-pointer-min')
    .type('{rightarrow}{rightarrow}')
    .should('have.attr', 'aria-valuetext', '1')

    cy.get('[data-test="slider"] .ngx-slider-pointer-min')
    .type('{rightarrow}{rightarrow}')
    .should('have.attr', 'aria-valuetext', '2')

    cy.get('[data-test="slider"] .ngx-slider-pointer-min')
    .type('{leftarrow}')
    .should('have.attr', 'aria-valuetext', '1.5')
    
    cy.get('[data-test="slider"] .ngx-slider-pointer-max')
    .type('{leftarrow}{leftarrow}')
    .should('have.attr', 'aria-valuetext', '4')

    cy.get('[data-test="slider"] .ngx-slider-pointer-max')
    .type('{rightarrow}')
    .should('have.attr', 'aria-valuetext', '4.5')

    cy.get('[data-test="slider"] .ngx-slider-pointer-min')
    .type('{home}')
    .should('have.attr', 'aria-valuetext', '0')

    cy.get('[data-test="slider"] .ngx-slider-pointer-max')
    .type('{home}')
    .should('have.attr', 'aria-valuetext', '0')

    cy.get('[data-test="slider"] .ngx-slider-pointer-max')
    .type('{end}')
    .should('have.attr', 'aria-valuetext', '5')
  });
});
