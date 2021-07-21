//
/// <reference types="cypress" />

describe('Second Test', () => {
    it('clicking on the header', () => {
      
      cy.visit('http://localhost:4200')

      cy.get('h1')
      .should('contain', 'DeployDocs Team')
   
    })
  })