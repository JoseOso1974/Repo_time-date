describe('Realizar una accion', () => {
    it('test de login valido', () => {
        cy.visit('https://www.timeanddate.com/')
        cy.get(':nth-child(1) > .tad-box__content > .tad-clip-blocktad-clip-block--picker > .bn-header__searchbox > .picker-city__input').type('Barcelona(enter)')
        cy.get(':nth-child(1) > .tad-box__content > .tad-clip-blocktad-clip-block--picker > .bn-header__searchbox > .picker-city__button > .i-font').click()



 })
})