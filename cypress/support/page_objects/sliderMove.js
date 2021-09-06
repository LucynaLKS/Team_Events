export class Slider {

    sliderByMovingIt() {

        const currentValueMin = 0;
        const targetValueMin = 3;
        const currentValueMax = 5;
        const targetValueMax = 3;
        const increment = 1;
        const setTargetValueMin = (targetValueMin - currentValueMin) / increment;
        const setTargetValueMax = (currentValueMax - targetValueMax) / increment;
        const rightArrow = '{rightarrow}'.repeat(setTargetValueMin);
        const leftArrow = '{leftarrow}'.repeat(setTargetValueMax);
        
        
        cy.get('[data-test="slider"] .ngx-slider-pointer-min')
            .should('have.attr', 'aria-valuetext', '0')
            .type(rightArrow)

        cy.get('[data-test="slider"] .ngx-slider-pointer-min')
            .should('have.attr', 'aria-valuenow', '1.5')

        cy.get('[data-test="slider"] .ngx-slider-pointer-max')
            .should('have.attr', 'aria-valuetext', '5')
            .type(leftArrow)

        cy.get('[data-test="slider"] .ngx-slider-pointer-max')
            .should('have.attr', 'aria-valuetext', '4')

        cy.get("[data-test='card-title']").should("contain", "Centrum Rozrywki Grawitacja")

    }

}

export const onSlider = new Slider()
