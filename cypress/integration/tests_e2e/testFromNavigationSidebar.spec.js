//
/// <reference types="cypress" />

import { onNavigationSidebar } from "../../support/page_objects/navigationSidebar"

describe("Side-bar test with Page Object Pattern", () => {

    beforeEach(() => {
      cy.visit("/");
    });

    it("Navigation sidebar should be working", () => {
        onNavigationSidebar.assertRating(2, 4)
        
        onNavigationSidebar.searchWord()
        cy.get('[data-test=card-title]').should("contain", "Katowice")

        onNavigationSidebar.dropdownPage()
        cy.get('.title').should("contain", "Quest Cage Escape Room Katowice");

        onNavigationSidebar.tags()
        cy.get('[data-test="chip-tag"]').should('contain', 'Aktywność')
        .and('contain', 'Picie')
      });

});
