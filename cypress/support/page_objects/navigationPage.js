export class NavigationPage{

    dropdownPage() {
        cy.get('[data-test="sort-select"]').then( dropdown => {
            cy.wrap(dropdown).click()
            cy.get('[data-test="sort-option"]').each( (listItem, index) => {
                const itemText = listItem.text().trim()

                const titles = {
                    "Brak": "Quest Cage Escape Room",
                    "A-Z": "BLOKatowice",
                    "Z-A": "Żurownia",
                    "Ocena od najwyższej": "Quest Cage Escape Room",
                    "Ocena od najniższej": "Komenda Wojewódzka Policji w Katowicach"
                }

                cy.wrap(listItem).click()
                cy.wrap(dropdown).should('contain', itemText)
                cy.get(".mat-card-title").should('contain', titles[itemText])
                if( index < 4){
                    cy.wrap(dropdown).click()
                }
            
            })
        })

    }

}

export const navigationTo = new NavigationPage()
