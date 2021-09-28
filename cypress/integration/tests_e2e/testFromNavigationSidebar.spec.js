//
/// <reference types="cypress" />

import { onNavigationSidebar } from "../../support/page_objects/navigationSidebar"

describe("Side-bar test with Page Object Pattern", () => {

    beforeEach(() => {
      cy.visit("/");
    });

    it(" ", () => {
        onNavigationSidebar.assertRating(2, 4)
        onNavigationSidebar.searchWord()
        onNavigationSidebar.dropdownPage()
      });

});
