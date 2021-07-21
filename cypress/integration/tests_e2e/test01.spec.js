//
/// <reference types="cypress" />

describe('First Test', () => {
    it('clicking on the header', () => {
      
      cy.visit('http://localhost:4200')

      cy.get('h1')
      .should('contain', 'Hello World')
   
    })
  })