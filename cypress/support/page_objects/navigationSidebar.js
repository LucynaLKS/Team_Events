export class  NavigationSidebar{

    // This method sets minimum value rating and checks its setting value
      setMinRating(targetMinValue) {
        const step = 0.5;
    
        cy.get('[data-test="slider"] .ngx-slider-pointer-min').then(
          ($currentObject) => {
            const currentValue = parseInt($currentObject.attr("aria-valuetext"));
    
            if (currentValue < targetMinValue) {
              const stepRepeat = (targetMinValue - currentValue) / step;
    
              cy.wrap($currentObject).type("{rightarrow}".repeat(stepRepeat));
            } else {
              if (currentValue > targetMinValue) {
                const stepRepeat = (currentValue - targetMinValue) / step;
                cy.wrap($currentObject).type("{leftarrow}".repeat(stepRepeat)).wait(2000);
              }
            }
            cy.wrap($currentObject).should(
              "have.attr",
              "aria-valuenow",
              targetMinValue
            );
          }
        );
      }
    
      // This method sets maximum value rating and checks its setting value
      setMaxRating(targetMaxValue) {
        const step = 0.5;
    
        cy.get('[data-test="slider"] .ngx-slider-pointer-max').then(
          ($currentObject) => {
            const currentValue = parseInt($currentObject.attr("aria-valuetext"));
    
            if (currentValue < targetMaxValue) {
              const stepRepeat = (targetMaxValue - currentValue) / step;
    
              cy.wrap($currentObject).type("{rightarrow}".repeat(stepRepeat));
            } else {
              if (currentValue > targetMaxValue) {
                const stepRepeat = (currentValue - targetMaxValue) / step;
                cy.wrap($currentObject).type("{leftarrow}".repeat(stepRepeat)).wait(2000);
              }
            }
            cy.wrap($currentObject).should(
              "have.attr",
              "aria-valuenow",
              targetMaxValue
            );
          }
        );
      }
    
      // This method checks are there display the places with rating between min rating and max rating
      assertRating(minRating, maxRating) {
        this.setMinRating(minRating);
        this.setMaxRating(maxRating);
    
        cy.get('[data-test="rating"]').then(($places) => {
          cy.wrap($places).each((listItem) => {
            const itemRating = listItem.attr("ng-reflect-rating");
    
            cy.wrap(itemRating).then(parseFloat).should("be.gte", minRating);
            cy.wrap(itemRating).then(parseFloat).should("be.lte", maxRating);
          });
        });
      }

    //   This method searches for the given word
      searchWord() {
        cy.get('[data-test="input-search"]')
        .type("KATOWICE")
        cy.get('.search-button').click()
        cy.get('.page').should("contain", "Znalezione miejsca: 2")
        cy.get('[data-test=card-title]').should('contain', 'Next Room Katowice')
        .and('contain', 'Flyspot - Katowice Indoor Skydiving')
      }

    //   This method is for sort selected from dropdown
      dropdownPage() {
        
        cy.get('[data-test="sort-select"]').click();
        cy.get('[data-test="sort-option"]').contains('Z-A').click();
        cy.get('.title').should("contain", "Next Room Katowice");
  
      }
    }
    
    export const onNavigationSidebar = new NavigationSidebar();
    