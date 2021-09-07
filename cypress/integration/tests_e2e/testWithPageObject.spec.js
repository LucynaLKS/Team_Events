//
/// <reference types="cypress" />

import { navigationTo } from "../../support/page_objects/navigationPage";
import { onSlider } from "../../support/page_objects/sliderMove";

describe("Dropdwon test with Page Object Pattern", () => {

    beforeEach(() => {
      cy.visit("/");
    });

    it("verify navigation across the dropdown", () => {
        navigationTo.dropdownPage()
      });

    it.only("verify raiting list", () => {
        onSlider.assertRating(1, 4)
    });

});
