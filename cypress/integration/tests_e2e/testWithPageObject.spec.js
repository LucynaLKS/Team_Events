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

    it("should move slider", () => {
        onSlider.sliderByMovingIt()
    });

});
